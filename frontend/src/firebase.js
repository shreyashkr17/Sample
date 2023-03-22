import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5M9kSsHLsGkIelaPSZq2XGYjnDvWjUPM",
  authDomain: "vedicheals.firebaseapp.com",
  projectId: "vedicheals",
  storageBucket: "vedicheals.appspot.com",
  messagingSenderId: "413155598100",
  appId: "1:413155598100:web:d015faebada266ec66ac01",
  measurementId: "G-W0LY3N439B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
// const analytics = getAnalytics(app);