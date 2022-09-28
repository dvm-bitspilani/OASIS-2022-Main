import LanderCSS from "../styles/Lander.module.css";
import LanderRing from "./LanderRing";
import StrangeShard from "./StrangeShard";
import window from "../Assets/window.png";
import king from "../Assets/king.png";
import logo from "../Assets/logo.png";
import title from "../Assets/title.png";

import leftLava4 from "../Assets/left-lava-4.png";
import leftLava3 from "../Assets/left-lava-3.png";
import leftLava2 from "../Assets/left-lava-2.png";
import leftLava1 from "../Assets/left-lava-1.png";

import leftEye from "../Assets/lefteye.png";
import rightEye from "../Assets/righteye.png";

import { ReactComponent as EyeSvg } from "../Assets/eyes.svg";
import { useEffect, useRef, useState } from "react";

const Lander = () => {
  const [eyePosition, setEyePosition] = useState({ top: null });

  const kingEl = useRef(null);
  const ringCount = Math.floor(7 + Math.random() * 2);
  const shardCount = Math.floor(150 + Math.random() * 50);
  console.log(ringCount);

  return (
    <div className={LanderCSS.lander}>
      <img src={logo} alt="" className={LanderCSS.logo} />
      <img src={window} alt="" className={LanderCSS.window} />

      <div className={LanderCSS.goldrings}>
        <LanderRing offX={`10px`} offY={`10px`} />
        {[...Array(ringCount)].map((count, idx) => (
          <LanderRing
            key={idx}
            offX={`${idx * (-1.25 + Math.random() + 2.5)}px`}
            offY={`${idx * (-1.25 + Math.random() * 1.25)}px`}
            filter={idx < 2 ? 2 : idx < 4 ? 1 : 0}
          />
        ))}
        {[...Array(shardCount)].map((count, idx) => (
          <StrangeShard />
        ))}
      </div>

      <div className={LanderCSS.kingContainer}>
        <img src={king} alt="" className={LanderCSS.king} ref={kingEl} />

        <div className={LanderCSS.eyeSvgContainer}>
          <img src={leftEye} alt="" className={LanderCSS.leftEye} />
          <img src={rightEye} alt="" className={LanderCSS.rightEye} />
        </div>
      </div>

      <img src={title} alt="" className={LanderCSS.title} />

      {/* register */}
      <div className={LanderCSS.register}>
        <div>Register Now</div>
      </div>

      {/* icons */}
      <div className={LanderCSS.icons}>
        <svg
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_737_545)">
            <path
              d="M35.8978 18.4958C35.8978 8.58287 27.8618 0.546875 17.9489 0.546875C8.036 0.546875 0 8.58287 0 18.4958C0 27.4545 6.56362 34.8801 15.1444 36.2267V23.6842H10.5871V18.4958H15.1444V14.5414C15.1444 10.043 17.8241 7.55817 21.924 7.55817C23.8871 7.55817 25.9418 7.90874 25.9418 7.90874V12.3259H23.6786C21.449 12.3259 20.7534 13.7095 20.7534 15.1304V18.4958H25.7315L24.9357 23.6842H20.7534V36.2267C29.3342 34.8801 35.8978 27.4545 35.8978 18.4958Z"
              fill="url(#paint0_linear_737_545)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_737_545"
              x1="0"
              y1="0.546875"
              x2="38.6093"
              y2="3.77266"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D19A08" />
              <stop offset="0.276042" stopColor="#FEDB7E" />
              <stop offset="0.5" stopColor="#EAC460" />
              <stop offset="0.661458" stopColor="#D19A08" />
              <stop offset="1" stopColor="#D19A08" />
            </linearGradient>
            <clipPath id="clip0_737_545">
              <rect
                width="35.8978"
                height="35.8978"
                fill="white"
                transform="translate(0 0.546875)"
              />
            </clipPath>
          </defs>
        </svg>

        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_737_546)">
            <path
              d="M18.9343 3.77908C23.73 3.77908 24.2979 3.80012 26.184 3.88425C27.9368 3.96138 28.8833 4.25585 29.5143 4.50125C30.3487 4.82377 30.9516 5.2164 31.5756 5.8404C32.2067 6.47142 32.5923 7.06738 32.9148 7.90172C33.1602 8.53274 33.4547 9.48628 33.5318 11.2321C33.6159 13.1251 33.637 13.6931 33.637 18.4818C33.637 23.2775 33.6159 23.8454 33.5318 25.7315C33.4547 27.4843 33.1602 28.4308 32.9148 29.0618C32.5923 29.8962 32.1996 30.4991 31.5756 31.1231C30.9446 31.7542 30.3487 32.1398 29.5143 32.4623C28.8833 32.7077 27.9298 33.0022 26.184 33.0793C24.2909 33.1634 23.723 33.1845 18.9343 33.1845C14.1385 33.1845 13.5706 33.1634 11.6846 33.0793C9.93177 33.0022 8.98524 32.7077 8.35422 32.4623C7.51988 32.1398 6.91691 31.7471 6.2929 31.1231C5.66189 30.4921 5.27626 29.8962 4.95375 29.0618C4.70835 28.4308 4.41388 27.4773 4.33675 25.7315C4.25262 23.8384 4.23158 23.2705 4.23158 18.4818C4.23158 13.686 4.25262 13.1181 4.33675 11.2321C4.41388 9.47927 4.70835 8.53274 4.95375 7.90172C5.27626 7.06738 5.6689 6.46441 6.2929 5.8404C6.92392 5.20939 7.51988 4.82377 8.35422 4.50125C8.98524 4.25585 9.93878 3.96138 11.6846 3.88425C13.5706 3.80012 14.1385 3.77908 18.9343 3.77908ZM18.9343 0.546875C14.0614 0.546875 13.4514 0.567909 11.5374 0.652044C9.63028 0.73618 8.31917 1.04468 7.18334 1.48639C5.99843 1.94913 4.99581 2.55912 4.00021 3.56173C2.99759 4.55734 2.38761 5.55995 1.92487 6.73785C1.48315 7.88069 1.17466 9.18479 1.09052 11.0919C1.00639 13.013 0.985352 13.6229 0.985352 18.4958C0.985352 23.3686 1.00639 23.9786 1.09052 25.8927C1.17466 27.7998 1.48315 29.1109 1.92487 30.2467C2.38761 31.4316 2.99759 32.4342 4.00021 33.4299C4.99581 34.4255 5.99843 35.0424 7.17633 35.4982C8.31917 35.9399 9.62327 36.2484 11.5303 36.3325C13.4444 36.4167 14.0544 36.4377 18.9273 36.4377C23.8001 36.4377 24.4101 36.4167 26.3242 36.3325C28.2313 36.2484 29.5424 35.9399 30.6782 35.4982C31.8561 35.0424 32.8587 34.4255 33.8543 33.4299C34.8499 32.4342 35.4669 31.4316 35.9226 30.2537C36.3644 29.1109 36.6729 27.8068 36.757 25.8997C36.8411 23.9856 36.8622 23.3757 36.8622 18.5028C36.8622 13.63 36.8411 13.02 36.757 11.1059C36.6729 9.19881 36.3644 7.8877 35.9226 6.75187C35.4809 5.55995 34.8709 4.55734 33.8683 3.56173C32.8727 2.56613 31.8701 1.94913 30.6922 1.4934C29.5494 1.05169 28.2453 0.743191 26.3382 0.659056C24.4171 0.567909 23.8071 0.546875 18.9343 0.546875Z"
              fill="url(#paint0_linear_737_546)"
            />
            <path
              d="M18.9342 9.27594C13.844 9.27594 9.71436 13.4056 9.71436 18.4958C9.71436 23.586 13.844 27.7157 18.9342 27.7157C24.0244 27.7157 28.1541 23.586 28.1541 18.4958C28.1541 13.4056 24.0244 9.27594 18.9342 9.27594ZM18.9342 24.4764C15.6319 24.4764 12.9536 21.7981 12.9536 18.4958C12.9536 15.1935 15.6319 12.5152 18.9342 12.5152C22.2365 12.5152 24.9148 15.1935 24.9148 18.4958C24.9148 21.7981 22.2365 24.4764 18.9342 24.4764Z"
              fill="url(#paint1_linear_737_546)"
            />
            <path
              d="M30.6711 8.91129C30.6711 10.1032 29.7036 11.0638 28.5187 11.0638C27.3268 11.0638 26.3662 10.0962 26.3662 8.91129C26.3662 7.71937 27.3338 6.75882 28.5187 6.75882C29.7036 6.75882 30.6711 7.72638 30.6711 8.91129Z"
              fill="url(#paint2_linear_737_546)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_737_546"
              x1="0.985352"
              y1="0.546875"
              x2="39.5754"
              y2="3.75022"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D19A08" />
              <stop offset="0.276042" stopColor="#FEDB7E" />
              <stop offset="0.5" stopColor="#EAC460" />
              <stop offset="0.661458" stopColor="#D19A08" />
              <stop offset="1" stopColor="#D19A08" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_737_546"
              x1="9.71436"
              y1="9.27594"
              x2="29.5485"
              y2="10.923"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D19A08" />
              <stop offset="0.276042" stopColor="#FEDB7E" />
              <stop offset="0.5" stopColor="#EAC460" />
              <stop offset="0.661458" stopColor="#D19A08" />
              <stop offset="1" stopColor="#D19A08" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_737_546"
              x1="26.3662"
              y1="6.75882"
              x2="30.9967"
              y2="7.14334"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D19A08" />
              <stop offset="0.276042" stopColor="#FEDB7E" />
              <stop offset="0.5" stopColor="#EAC460" />
              <stop offset="0.661458" stopColor="#D19A08" />
              <stop offset="1" stopColor="#D19A08" />
            </linearGradient>
            <clipPath id="clip0_737_546">
              <rect
                width="35.8978"
                height="35.8978"
                fill="white"
                transform="translate(0.985352 0.546875)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* king eyes */}

      {/* lava */}
      <div className={LanderCSS.leftLava}>
        <div className={LanderCSS.leftLava__1}>
          <img className={LanderCSS.leftLava__1Img} src={leftLava1} alt="" />
        </div>
        <div className={LanderCSS.leftLava__2}>
          <img className={LanderCSS.leftLava__2Img} src={leftLava2} alt="" />
        </div>
        <div className={LanderCSS.leftLava__3}>
          <img className={LanderCSS.leftLava__3Img} src={leftLava3} alt="" />
        </div>
        <div className={LanderCSS.leftLava__4}>
          <img className={LanderCSS.leftLava__4Img} src={leftLava4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Lander;
