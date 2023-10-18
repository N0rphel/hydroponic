import React from "react";
import { db } from "./firebase";
import { Timestamp, doc, setDoc } from "@firebase/firestore";

async function write() {
  await setDoc(doc(db, "currentData", "17"), {
    temperature: 24,
    pH: 7,
    humidity: 67,
    fan: "Off",
    mineral: 0.5,
  });
  await setDoc(doc(db, "currentData", "18"), {
    temperature: 24,
    pH: 7,
    humidity: 67,
    fan: "On",
    mineral: 0.5,
  });
}

export default write;
