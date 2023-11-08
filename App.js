// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlCv2Oip3K1GnkqDj60E2oiEagZ8wOSho",
  authDomain: "kata-roman-numerals.firebaseapp.com",
  projectId: "kata-roman-numerals",
  storageBucket: "kata-roman-numerals.appspot.com",
  messagingSenderId: "299306021100",
  appId: "1:299306021100:web:3b27ad0f21bdd81ee635c9",
  measurementId: "G-MHZ89KHB1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
