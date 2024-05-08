// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFQxFL4hhEsiBjhnuvUKhw2LjD26_C0jY",
  authDomain: "jasil-ba4fa.firebaseapp.com",
  projectId: "jasil-ba4fa",
  storageBucket: "jasil-ba4fa.appspot.com",
  messagingSenderId: "193413057909",
  appId: "1:193413057909:web:ef4e9ddcaa05eeab03173c",
  measurementId: "G-ES0GFBPZNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
