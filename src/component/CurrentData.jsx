import React, { useEffect, useState } from "react";
import "./style.css";
import PlantSVG from "./svg/Plant";
import Thermometer from "./svg/Thermometer";
import fetchSensorData from "../firebase/getService";
import toggleButton from "../firebase/toggleButton";

function CurrentData() {

  const [sensorData, setSensorData] =  useState({
    Fan: "",
    temperature: "",
    pH: ""
  });

  const [fanData, setFanData] = useState({
    digital : false,
  });

  useEffect(() => {

    const handleFanData = (data) => {
      
      setFanData(data);
      //console.log(fanData);
    }

    const handleSensorData = (data) => {
      setSensorData(data);
      console.log('Retrieved Data: ', sensorData);
    }

    fetchSensorData('Sensor', handleSensorData);
    fetchSensorData('FAN', handleFanData);
  }, []);

  const handleButtonClick = async () => {
    const newFanState = await toggleButton();
    setFanData({Fan : newFanState});
  }

  useEffect(() => {
    
  })

  return (
    <div className="current-container">
      <div className="factor-container">
        <h1>Today's Record</h1>
        <ul className="factor">
          <li>Temperature: {sensorData.temperature} °C</li>
          <li>pH: {sensorData.pH}</li>
          <li>Fan: {fanData.Fan ? 'On' : 'Off'}</li>
          <li><button className="fan-button" onClick={handleButtonClick}>{fanData.Fan ? 'Off' : 'On'}</button></li>
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
