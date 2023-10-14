// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJY2Vb5J8BQuhNTniMvFWBN8OOS39KTvk",
  authDomain: "netflix22-9eace.firebaseapp.com",
  projectId: "netflix22-9eace",
  storageBucket: "netflix22-9eace.appspot.com",
  messagingSenderId: "846454026509",
  appId: "1:846454026509:web:7cc73f96aa7a7f9587c044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)