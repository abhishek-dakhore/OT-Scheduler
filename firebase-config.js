// firebase-config.js (using Firebase Modular SDK v9+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDE11mULEr_ydsckhQ2qscWvl3qEliEOg",
  authDomain: "ot-shceduler.firebaseapp.com",
  projectId: "ot-shceduler",
  storageBucket: "ot-shceduler.appspot.com",
  messagingSenderId: "932696682650",
  appId: "1:932696682650:web:cb87c412b8533c96682f23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
