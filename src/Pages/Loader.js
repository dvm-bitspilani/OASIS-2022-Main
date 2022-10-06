import React from 'react'
import { useState, useEffect } from 'react';
import vid from "../Assets/loader.MP4";
import LoaderCSS from '../styles/Loader.module.css'

export default function Loader(props) {

  return (
    <div className={LoaderCSS.wrapper} style={props.style}>
        <video loop autoPlay controls={false} muted src={vid}></video>
    </div>
  )
}
