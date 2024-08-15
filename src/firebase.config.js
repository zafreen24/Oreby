// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz5P93hAQU4EPToLW-rx59Wzhz9KuOpdc",
  authDomain: "e-commerce-orebi.firebaseapp.com",
  projectId: "e-commerce-orebi",
  storageBucket: "e-commerce-orebi.appspot.com",
  messagingSenderId: "231327694352",
  appId: "1:231327694352:web:b690120c3ba57bb1291495",
  measurementId: "G-318WQF20WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig