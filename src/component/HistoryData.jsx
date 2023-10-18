import React from "react";
import readCurrent from "../backend/readCurrent";

function HistoryData() {
  readCurrent();
  return <div>HistoryData</div>;
}

export default HistoryData;
