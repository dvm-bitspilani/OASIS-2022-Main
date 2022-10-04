import React from "react";
import { useRef, useState } from "react";
import LanderCSS from "../styles/Lander.module.css";
import LanderRing from "./LanderRing";
import StrangeShard from "./StrangeShard";
import Button from "./Button"

import king from "../Assets/king.png";
import logo from "../Assets/logo.png";
import title from "../Assets/title.png";
import leftEye from "../Assets/lefteye.png";
import windowImg from "../Assets/window.png";
import rightEye from "../Assets/righteye.png";

import FaceBookIcon from "../Assets/Lander/FaceBookIcon";
import YouTubeIcon from "../Assets/Lander/YouTubeIcon";
import InstaGramIcon from "../Assets/Lander/InstaGramIcon";

const Lander = React.forwardRef((props, ref) => {
  const kingEl = useRef(null);
  const ringCount = Math.floor(7 + Math.random() * 2);
  // let [shardCount, setShardCount] = useState(
  //   window.innerWidth > 800
  //     ? Math.floor(100 + Math.random() * 50)
  //     : window.innerWidth > 600
  //     ? Math.floor(80 + Math.random() * 50)
  //     : 0
  // );
  // let [prevWidth, setPrevWidth] = useState(window.innerWidth);
  // window.addEventListener("resize", () => {
  //   if (window.innerWidth <= 600 && prevWidth > 600) {
  //     setShardCount(0);
  //   } else if (
  //     window.innerWidth <= 800 &&
  //     (prevWidth > 800 || prevWidth < 600)
  //   ) {
  //     setShardCount(Math.floor(80 + Math.random() * 50));
  //   } else if (window.innerWidth > 800 && prevWidth <= 800) {
  //     setShardCount(Math.floor(100 + Math.random() * 50));
  //   }
  //   setPrevWidth(window.innerWidth);
  // });

  return (
    <div className={LanderCSS.landerWrapper} ref={ref}>
      <img src={logo} alt="OASIS" className={LanderCSS.oasisLogo} />
      <img src={windowImg} alt="" className={LanderCSS.portalWindow} />

      <div className={LanderCSS.goldrings}>
        {[...Array(ringCount)].map((count, idx) => (
          <LanderRing
            key={idx}
            offX={`${idx * (-1.25 + Math.random() + 1.5)}px`}
            offY={`${idx * (-1.25 + Math.random() * 1.25)}px`}
            filter={idx < 2 ? 2 : idx < 4 ? 1 : 0}
          />
        ))}
        {/* {[...Array(shardCount)].map((count, idx) => (
          <StrangeShard key={idx} />
        ))} */}
      </div>

      <div className={LanderCSS.kingBodyWrapper}>
        <img src={king} alt="" className={LanderCSS.kingBody} ref={kingEl} />

        <div className={LanderCSS.kingEyesWrapper}>
          <img src={leftEye} alt="o" className={LanderCSS.leftEye} />
          <img src={rightEye} alt="o" className={LanderCSS.rightEye} />
        </div>
      </div>

      <img src={title} alt="OASIS '22" className={LanderCSS.oasisTitle} />

      {/* register */}
      <div className={LanderCSS.registerWrapper}>
        {/* <div onClick={props.changeRegState}>Register Now</div> */}
        <Button btn_title='Register Now' onClick_fun={props.changeRegState} />
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
});

export default Lander;
