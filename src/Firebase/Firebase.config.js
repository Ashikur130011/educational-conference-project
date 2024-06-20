import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDt5nWTh3ye_D1V_1-DmJXJy-_FpZFO1Po",
  authDomain: "educational-conference-364bc.firebaseapp.com",
  projectId: "educational-conference-364bc",
  storageBucket: "educational-conference-364bc.appspot.com",
  messagingSenderId: "388338943817",
  appId: "1:388338943817:web:0592da5509ed21efdabc98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app