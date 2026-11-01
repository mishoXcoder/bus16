// ============================================================
//  BUS 16 - Firebase setup.  This is the ONLY file you edit.
//
//  1. In the Firebase console: Project settings > Your apps > Web app.
//  2. Copy the values from the "firebaseConfig" box.
//  3. Paste them below, replacing every PASTE_... text. Keep the quotes.
//
//  These values are NOT secrets. They only say which Firebase project to
//  talk to. What protects your data is the Firebase rules (see
//  database.rules.json), not hiding this file.
// ============================================================
export const firebaseConfig = {
  apiKey: "AIzaSyBBH-WXfnKYQctyOOErjuLM1hj9nKMKs5I",
  authDomain: "bus16-user-credentials.firebaseapp.com",
  projectId: "bus16-user-credentials",
  storageBucket: "bus16-user-credentials.firebasestorage.app",
  messagingSenderId: "261304117779",
  appId: "1:261304117779:web:a92c51bb9592ccc684ede6",
  databaseURL:
    "https://bus16-user-credentials-default-rtdb.europe-west1.firebasedatabase.app",
};

// ---------------- nothing to edit below this line ----------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Re-export the sign-in functions so the other files import from one place.
export {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
export {
  ref,
  get,
  set,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

export const isConfigured =
  !/PASTE/.test(firebaseConfig.apiKey) &&
  !/PASTE/.test(firebaseConfig.projectId) &&
  !/PASTE/.test(firebaseConfig.databaseURL);
export const app = isConfigured ? initializeApp(firebaseConfig) : null;
export const auth = isConfigured ? getAuth(app) : null;
export const db = isConfigured ? getDatabase(app) : null;
