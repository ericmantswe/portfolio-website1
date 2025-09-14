// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3CuYrCIOfokbS5jt2v-Up9qxRxZvwQ1U",
  authDomain: "flash-clover-470919-u6.firebaseapp.com",
  projectId: "flash-clover-470919-u6",
  storageBucket: "flash-clover-470919-u6.appspot.com",
  messagingSenderId: "109543605403",
  appId: "1:109543605403:web:4beffae452b5b801e7323e",
  measurementId: "G-56M4Q0CVKY"
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
let analytics;

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
