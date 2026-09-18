/* Single source of truth for business facts.
   Every value here was confirmed by Juan Acosta on 2026-09-15/16 unless marked TODO. */

export const site = {
  name: 'Cristina Acosta Mortgage Team',
  shortName: 'Cristina Acosta Mortgage Team',
  url: 'https://cristinaacosta.ca',
  slogan: 'Understand every step… move forward with confidence.',
  sloganEs: 'Entiende cada paso… avanza con confianza.',
  email: 'hello@cristinaacosta.ca',
  social: {
    instagram: 'https://www.instagram.com/cristinaacostateam',
    tiktok: 'https://www.tiktok.com/@cristinaacostateam',
    facebook: 'https://www.facebook.com/cristinaacostateam',
  },
  hours: [
    { days: 'Monday to Friday', hours: '8 am to 8 pm' },
    { days: 'Saturday and Sunday', hours: '8 am to 1 pm' },
  ],
  // Machine-readable twin of `hours` above, for schema.org openingHoursSpecification.
  // Keep in sync with `hours` if the schedule changes.
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
    { days: ['Saturday', 'Sunday'], opens: '08:00', closes: '13:00' },
  ],
  responseTime: 'Usually within 30 minutes by email, faster by phone',
  languages: ['English', 'Español'],
};

export const brokerage = {
  // Confirmed by Juan 2026-09-16. QA: verify against RECA's public licensee search before launch.
  name: 'Enrich Mortgage Group',
  network: 'Mortgage Alliance',
  affiliation: 'Independently owned & operated network member of Mortgage Alliance',
  regulator: 'Real Estate Council of Alberta',
  regulatorShort: 'RECA',
  regulatorUrl: 'https://www.reca.ca/',
  procheckUrl: 'https://procheck.reca.ca/',   // RECA's public licence search
  address: {
    line1: '150, 550 71 Avenue SE',
    city: 'Calgary',
    province: 'Alberta',
    provinceCode: 'AB',
    postal: 'T2H 0S6',
    country: 'Canada',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=550+71+Avenue+SE+Calgary+AB+T2H+0S6',
  },
  // Broker-approved statement 2026-09-16.
  lenderStatement: 'access to 249 lenders through Mortgage Alliance',
  privacyNoticeUrl: 'https://www.mortgagealliance.com/en/JuanAcosta/privacy-policy/',
};

export type Person = {
  slug: string;
  first: string;
  name: string;
  title: 'Mortgage Associate';
  licence: string;
  licensedSince: number;
  languages: string[];
  phone: string;       // display
  phoneE164: string;   // tel: and WhatsApp
  email: string;
  booking?: string;
  apply: string;
  focus: string;       // one line: who they help most
  photo: 'cristina' | 'juan' | 'sheryl';
};

export const team: Person[] = [
  {
    slug: 'cristina-acosta', first: 'Cristina', name: 'Cristina Acosta', title: 'Mortgage Associate',
    licence: 'CON-00065640', licensedSince: 2019, languages: ['English', 'Español'],
    phone: '403 801 2857', phoneE164: '+14038012857', email: 'cristina@enrichmortgage.ca',
    booking: 'https://calendar.app.google/EBhev6adMfZsBq7r5',
    apply: 'https://apply.mortgageboss.ca/MAC/CristinaAcosta',
    focus: 'Newcomers on work permits or PR, first-time buyers, renewals and refinances.',
    photo: 'cristina',
  },
  {
    slug: 'juan-acosta', first: 'Juan', name: 'Juan Acosta', title: 'Mortgage Associate',
    licence: 'CON-00123269', licensedSince: 2024, languages: ['English', 'Español'],
    phone: '825 733 3244', phoneE164: '+18257333244', email: 'juan@enrichmortgage.ca',
    booking: 'https://calendar.app.google/p7V3yphXaJzDkaAx5',
    apply: 'https://apply.mortgageboss.ca/MAC/JuanAcosta?l=en',
    focus: 'First-time buyers, self-employed income, and files a bank has already declined.',
    photo: 'juan',
  },
  {
    slug: 'sheryl-beaver', first: 'Sheryl', name: 'Sheryl Beaver', title: 'Mortgage Associate',
    licence: '00117736', licensedSince: 2024, languages: ['English'],
    phone: '403 336 3463', phoneE164: '+14033363463', email: 'Sheryl.beaver@enrichmortgage.ca',
    booking: undefined, // TODO: Sheryl to create a Google appointment page
    apply: 'https://apply.mortgageboss.ca/MAC/SherylAnnBeaver',
    focus: 'First-time buyers, self-employed professionals, refinancing and home equity.',
    photo: 'sheryl',
  },
];

