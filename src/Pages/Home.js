import React, { useEffect } from "react";
import Lander from "../Components/Lander";
import Registration from "./Registration";
import { useState } from "react";
import Contact from "../Components/Contact";
import Events from "../Components/Events";
import HomeCSS from "../styles/Home.module.css";
import Loader from "./Loader";


export default function Home() {
  window.scrollTo(0, 0);
  const [regState, setRegState] = useState({ open: false });

  // useEffect(() => {
  //   if (regState.open) {
  //     document.querySelector("main").style.height = "100vh";
  //     document.querySelector("main").style.overflow = "hidden";
  //   } else {
  //     document.querySelector("main").style.height = "auto";
  //     document.querySelector("main").style.overflow = "none";
  //   }
  // }, [regState]);

  const changeRegState = () => {
    setRegState((prevState) => ({ open: !prevState.open }));
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
     window.addEventListener('load', () => {
      setIsLoaded(true);
      // document.querySelector('body').style.background = 'black url(Assets/wallsbg.png) repeat center center'
      console.log('loaded')
     })
  }, []);

  if(isLoaded){
  return (
    <main className={HomeCSS.homePage}>
      <Registration
        class={"RegistrationCSS.regPage"}
        regState={regState.open}
        changeRegState={changeRegState}
      />
      <Lander changeRegState={changeRegState} />
      <Events />
      <Contact />
    </main>
  );
  }
  else {
    return <Loader />
  }
}