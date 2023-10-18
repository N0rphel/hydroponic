import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCApE31gWNfX2YTYfnmxzcEHlr3GiIfJlI",
  authDomain: "hydroponics-48830.firebaseapp.com",
  projectId: "hydroponics-48830",
  storageBucket: "hydroponics-48830.appspot.com",
  messagingSenderId: "786566876892",
  appId: "1:786566876892:web:28c22bfc9dc56cdf746e19",
  measurementId: "G-EVY0D4WM9Q",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