export const whatsapp = (p: Person, text = '') =>
  `https://wa.me/${p.phoneE164.replace('+', '')}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const nav = [
  { href: '/mortgages', label: 'Mortgages' },
  { href: '/calculators', label: 'Calculators' },
  { href: '/about', label: 'Team' },
  { href: '/learn', label: 'Learn' },
  { href: '/es', label: 'Español', lang: 'es' },
];

export const situations = [
  { slug: 'first-time-buyers', key: 'first', label: "I'm buying my first home", short: 'First-time buyers', icon: 'home',
    blurb: 'Down payment, programs, pre-approval and what happens after your offer is accepted.' },
  { slug: 'new-to-canada', key: 'new', label: "I'm new to Canada", short: 'New to Canada', icon: 'newcomer',
    blurb: 'Work permit, PR or citizen: which lenders accept your status and your income history.' },
  { slug: 'self-employed', key: 'self', label: "I'm self-employed", short: 'Self-employed', icon: 'briefcase',
    blurb: 'Your tax return is not your income. We show lenders the business behind it.' },
  { slug: 'renewal', key: 'renew', label: 'My mortgage is renewing', short: 'Renewal and switch', icon: 'renew',
    blurb: 'Your renewal letter is an offer. We check it against the market before you sign.' },
  { slug: 'refinance', key: 'refi', label: 'I want to use my equity', short: 'Refinance and equity', icon: 'equity',
    blurb: 'Debt consolidation, renovations, a second property: the cost of each way to use your equity.' },
  { slug: 'investment-properties', key: 'invest', label: "I'm buying to rent out", short: 'Investment properties', icon: 'invest',
    blurb: 'Cash flow first, then the property. Rental income rules by lender.' },
  { slug: 'commercial', key: 'commercial', label: 'I need a commercial mortgage', short: 'Commercial', icon: 'building',
    blurb: 'We assess the file and coordinate with commercial specialists when the deal calls for one.' },
] as const;

export type SituationKey = typeof situations[number]['key'];

/* The seven-step process, rewritten per situation for the Path. */
export const stepNames = ['Conversation', 'Review', 'Strategy', 'Application', 'Approval', 'Close', 'Ongoing'];

export const pathCopy: Record<SituationKey, string[]> = {
  first: ['What you can afford, honestly, before you fall for a listing.', 'Down payment, credit and the programs you qualify for.', 'Your options across lenders, not one bank’s menu.', 'A pre-approval you can shop with.', 'Conditions explained line by line.', 'Lawyer, realtor and lender coordinated to your closing date.', 'Your first renewal, planned from day one.'],
  new: ['Your status and what lenders accept, in plain terms.', 'Foreign income and credit history, translated for a Canadian file.', 'Newcomer programs and the lenders that actually use them.', 'Documents prepared the way lenders read them.', 'Approval walked through in your language.', 'Closing with your lawyer and realtor.', 'Support as your status changes.'],
  self: ['How you actually earn, not just the tax line.', 'Two years of returns, add-backs and averages.', 'Prime, stated-income or alternative lenders, with the trade-offs.', 'The file structured so your income is visible.', 'Conditions handled with your accountant.', 'Funding coordinated to your closing date.', 'A review when the business grows.'],
  renew: ['Your renewal letter is an offer, not an order.', 'Penalty, rate and term compared.', 'The market checked 90 days before your date.', 'Switch or stay, with the maths shown.', 'Approval with the new lender, if you switch.', 'The transfer handled, usually with no lawyer needed.', 'Your next renewal already on our calendar.'],
  refi: ['What you want the equity for, and whether it is the right tool.', 'Home value, balance and available equity.', 'Refinance, HELOC or second mortgage compared on total cost.', 'Appraisal and application submitted.', 'Approval and payout of debts arranged.', 'Funds at your lawyer’s office.', 'Reviewed again as rates move.'],
  invest: ['Cash flow first, then the property.', 'Rental income rules by lender.', 'Down payment and the right lender for the unit count.', 'Application with rental offsets included.', 'Conditions cleared with property documents.', 'Closing with the tenant in place.', 'A plan for the next one.'],
  commercial: ['What the property is for and how it earns.', 'Financials, leases and the borrower structure.', 'Which commercial lenders fit, and when a specialist should lead.', 'The package prepared with the right partner.', 'Terms explained before you commit.', 'Closing coordinated with your lawyer and accountant.', 'Reviewed as the business changes.'],
};

/* Regulatory constants used by every calculator. Verify against the official source
   before each deploy and update the date. Shown on every result. */
export const constants = {
  verified: '2026-09-16', // CMHC premium table and $1.5M cap checked 2026-09-16 against cmhc-schl.gc.ca; 30-year insured amortization is limited to first-time buyers and new builds
  stressTestFloor: 0.0525,   // OSFI minimum qualifying rate floor
  stressTestBuffer: 0.02,    // contract rate + 2%
  gdsLimit: 0.39,
  tdsLimit: 0.44,
  insuredPriceCap: 1_500_000,
  minDownTier1: 500_000,     // 5% up to this
  // Mortgage default insurance premium by down-payment band (standard and 30-year amortization)
  premiums: [
    { minPct: 0.20, std: 0, ext: 0 },
    { minPct: 0.15, std: 0.028, ext: 0.030 },
    { minPct: 0.10, std: 0.031, ext: 0.033 },
    { minPct: 0.05, std: 0.040, ext: 0.042 },
  ],
  // Alberta Land Titles registration (no land transfer tax): $50 base + $5 per $5,000 of value for both transfers and mortgages, effective 2024-10-20 (verified 2026-09-16).
  albertaTitle: { transferBase: 50, transferPer5000: 5, mortgageBase: 50, mortgagePer5000: 5 },
};
