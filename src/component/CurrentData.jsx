import React, { useEffect, useState } from "react";
import "./style.css";
import PlantSVG from "./svg/Plant";
import Thermometer from "./svg/Thermometer";
import fetchSensorData from "../firebase/getService";

function CurrentData() {

  const [sensorData, setSensorData] =  useState({
    Fan: "",
    temperature: "",
    pH: ""
  });

  useEffect(() => {
    const handleSensorData = (data) => {
      setSensorData(data);
      console.log('Retrieved Data: ', sensorData);
    }

    fetchSensorData('Sensor', handleSensorData);
  }, []);

  return (
    <div className="current-container">
      <div className="factor-container">
        <h1>Today's Record</h1>
        <ul className="factor">
          <li>Temperature: {sensorData.temperature} °C</li>
          <li>pH: {sensorData.pH}</li>
          <li>Fan: {sensorData.Fan == 'YES' ? 'On' : 'Off'}</li>
        </ul>
      </div>
      <div className="image-container">
        <div className="thermometer">
          <Thermometer temperature={sensorData.temperature}/>
        </div>
        <div className="plant">
          <PlantSVG phLevel = {sensorData.pH}/>
        </div>
      </div>
    </div>
  );
}

export default CurrentData;
