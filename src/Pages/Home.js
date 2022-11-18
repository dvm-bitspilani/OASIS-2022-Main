import React, { useEffect } from "react";
import { useLocation } from 'react-router';
import Lander from "../Components/Lander";
import Registration from "./Registration";
import { useState } from "react";
import Contact from "../Components/Contact";
import Events from "../Components/Events";
import HomeCSS from "../styles/Home.module.css";
import Loader from "./Loader";
import ReactGA from "react-ga";
import Carousel from "../Components/Carousel";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";


export default function Home() {
  window.scrollTo(0, 0);
  const [regState, setRegState] = useState({ open: false });

  const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#EBB935",
    lag: 0,
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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
      if (document.readyState === "complete") {
        setTimeout(() => setIsLoaded(true), 2000);
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      // document.querySelector("body").style.display = "none";
    });
  }, []);

  const location = useLocation();

  useEffect(() => {
        if (document.readyState === "complete") {
          setTimeout(() => setIsLoaded(true), 2000);
        }
  }, [location.pathname])

  return (
    <main
      className={HomeCSS.homePage}
      style={
        isLoaded === false
          ? { maxHeight: "100vh", overflowY: "hidden" }
          : { height: "100vh", overflowY: "auto" }
      }
    >
      <div style={{ zIndex: 1000 }}>
        <MouseTrail {...trailProps} />
      </div>
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

      <Lander changeRegState={changeRegState} />
      <Events />
      <Carousel/>
      <Contact />
      <div className={HomeCSS.love}>
        <div className={HomeCSS.foot}>
          Made with{" "}
          <a href="https://bits-dvm.org/" rel="noreferrer" target="_blank">
            <i
              aria-hidden="true"
              style={{ margin: "0", cursor: "pointer" }}
              className="fa fa-heart"
            ></i>
          </a>{" "}
          by DVM
        </div>
      </div>
    </main>
  );
}
