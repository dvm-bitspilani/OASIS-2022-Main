import React from "react";
import CloudsCSS from "../styles/Clouds.module.css";
import cloudR from "../Assets/TransitionClouds/cloud-right.png";
import cloudL from "../Assets/TransitionClouds/cloud-left.png";

export default function Clouds() {
  return (
    <div className={CloudsCSS.cloudsWrapper}>
      <img
        className={`${CloudsCSS.cloudR1} ${CloudsCSS.cloud}`}
        alt=""
        src={cloudR}
      />
      <img
        className={`${CloudsCSS.cloudR2} ${CloudsCSS.cloud}`}
        alt=""
        src={cloudR}
      />
      <img
        className={`${CloudsCSS.cloudR3} ${CloudsCSS.cloud}`}
        alt=""
        src={cloudR}
      />

      <img
        className={`${CloudsCSS.cloudL1} ${CloudsCSS.cloud}`}
        alt=""
        src={cloudL}
      />
      <img
        className={`${CloudsCSS.cloudL2} ${CloudsCSS.cloud}`}
        alt=""
        src={cloudL}
      />
      <img
        className={`${CloudsCSS.cloudL3} ${CloudsCSS.cloud}`}
        alt=""
        src={cloudL}
      />
    </div>
  );
}
