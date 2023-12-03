import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAKJA-IAnJHa671uBpZpyvSjr8gzjF2f2E",
  authDomain: "hydroponicsystem-898d5.firebaseapp.com",
  databaseURL: "https://hydroponicsystem-898d5-default-rtdb.firebaseio.com",
  projectId: "hydroponicsystem-898d5",
  storageBucket: "hydroponicsystem-898d5.appspot.com",
  messagingSenderId: "930193498084",
  appId: "1:930193498084:web:792ddf96332fb050a931f1",
  measurementId: "G-DHZF7YEKXV"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database};
