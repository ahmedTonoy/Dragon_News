// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjHDmLMyis9yndOxqzUOsVFQ74W_n7U28",
  authDomain: "dragon-news-31d86.firebaseapp.com",
  projectId: "dragon-news-31d86",
  storageBucket: "dragon-news-31d86.firebasestorage.app",
  messagingSenderId: "238659883265",
  appId: "1:238659883265:web:b3ad4a6718f54da9c10b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)