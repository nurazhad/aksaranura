// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCO5OjR9WLaCOTOAAqa6DWR_K_g1TnX0No",

  authDomain: "aksaranura-9a0f5.firebaseapp.com",

  projectId: "aksaranura-9a0f5",

  storageBucket: "aksaranura-9a0f5.appspot.com",

  messagingSenderId: "12805847740",

  appId: "1:12805847740:web:2c76925bdfb725b2caaeb9",

  measurementId: "G-0XLR7229X2"

};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
