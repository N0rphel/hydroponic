import React, { useEffect } from "react";
import "./style.css";
import PlantSVG from "./svg/Plant";
import Thermometer from "./svg/Thermometer";
import fetchSensorData from "../firebase/getService";

function CurrentData() {

  useEffect(() => {
    const handleSensorData = (data) => {
      console.log('Retrieved Data: ', data);
    }

    fetchSensorData('SensorData/1', handleSensorData);
  }, [])

  return (
    <div className="current-container">
      <div className="factor-container">
        <h1>Today's Record</h1>
        <ul className="factor">
          <li>Temperature: 12</li>
          <li>ph: 12</li>
          <li>Humidity: 12</li>
          <li>Mineral: 12</li>
          <li>Fan: on</li>
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
