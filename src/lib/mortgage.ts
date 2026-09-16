/* Mortgage maths. Pure functions, no DOM. Canadian conventions:
   fixed rates compound semi-annually; payments monthly, bi-weekly or weekly. */
import { constants } from '../data/site';

export type Freq = 12 | 26 | 52;

/** Periodic rate from an annual nominal rate compounded semi-annually. */
export function periodicRate(annualPct: number, freq: Freq): number {
  return Math.pow(1 + annualPct / 100 / 2, 2 / freq) - 1;
}

/** Payment for principal pv over n periods at periodic rate r. */
export function pmt(r: number, n: number, pv: number): number {
  if (pv <= 0 || n <= 0) return 0;
  if (r === 0) return pv / n;
  return (pv * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

/** Present value factor: how much principal a payment of 1 supports. */
export function mortgageFactor(r: number, n: number): number {
  if (n <= 0) return 0;
  if (r === 0) return n;
  return (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
}

export function minDownPayment(price: number): number {
  const p = Math.max(0, price);
  if (p <= constants.minDownTier1) return p * 0.05;
  if (p < constants.insuredPriceCap) return constants.minDownTier1 * 0.05 + (p - constants.minDownTier1) * 0.10;
  return p * 0.20;
}

export function isInsurable(price: number, downPct: number): boolean {
  return price > 0 && price < constants.insuredPriceCap && downPct >= 0.05 && downPct < 0.20;
}

export function premiumRate(downPct: number, amortYears: number): number {
  const ext = amortYears > 25;
  for (const band of constants.premiums) {
    if (downPct >= band.minPct) return ext ? band.ext : band.std;
  }
  return 0;
}

export function qualifyingRate(contractPct: number): number {
  return Math.max(contractPct / 100 + constants.stressTestBuffer, constants.stressTestFloor);
}

export type PaymentInput = { price: number; down: number; ratePct: number; amortYears: number; freq: Freq };
export type PaymentResult = {
  principal: number; downPct: number; insurable: boolean; premiumRate: number; premium: number;
  totalMortgage: number; payment: number; periods: number; totalInterest: number; belowMinDown: boolean; minDown: number;
};

export function payment(i: PaymentInput): PaymentResult {
  const price = Math.max(0, i.price), down = Math.min(Math.max(0, i.down), price);
  const downPct = price > 0 ? down / price : 0;
  const principal = price - down;
  const insurable = isInsurable(price, downPct);
  const pr = insurable ? premiumRate(downPct, i.amortYears) : 0;
  const premium = principal * pr;
  const totalMortgage = principal + premium;
  const periods = Math.round(i.amortYears * i.freq);
  const r = periodicRate(i.ratePct, i.freq);
  const pay = pmt(r, periods, totalMortgage);
  const totalInterest = pay * periods - totalMortgage;
  const minDown = minDownPayment(price);
  return { principal, downPct, insurable, premiumRate: pr, premium, totalMortgage, payment: pay, periods, totalInterest, belowMinDown: down < minDown - 0.5, minDown };
}

export type AffordabilityInput = { income: number; debtsMonthly: number; down: number; ratePct: number; amortYears: number; taxMonthly: number; heatMonthly: number; condoMonthly: number };
export type AffordabilityResult = { qualRate: number; maxMortgage: number; maxPrice: number; gdsPayment: number; tdsPayment: number; limitedBy: 'GDS' | 'TDS'; monthlyAtContract: number };

export function affordability(i: AffordabilityInput): AffordabilityResult {
  const monthlyIncome = i.income / 12;
  const housingOther = i.taxMonthly + i.heatMonthly + i.condoMonthly * 0.5;
  const gdsRoom = monthlyIncome * constants.gdsLimit - housingOther;
  const tdsRoom = monthlyIncome * constants.tdsLimit - housingOther - i.debtsMonthly;
  const room = Math.max(0, Math.min(gdsRoom, tdsRoom));
  const qualRate = qualifyingRate(i.ratePct);
  const rq = Math.pow(1 + qualRate / 2, 2 / 12) - 1;
  const n = i.amortYears * 12;
  const maxMortgage = room * mortgageFactor(rq, n);
  const maxPrice = maxMortgage + i.down;
  const rc = periodicRate(i.ratePct, 12);
  return { qualRate, maxMortgage, maxPrice, gdsPayment: gdsRoom, tdsPayment: tdsRoom, limitedBy: gdsRoom <= tdsRoom ? 'GDS' : 'TDS', monthlyAtContract: pmt(rc, n, maxMortgage) };
}

export const fmtMoney = (n: number, digits = 0) =>
  isFinite(n) ? '$' + n.toLocaleString('en-CA', { minimumFractionDigits: digits, maximumFractionDigits: digits }) : '—';
export const fmtPct = (n: number, digits = 2) => (isFinite(n) ? (n * 100).toFixed(digits) + '%' : '—');
