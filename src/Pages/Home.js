import React, { useEffect } from "react";
import Lander from "../Components/Lander";
import Registration from "./Registration";
import { useState } from "react";
import Contact from "../Components/Contact";
import Events from "../Components/Events";
import HomeCSS from "../styles/Home.module.css";
import Loader from "./Loader";
import ReactGA from "react-ga";



export default function Home() {
  window.scrollTo(0, 0);
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname)
  }, []);
  const [regState, setRegState] = useState({ open: false });

  useEffect(() => {
    if (isLoaded) {
      if (regState.open) {
        document.querySelector("main").style.height = "100vh";
        document.querySelector("main").style.overflow = "hidden";
      } else {
        document.querySelector("main").style.height = "auto";
        document.querySelector("main").style.overflow = "none";
      }
    }
  }, [regState]);

  const changeRegState = () => {
    setRegState((prevState) => ({ open: !prevState.open }));
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.addEventListener("readystatechange", () => {
      console.log("loaded");
      if (document.readyState === "complete") {
        setTimeout(() => setIsLoaded(true), 2000);
      }
    });
  }, []);

  return (
    <main
      className={HomeCSS.homePage}
      style={
        isLoaded === false
          ? { maxHeight: "100vh", overflowY: "hidden" }
          : { height: "auto", overflowY: "auto" }
      }
    >
      <Loader
        style={
          isLoaded === false
            ? { opacity: "1", zIndex: 1000 }
            : { opacity: "0", zIndex: -1000 }
        }
      />
      <Registration
        className={"RegistrationCSS.regPage"}
        id="reg"
        regState={regState.open}
        changeRegState={changeRegState}
      />
      <Lander changeRegState={changeRegState} id="lander" />
      <Events id="evt" />
      <Contact id="contact" />
      <div className={HomeCSS.love}>
        <div className={HomeCSS.foot}>
          Made with <a href="https://bits-dvm.org/" target="_blank"><i aria-hidden="true" style={{margin: '0', cursor: 'pointer'}} className="fa fa-heart"></i></a> by DVM
        </div>
      </div>
    </main>
  );
}
