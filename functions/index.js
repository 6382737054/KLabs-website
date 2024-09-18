// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCVWiTN_sdJrJdqi18YhiBkbPa92ROqc4",
  authDomain: "k-labs-website-c2e16.firebaseapp.com",
  projectId: "k-labs-website-c2e16",
  storageBucket: "k-labs-website-c2e16.appspot.com",
  messagingSenderId: "271744348407",
  appId: "1:271744348407:web:c2fd0ba680b6fbdbee23f2",
  measurementId: "G-NBSSF7Q2RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);