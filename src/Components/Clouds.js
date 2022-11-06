import React from "react";
import CloudsCSS from "../styles/Clouds.module.css";
import cloudR from "../Assets/cloud-right.png";
import cloudL from "../Assets/cloud-left.png";

export default function Clouds() {
  return (
    <div className={CloudsCSS.cloudsWrapper}>
      <img className={`${CloudsCSS.cloudR1} ${CloudsCSS.cloud}`} src={cloudR} />
      <img className={`${CloudsCSS.cloudR2} ${CloudsCSS.cloud}`} src={cloudR} />
      <img className={`${CloudsCSS.cloudR3} ${CloudsCSS.cloud}`} src={cloudR} />

      <img className={`${CloudsCSS.cloudL1} ${CloudsCSS.cloud}`} src={cloudL} />
      <img className={`${CloudsCSS.cloudL2} ${CloudsCSS.cloud}`} src={cloudL} />
      <img className={`${CloudsCSS.cloudL3} ${CloudsCSS.cloud}`} src={cloudL} />
    </div>
  );
}
