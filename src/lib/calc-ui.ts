/* Shared browser helpers for calculators: paired range/text inputs and animated money. */
import { fmtMoney } from './mortgage';

const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const shown = new WeakMap<HTMLElement, number>();

export function parseNum(s: string): number { return Number(String(s).replace(/[^0-9.\-]/g, '')) || 0; }

export function animateMoney(el: HTMLElement, to: number, digits = 0, prefix = '') {
  const from = shown.get(el) ?? to; shown.set(el, to);
  if (reduce || Math.abs(to - from) < 1) { el.textContent = prefix + fmtMoney(to, digits); return; }
  const t0 = performance.now(), dur = 480;
  const step = (t: number) => { let k = Math.min(1, (t - t0) / dur); k = 1 - Math.pow(1 - k, 3); el.textContent = prefix + fmtMoney(from + (to - from) * k, digits); if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

/** Keep a range input and its typed twin in sync; call onChange after either changes. */
export function pair(range: HTMLInputElement, text: HTMLInputElement, onChange: () => void, digits = 0) {
  const show = () => { text.value = digits ? Number(range.value).toFixed(digits) : Number(range.value).toLocaleString('en-CA'); };
  range.addEventListener('input', () => { show(); onChange(); });
  text.addEventListener('change', () => { const v = parseNum(text.value); range.value = String(Math.min(Number(range.max), Math.max(Number(range.min), v))); show(); onChange(); });
  show();
}

export function num(root: ParentNode, id: string): number {
  const el = root.querySelector<HTMLInputElement | HTMLSelectElement>(`#${id}`);
  return el ? Number(el.value) : 0;
}

export function radio(root: ParentNode, name: string, fallback: string): string {
  return root.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`)?.value ?? fallback;
}

/** Collect a summary for the "email my simulation" feature. */
export function setSummary(root: ParentNode, tool: string, lines: Record<string, string>) {
  const f = root.querySelector<HTMLInputElement>('[data-summary]');
  if (f) f.value = JSON.stringify({ tool, lines });
}
