import React from "react";
import vid from "../Assets/loader.mp4";
import LoaderCSS from "../styles/Loader.module.css";

export default function Loader(props) {
  return (
    <div className={LoaderCSS.wrapper} style={props.style}>
      <video muted playsinline loop autoPlay controls={false} src={vid}></video>
    </div>
  );
}
