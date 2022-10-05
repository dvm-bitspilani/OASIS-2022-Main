import React from 'react'
import { useState, useEffect } from 'react';
import vid from "../Assets/loader.MP4";
import LoaderCSS from '../styles/Loader.module.css'

export default function Loader() {

    // window.addEventListener("load", () => {
    //     const loader = document.querySelector(".loader");
    //     body.style.overflowY = "hidden";
      
    //     loader.addEventListener("click", () => {
    //       document.body.scrollTop = document.documentElement.scrollTop = 0;
    //       loader.style.animation = "fade-out 1s ease-out";
    //       body.style.overflowY = "scroll";      
    //       setTimeout(() => {
    //         loader.style.display = "none";
    //       }, 1000);
    //     });

        // const [isLoaded, setIsLoaded] = useState(false);
        // const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps

        // useEffect(() => {
        //     setIsLoaded(true);
        // }, []);

        // useEffect(() => {
        //     if (isLoaded) {
        //         setIsPageLoaded(true);
        //     }
        // }, [isLoaded]);

  return (
    <div className={LoaderCSS.wrapper}>
        <video loop autoPlay controls={false} muted src={vid}></video>
    </div>
  )
}
