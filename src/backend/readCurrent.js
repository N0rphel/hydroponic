import React from "react";
import { db } from "./firebase";
import { collection, onSnapshot, query } from "@firebase/firestore";

async function readCurrent() {
  const q = query(collection(db, "currentData"));
  const unsub = onSnapshot(q, (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    console.log(data);
  });
}

export default readCurrent;
