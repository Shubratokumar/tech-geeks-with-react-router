// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh3x61NMlceCzG0bjgGuyVISDqj_LZC4A",
  authDomain: "tech-geeks-firebase-prac-18db9.firebaseapp.com",
  projectId: "tech-geeks-firebase-prac-18db9",
  storageBucket: "tech-geeks-firebase-prac-18db9.appspot.com",
  messagingSenderId: "223922742906",
  appId: "1:223922742906:web:268db7405464f9b9e43dc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;