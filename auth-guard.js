// ============================================================
//  BUS 16 - sign-in helper. Every page of the app loads this file.
//  Nobody needs an account to look around: the home screen, the map, the price list,
//  the shops and the village list all open for guests.
//  An account (Google + a username) is only needed for things that give or use points
//  (the daily spin for now). A page that must have an account says so with:
//      <meta name="bus16-auth" content="required">
//
//  Put these three lines inside <head> of every page (index.html already has them):
//    <style>html{visibility:hidden}</style>
//    <script src="i18n.js"></script>
//    <script type="module" src="auth-guard.js"></script>
//
//  What a page gets from this file:
//    window.BUS16_USER      only when someone is signed in (a guest has none)
//    'bus16:user' event     fired when the signed-in user (or their points) is known/changes
//    window.bus16Spin(n)    save the daily-spin prize (signed-in users only)
//    window.bus16SignIn(next)  take a guest to the Google sign-in screen
// ============================================================
// ------------------------------------------------------------------
//  DEVELOPER MODE (for testers). Change these two lines at launch.
//    DEV_TOOLS = true     -> the developer option exists (testers can spin the wheel WITHOUT signing in).
//    DEV_STARTS_ON = true -> a new visitor starts in developer mode. Testers can switch to the real login
//                            flow from the account circle, and back from the sign-in sheet.
//  For the real launch: DEV_TOOLS = false  (then everybody must sign in with Google to spin, no dev mode at all).
//  Developer mode keeps points and the daily spin ONLY on that phone (localStorage). It never writes to the database.
// ------------------------------------------------------------------
const DEV_TOOLS = true;
const DEV_STARTS_ON = true;

const root = document.documentElement;
const required = !!document.querySelector('meta[name="bus16-auth"][content="required"]');
const page = () => (location.pathname.split('/').pop() || 'index.html') + location.search;
const goLogin = extra => location.replace('login.html?' + (extra || '') + 'next=' + encodeURIComponent(page()));
const toLanguage = () => goLogin('');                 // first visit: the language screen (no sign-in asked)
const toLogin = () => goLogin('signin=1&');           // a page that needs an account
const reveal = () => { root.style.visibility = 'visible'; };

window.BUS16_DEV_TOOLS = DEV_TOOLS;
const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const devOn = () => DEV_TOOLS && (lsGet('bus16_dev_mode') === null ? DEV_STARTS_ON : lsGet('bus16_dev_mode') === '1');
// ?dev=1 / ?dev=0 in the address switches the mode (handy to send testers a link), then cleans the address.
try {
  const q = new URLSearchParams(location.search);
  if (DEV_TOOLS && (q.get('dev') === '1' || q.get('dev') === '0')) {
    lsSet('bus16_dev_mode', q.get('dev'));
    q.delete('dev'); history.replaceState(null, '', location.pathname + (q.toString() ? '?' + q : ''));
  }
} catch (e) {}
window.bus16DevSet = on => { lsSet('bus16_dev_mode', on ? '1' : '0'); location.href = 'index.html'; };

// Guests who press something that needs an account go through here.
window.bus16SignIn = next => {
  const n = /^[A-Za-z0-9_-]+\.html(\?[A-Za-z0-9_=&.%-]*)?$/.test(next || '') ? next : page();
  location.href = 'login.html?signin=1&next=' + encodeURIComponent(n);
};

// The Beirut calendar day as a number (same rule as the real spin).
const beirutDay = () => {
  const p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Beirut', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date()).reduce((o, x) => (o[x.type] = x.value, o), {});
  return Date.UTC(+p.year, +p.month - 1, +p.day) / 86400000;
};
// Developer mode: a pretend account that lives only on this phone. Nothing is sent to Firebase.
function installDev() {
  const load = () => { try { return JSON.parse(lsGet('bus16_dev_data') || '{}'); } catch (e) { return {}; } };
  const save = d => lsSet('bus16_dev_data', JSON.stringify(d));
  const d = load();
  window.BUS16_USER = { uid: 'dev', dev: true, name: 'Developer', username: 'developer', email: '', profile: { points: Number(d.points) || 0, spinDay: Number(d.spinDay) || 0, profileDone: true } };
  const tell = () => window.dispatchEvent(new CustomEvent('bus16:user', { detail: window.BUS16_USER }));
  window.bus16Refresh = async () => tell();
  window.bus16SignOut = () => window.bus16DevSet(false);
  window.bus16Spin = async reward => {
    reward = Math.floor(Number(reward));
    if (!(reward >= 0 && reward <= 100)) return { ok: false, reason: 'bad' };
    const cur = load(), today = beirutDay();
    if (Number(cur.spinDay || 0) >= today) return { ok: false, reason: 'done' };
    const points = Number(cur.points || 0) + reward;
    save({ points, spinDay: today });
    window.BUS16_USER.profile = Object.assign({}, window.BUS16_USER.profile, { points, spinDay: today });
    tell();
    return { ok: true, points };
  };
  // Testers can spin again and again: this clears today's lock (points are kept).
  window.bus16DevResetSpin = () => { const cur = load(); save({ points: Number(cur.points) || 0, spinDay: 0 }); window.BUS16_USER.profile.spinDay = 0; tell(); };
  window.bus16DevResetPoints = () => { save({ points: 0, spinDay: 0 }); window.BUS16_USER.profile = Object.assign({}, window.BUS16_USER.profile, { points: 0, spinDay: 0 }); tell(); };
  tell();
}
// Somebody who isn't signed in: in developer mode they get the pretend account, otherwise they are a plain guest.
const guest = () => { if (!required && devOn()) installDev(); reveal(); };

function fail() {
  root.style.visibility = 'visible';
  const msg = window.I18N ? window.I18N.t('g.fail') : 'Can’t reach the sign-in service.\nCheck your connection and reload the page.';
  document.body.innerHTML = '<p style="font:16px/1.6 system-ui,sans-serif;color:#eef1f7;background:#070b16;margin:0;padding:48px 24px;min-height:100vh;text-align:center;white-space:pre-line"></p>';
  document.body.firstChild.textContent = msg;
}
// A page that doesn't need an account just opens as a guest when sign-in can't be reached.
const asGuest = () => (required ? fail() : guest());
if (!required) setTimeout(reveal, 5000);   // slow or no connection: don't keep a guest staring at a blank screen

(async () => {
  try {
    // The language screen comes first: nobody gets into any page before choosing a language.
    if (!window.I18N || !window.I18N.chosen) return toLanguage();
    const fb = await import('./firebase-config.js');
    if (!fb.isConfigured) return required ? toLogin() : guest();

    let wasIn = false;
    fb.onAuthStateChanged(fb.auth, async user => {
      if (!user || !user.emailVerified) {                  // a guest (or an old unverified email account)
        if (wasIn) return required ? toLogin() : location.reload();   // just signed out
        return required ? toLogin() : guest();
      }

      // Must also have picked a username (this is what makes an account complete).
      let profile = null;
      try {
        const snap = await fb.get(fb.ref(fb.db, 'users/' + user.uid));
        profile = snap.exists() ? snap.val() : null;
      } catch (e) { console.error('Bus 16 could not read the profile:', e); return asGuest(); }
      if (!profile || !profile.username) return required ? toLogin() : guest();   // signed in with Google but no username yet: treated as a guest until they pick one
      wasIn = true;

      window.BUS16_USER = { uid: user.uid, name: profile.name || user.displayName || '', username: profile.username, email: user.email || '', profile };
      window.bus16SignOut = () => fb.signOut(fb.auth);
      // Re-read the profile (e.g. after Bus Points changed) and tell the page.
      window.bus16Refresh = async () => {
        try {
          const s2 = await fb.get(fb.ref(fb.db, 'users/' + user.uid));
          if (s2.exists()) { window.BUS16_USER.profile = s2.val(); window.dispatchEvent(new CustomEvent('bus16:user', { detail: window.BUS16_USER })); }
        } catch (e) { /* offline: keep what we have */ }
      };
      // Daily spin: add the prize to the balance and mark today as used, in ONE write (so they cannot be split).
      // The database rules only allow +0..100 BP, and only together with a newer spinDay.
      window.bus16Spin = async reward => {
        reward = Math.floor(Number(reward));
        if (!(reward >= 0 && reward <= 100)) return { ok: false, reason: 'bad' };
        const p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Beirut', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date()).reduce((o, x) => (o[x.type] = x.value, o), {});
        const today = Date.UTC(+p.year, +p.month - 1, +p.day) / 86400000;
        const snap = await fb.get(fb.ref(fb.db, 'users/' + user.uid));
        const cur = snap.exists() ? snap.val() : {};
        if (Number(cur.spinDay || 0) >= today) { window.BUS16_USER.profile = cur; return { ok: false, reason: 'done' }; }
        const points = Number(cur.points || 0) + reward;
        const c = await import('./bus16-common.js');
        await c.update(fb.ref(fb.db), { ['users/' + user.uid + '/points']: points, ['users/' + user.uid + '/spinDay']: today });
        window.BUS16_USER.profile = Object.assign({}, cur, { points, spinDay: today });
        window.dispatchEvent(new CustomEvent('bus16:user', { detail: window.BUS16_USER }));
        return { ok: true, points };
      };
      window.dispatchEvent(new CustomEvent('bus16:user', { detail: window.BUS16_USER }));
      root.style.visibility = 'visible';
    }, () => (required ? toLogin() : guest()));
  } catch (e) {
    console.error('Bus 16 sign-in could not start:', e);
    asGuest();
  }
})();

// Back button after signing out can show a cached page: reload it so the gate runs again.
addEventListener('pageshow', e => { if (e.persisted) location.reload(); });
