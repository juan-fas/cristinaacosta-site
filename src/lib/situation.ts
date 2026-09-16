/* Tiny shared store for the visitor's chosen situation.
   Persists in sessionStorage so the choice carries from Home to Start. */
type Listener = (key: string) => void;
const KEY = 'ca-situation';
const listeners = new Set<Listener>();
let current = 'first';
try {
  const fromUrl = new URLSearchParams(location.search).get('for');
  const saved = sessionStorage.getItem(KEY);
  current = fromUrl || saved || 'first';
} catch { /* storage unavailable */ }

export const situationStore = {
  get: () => current,
  set(key: string) {
    current = key;
    try { sessionStorage.setItem(KEY, key); } catch { /* ignore */ }
    document.documentElement.dataset.situation = key;
    listeners.forEach((l) => l(key));
  },
  subscribe(l: Listener) { listeners.add(l); l(current); return () => listeners.delete(l); },
};
document.documentElement.dataset.situation = current;
