import React from "react";
import Carousel from "./Carousel";
import VideoCSS from "../styles/Video.module.css";

function Videos() {
  return (
    <div>
      <div className={VideoCSS.title}>
        <h2 className = {VideoCSS.heading}>VIDEOS</h2>
      </div>
      <Carousel/>
    </div>
  );
}

export default Videos;
