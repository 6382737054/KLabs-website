// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjLKb-HgOo6Q8hkArdj1SXWIY7RyDGRUc',
  authDomain: 'k-labs-website.firebaseapp.com',
  projectId: 'k-labs-website',
  storageBucket: 'k-labs-website.appspot.com',
  messagingSenderId: '27310323602',
  appId: '1:27310323602:web:cee7b5b83b9b9fbbce334b',
  measurementId: 'G-F47XC536LS'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const storage = getStorage(app);
const functions = getFunctions(app);

export { storage, functions };
