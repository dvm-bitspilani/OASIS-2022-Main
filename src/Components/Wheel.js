import React from 'react'
import WheelCSS from "../styles/Wheel.module.css";

function Wheel() {
  return (
    <div className={WheelCSS.wheelContainer}>
        <div className={WheelCSS.scrollIcon}>
            <span className={WheelCSS.wheel}></span>
        </div>
    </div>
  )
}

export default Wheel