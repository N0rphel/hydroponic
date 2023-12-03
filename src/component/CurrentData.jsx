import React, { useEffect, useState } from "react";
import "./style.css";
import PlantSVG from "./svg/Plant";
import Thermometer from "./svg/Thermometer";
import fetchSensorData from "../firebase/getService";

function CurrentData() {

  const [sensorData, setSensorData] =  useState({
    Fan: "",
    Temp: "",
    pH: ""
  });

  useEffect(() => {
    const handleSensorData = (data) => {
      setSensorData(data);
      console.log('Retrieved Data: ', sensorData);
    }

    fetchSensorData('SensorData/1', handleSensorData);
  }, []);

  return (
    <div className="current-container">
      <div className="factor-container">
        <h1>Today's Record</h1>
        <ul className="factor">
          <li>Temperature: {sensorData.Temp}</li>
          <li>pH: {sensorData.pH}</li>
          <li>Fan: {sensorData.Fan}</li>
        </ul>
      </div>
      <div className="image-container">
        <div className="thermometer">
          <Thermometer />
        </div>
        <div className="plant">
          <PlantSVG />
        </div>
      </div>
    </div>
  );
}

export default CurrentData;
