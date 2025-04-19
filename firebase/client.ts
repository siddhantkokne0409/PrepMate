// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCXkwsH2J_lnXSEFPylr-LnXPgMacE5_So",
  authDomain: "prepmate-39c8f.firebaseapp.com",
  projectId: "prepmate-39c8f",
  storageBucket: "prepmate-39c8f.firebasestorage.app",
  messagingSenderId: "191758185888",
  appId: "1:191758185888:web:c57f0baf0caea8b570e0c5",
  measurementId: "G-16HKCBZT11",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
