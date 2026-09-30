import React, { useState, createRef, useEffect } from "react";
import LanderCSS from "../styles/Lander.module.css";
import LanderRing from "./LanderRing";
import StrangeShard from "./StrangeShard";
import Button from "./Button";

import king from "../Assets/Lander/king.webp";
import logo from "../Assets/logo.png";
import title from "../Assets/Lander/title.webp";
import windowImg from "../Assets/Lander/window.webp";
import leftEye from "../Assets/Lander/Eyes/lefteye.png";
import rightEye from "../Assets/Lander/Eyes/righteye.png";

import cloud1 from "../Assets/Lander/PortalClouds/window-clouds-1.webp";
import cloud2 from "../Assets/Lander/PortalClouds/window-clouds-2.webp";
import cloud3 from "../Assets/Lander/PortalClouds/window-clouds-3.webp";

import FaceBookIcon from "../Assets/Lander/FaceBookIcon";
import YouTubeIcon from "../Assets/Lander/YouTubeIcon";
import InstaGramIcon from "../Assets/Lander/InstaGramIcon";
import Hamburger from "./Hamburger";

const Lander = (props) => {
  const kingEl = createRef();
  const [ringCount, setRingCount] = useState(Math.floor(2 + Math.random() * 3));
  const [sizeClass, setSizeClass] = useState(2);
  const [shardCount, setShardCount] = useState(
    Math.floor(100 + Math.random() * 20)
  );
  const [width, setWidth] = useState(0);
  const [portalWidth, setPortalWidth] = useState(0);

  useEffect(() => {
    const resize = () => {
      const size = innerWidth > 800 ? 2 : innerWidth > 400 ? 1 : 0;
      setSizeClass(size);
      setShardCount(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : size === 2 ? 65 : size === 1 ? 35 : 20);
      setWidth(size === 2 ? 195 : 240);
      setPortalWidth(size === 2 ? 37 : 50);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className={LanderCSS.landerWrapper} id="landerWrapper">
      <Hamburger />
      <img src={logo} alt="OASIS" className={LanderCSS.oasisLogo} />
      <div className={LanderCSS.portalWindow}>
        <img src={windowImg} alt="" className={LanderCSS.portalWindowImg1} />
        <img
          src={cloud1}
          alt=""
          className={`${LanderCSS.portalWindowClouds} ${LanderCSS.windowCloud1}`}
        />
        <img
          src={cloud2}
          alt=""
          className={`${LanderCSS.portalWindowClouds} ${LanderCSS.windowCloud2}`}
        />
        <img
          src={cloud3}
          alt=""
          className={`${LanderCSS.portalWindowClouds} ${LanderCSS.windowCloud3}`}
        />
      </div>
      <img src={windowImg} alt="" className={LanderCSS.portalWindowImg} />

      <div className={LanderCSS.goldrings}>
        {[...Array(ringCount)].map((count, idx) => (
          <LanderRing
            key={idx}
            offX={`${idx * (-0.8 + Math.random() + 0.8)}px`}
            offY={`${idx * (-0.8 + Math.random() * 0.8)}px`}
            stretch={idx % 4}
            initAngle={idx * 10}
            idx={idx}
          />
        ))}
      </div>

      <div>
        {shardCount > 0 ? (
          [...Array(shardCount)].map((count, idx) => (
            <StrangeShard key={idx} width={width} portalWidth={portalWidth} />
          ))
        ) : (
          <></>
        )}
      </div>

      <div className={LanderCSS.kingBodyWrapper}>
        <img src={king} alt="" className={LanderCSS.kingBody} ref={kingEl} />

        <div className={LanderCSS.kingEyesWrapper}>
          <img src={leftEye} alt="o" className={LanderCSS.leftEye} />
          <img src={rightEye} alt="o" className={LanderCSS.rightEye} />
        </div>
      </div>

      <img src={title} alt="OASIS '22" className={LanderCSS.oasisTitle} />
      <div className={LanderCSS.titleBgGrad}></div>

      {/* register */}
      <div className={LanderCSS.registerWrapper}>
        {/* <div onClick={props.changeRegState}>Register Now</div> */}
        <Button btn_title="Register Now" onClick_fun={props.changeRegState} />
      </div>

      {/* icons */}
      <div className={LanderCSS.bottomWrapper}>
        {<img src={logo} alt="OASIS" className={LanderCSS.oasisLogoBottom} />}

        <div className={LanderCSS.iconWrapper}>
          <a
            href="https://www.facebook.com/oasis.bitspilani"
            rel="noreferrer"
            target="_blank"
          >
            <FaceBookIcon />
          </a>

          <a
            href="https://instagram.com/bitsoasis"
            rel="noreferrer"
            target="_blank"
          >
            <InstaGramIcon />
          </a>

          <a
            href="https://m.youtube.com/channel/UCf40GISJivaYZK2pPOyt1kw"
            rel="noreferrer"
            target="_blank"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
      <div className={LanderCSS.landerTransition}></div>
    </div>
  );
};

export default Lander;
