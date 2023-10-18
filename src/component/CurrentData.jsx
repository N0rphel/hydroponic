import React from "react";
import { db } from "../backend/firebase";
import { onSnapshot, doc } from "@firebase/firestore";

function CurrentData() {
  const unsub = onSnapshot(doc(db, "currentData", "details"), (doc) => {
    console.log("Current Data: ", doc.data());
  });

  return (
    <div>
      <ul>
        <li>Temperature</li>
        <li>ph:</li>
        <li>Humidity</li>
        <li>Mineral</li>
        <li>Fan</li>
      </ul>
    </div>
  );
}

export default CurrentData;
