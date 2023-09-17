// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'
import { getAnalytics } from 'firebase/analytics';

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7UomQVaZnYUAYMekpqudDL46Bkyls2XA",
  authDomain: "carefinder-65852.firebaseapp.com",
  projectId: "carefinder-65852",
  storageBucket: "carefinder-65852.appspot.com",
  messagingSenderId: "553486391919",
  appId: "1:553486391919:web:45683b1b0bcb8cce7c8b9a",
  measurementId: "G-ZJ1PK0VE1H"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);


export { app, auth, analytics };