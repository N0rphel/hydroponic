import React, { useEffect, useState } from "react";
import "./svgStyle.css";

function PlantSVG({ phLevel}) {

  const [newColor, setNewColor] = useState('')
  const [leaveColor, setNewLeaveColor] =  useState('');

  useEffect(() => {

    const determineColor = () => {
      if (phLevel < 9 && phLevel > 5) {
        setNewColor('#506098');
        setNewLeaveColor('#25C722')
      } else if (phLevel < 5) {
        setNewColor('#FE0002');
        setNewLeaveColor('#305c43')
      } else if (phLevel > 9) {
        setNewColor('#44008B');
        setNewLeaveColor('#305c43');
      }
    };

    determineColor();
  }, [phLevel]);
  
  return (
    <svg
      width="420"
      height="420"
      viewBox="0 0 425 432"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="plant-svg"
    >
      <rect width="420" height="420" fill="#2c3333" />
      <path
        d="M202.149 194C202.149 194 95.4253 172.15 120.941 52C120.941 52 224.703 71.6625 225.022 139.381C225.022 139.381 248.998 86.9563 284.741 89.1376C284.741 89.1376 318.159 135.013 241.592 194"
        fill={leaveColor}
      />
      <path
        d="M202.149 194C202.149 194 95.4253 172.15 120.941 52C120.941 52 224.703 71.6625 225.022 139.381C225.022 139.381 248.998 86.9563 284.741 89.1376C284.741 89.1376 318.159 135.013 241.592 194"
        stroke="#231F20"
        stroke-width="17"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path className="plant-water" d="M288.429 364H131.575L112 233H308L288.429 364Z" fill={newColor} />
      <rect x="109" y="201" width="204" height="32" fill="#DDA9A9" />
      <path
        d="M295.632 372H124.373L103 194H317L295.632 372Z"
        stroke="#231F20"
        stroke-width="17"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default PlantSVG;
