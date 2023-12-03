import React, { useEffect } from "react";
import CurrentData from "./CurrentData";
import HistoryData from "./HistoryData";
import NavigationBar from "./Navigation";
import "./style.css";

function Home() {

  

  return (
    <div className="container">
      <NavigationBar />
      <CurrentData />
      <HistoryData />
    </div>
  );
}

export default Home;
