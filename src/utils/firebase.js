// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYSbk0h-kyGycngfdw4F5iqd_in3whd8I",
  authDomain: "moviemingle-e4e25.firebaseapp.com",
  projectId: "moviemingle-e4e25",
  storageBucket: "moviemingle-e4e25.appspot.com",
  messagingSenderId: "627814239190",
  appId: "1:627814239190:web:b10b7823b3852e992c3277",
  measurementId: "G-1Q2Z8P1LB2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
