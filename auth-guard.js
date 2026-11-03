// ============================================================
//  BUS 16 - login gate. Every page of the app loads this file.
//  Nobody sees a page until they are signed in, have a verified email
//  and have picked a username.
//
//  Put these three lines inside <head> of every page (index.html already has them):
//    <style>html{visibility:hidden}</style>
//    <script src="i18n.js"></script>
//    <script type="module" src="auth-guard.js"></script>
// ============================================================
const root = document.documentElement;
const page = () => (location.pathname.split('/').pop() || 'index.html') + location.search;
const toLogin = () => location.replace('login.html?next=' + encodeURIComponent(page()));

function fail() {
  root.style.visibility = 'visible';
  const msg = window.I18N ? window.I18N.t('g.fail') : 'Can’t reach the sign-in service.\nCheck your connection and reload the page.';
  document.body.innerHTML = '<p style="font:16px/1.6 system-ui,sans-serif;color:#eef1f7;background:#070b16;margin:0;padding:48px 24px;min-height:100vh;text-align:center;white-space:pre-line"></p>';
  document.body.firstChild.textContent = msg;
}

(async () => {
  try {
    // The language screen comes first: nobody gets into any page before choosing a language.
    if (!window.I18N || !window.I18N.chosen) return toLogin();
    const fb = await import('./firebase-config.js');
    if (!fb.isConfigured) return toLogin();

    fb.onAuthStateChanged(fb.auth, async user => {
      if (!user || !user.emailVerified) return toLogin();   // signed out, or email not verified yet

      // Must also have picked a username (this is what makes an account complete).
      let profile = null;
      try {
        const snap = await fb.get(fb.ref(fb.db, 'users/' + user.uid));
        profile = snap.exists() ? snap.val() : null;
      } catch (e) { console.error('Bus 16 could not read the profile:', e); return fail(); }
      if (!profile || !profile.username) return toLogin();

      window.BUS16_USER = { uid: user.uid, name: profile.name || user.displayName || '', username: profile.username, email: user.email || '', profile };
      window.bus16SignOut = () => fb.signOut(fb.auth);
      window.dispatchEvent(new CustomEvent('bus16:user', { detail: window.BUS16_USER }));
      root.style.visibility = 'visible';
    }, toLogin);
  } catch (e) {
    console.error('Bus 16 sign-in could not start:', e);
    fail();
  }
})();

// Back button after signing out can show a cached page: reload it so the gate runs again.
addEventListener('pageshow', e => { if (e.persisted) location.reload(); });
