// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNjjsrPrcxM5lt81fUImy1eorm8QnFsz8",
  authDomain: "netflix-gpt-e50ef.firebaseapp.com",
  projectId: "netflix-gpt-e50ef",
  storageBucket: "netflix-gpt-e50ef.appspot.com",
  messagingSenderId: "711059045462",
  appId: "1:711059045462:web:e1b5a6aa8d57f2e98b0ff7",
  measurementId: "G-FR61L0Z658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();