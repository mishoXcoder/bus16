// Small helpers shared by login.html and profile.html. Nothing to edit here.
export { update } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';
export { deleteUser } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

// Usernames: 3-20 characters, lowercase letters / numbers / underscore, starting with a letter.
export const USERNAME_RE = /^[a-z][a-z0-9_]{2,19}$/;

// Turns "03 123 456", "+961 3 123 456", "71123456" ... into digits with country code ("9613123456").
// Returns null if it doesn't look like a phone number. Lebanese numbers are assumed unless a "+" is typed.
export function normPhone(raw) {
  let s = String(raw || '').trim();
  const plus = s.startsWith('+');
  s = s.replace(/\D/g, '');
  if (!s) return null;
  if (!plus) {
    if (s.startsWith('00')) s = s.slice(2);
    else if (s.startsWith('0')) s = '961' + s.slice(1);
    else if (s.length <= 8) s = '961' + s;
  }
  if (s.startsWith('961')) { const n = s.slice(3).length; if (n < 7 || n > 8) return null; }
  return s.length >= 8 && s.length <= 15 ? s : null;
}

// What the person typed in the sign-in box -> the key used in the lookup table (or null).
export function loginKey(raw) {
  const v = String(raw || '').trim();
  if (/^[A-Za-z][A-Za-z0-9_]{2,19}$/.test(v)) return 'u_' + v.toLowerCase();
  const p = normPhone(v);
  return p ? 'p_' + p : null;
}
