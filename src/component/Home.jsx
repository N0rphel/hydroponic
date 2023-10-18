import React from "react";
import CurrentData from "./CurrentData";
import HistoryData from "./HistoryData";

function Home() {
  return (
    <div>
      <CurrentData />
      <HistoryData />
    </div>
  );
}

export default Home;
