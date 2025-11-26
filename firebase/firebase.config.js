// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBL-9Qz1dGeUEHn6oX31BocO76DY64aHE",
  authDomain: "simple-firebase-auth-4fec0.firebaseapp.com",
  projectId: "simple-firebase-auth-4fec0",
  storageBucket: "simple-firebase-auth-4fec0.firebasestorage.app",
  messagingSenderId: "718152394555",
  appId: "1:718152394555:web:f19c10bead43f13194391e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
