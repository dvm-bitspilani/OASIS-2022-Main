import { useRef, useState } from "react";
import LanderCSS from "../styles/Lander.module.css";
import LanderRing from "./LanderRing";
import StrangeShard from "./StrangeShard";

import windowImg from "../Assets/window.png";
import king from "../Assets/king.png";
import logo from "../Assets/logo.png";
import title from "../Assets/title.png";
import leftEye from "../Assets/lefteye.png";
import rightEye from "../Assets/righteye.png";

// import leftLava4 from "../Assets/left-lava-4.png";
// import leftLava3 from "../Assets/left-lava-3.png";
// import leftLava2 from "../Assets/left-lava-2.png";
// import leftLava1 from "../Assets/left-lava-1.png";

const Lander = (props) => {
  const kingEl = useRef(null);
  const ringCount = Math.floor(7 + Math.random() * 2);
  let [shardCount, setShardCount] = useState(
    Math.floor(100 + Math.random() * 50)
  );
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 600) {
      setShardCount(Math.floor(0));
    } else {
      setShardCount(Math.floor(100 + Math.random() * 50));
    }
  });

  return (
    <div className={LanderCSS.lander}>
      <img src={logo} className={LanderCSS.logo} />
      <img src={windowImg} className={LanderCSS.window} />

      <div className={LanderCSS.goldrings}>
        {[...Array(ringCount)].map((count, idx) => (
          <LanderRing
            key={idx}
            offX={`${idx * (-1.25 + Math.random() + 2.5)}px`}
            offY={`${idx * (-1.25 + Math.random() * 1.25)}px`}
            filter={idx < 2 ? 2 : idx < 4 ? 1 : 0}
          />
        ))}
        {[...Array(shardCount)].map((count, idx) => (
          <StrangeShard key={idx} />
        ))}
      </div>

      <div className={LanderCSS.kingContainer}>
        <img src={king} className={LanderCSS.king} ref={kingEl} />

        <div className={LanderCSS.eyeSvgContainer}>
          <img src={leftEye} className={LanderCSS.leftEye} />
          <img src={rightEye} className={LanderCSS.rightEye} />
        </div>
      </div>

      <img src={title} className={LanderCSS.title} />

      {/* register */}
      <div className={LanderCSS.register}>
        <div onClick={props.changeRegState}>Register Now</div>
      </div>

      {/* icons */}
      <div className={LanderCSS.icons}>
        <a href="https://www.facebook.com/oasis.bitspilani" target="_blank">
          <svg
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_784_427)">
              <path
                d="M35.8978 18.0895C35.8978 8.17662 27.8618 0.140625 17.9489 0.140625C8.036 0.140625 0 8.17662 0 18.0895C0 27.0482 6.56362 34.4739 15.1444 35.8204V23.2779H10.5871V18.0895H15.1444V14.1352C15.1444 9.63673 17.8241 7.15192 21.924 7.15192C23.8871 7.15192 25.9418 7.50249 25.9418 7.50249V11.9196H23.6785C21.449 11.9196 20.7534 13.3033 20.7534 14.7241V18.0895H25.7315L24.9357 23.2779H20.7534V35.8204C29.3342 34.4739 35.8978 27.0482 35.8978 18.0895Z"
                fill="white"
              />
            </g>
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
            <defs>
              <clipPath id="clip0_784_427">
                <rect
                  width="35.8978"
                  height="35.8978"
                  fill="white"
                  transform="translate(0 0.140625)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>

        <a href="https://instagram.com/bitsoasis" target="_blank">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_784_428)">
              <path
                d="M18.8467 3.37283C23.6425 3.37283 24.2104 3.39387 26.0964 3.478C27.8493 3.55513 28.7958 3.8496 29.4268 4.095C30.2611 4.41752 30.8641 4.81015 31.4881 5.43415C32.1191 6.06517 32.5048 6.66113 32.8273 7.49547C33.0727 8.12649 33.3671 9.08003 33.4443 10.8258C33.5284 12.7189 33.5494 13.2868 33.5494 18.0755C33.5494 22.8712 33.5284 23.4392 33.4443 25.3252C33.3671 27.078 33.0727 28.0246 32.8273 28.6556C32.5048 29.4899 32.1121 30.0929 31.4881 30.7169C30.8571 31.3479 30.2611 31.7335 29.4268 32.056C28.7958 32.3014 27.8422 32.5959 26.0964 32.673C24.2034 32.7572 23.6355 32.7782 18.8467 32.7782C14.051 32.7782 13.4831 32.7572 11.5971 32.673C9.84424 32.5959 8.89772 32.3014 8.2667 32.056C7.43236 31.7335 6.82938 31.3409 6.20538 30.7169C5.57436 30.0859 5.18874 29.4899 4.86622 28.6556C4.62083 28.0246 4.32635 27.071 4.24923 25.3252C4.16509 23.4322 4.14406 22.8642 4.14406 18.0755C4.14406 13.2798 4.16509 12.7119 4.24923 10.8258C4.32635 9.07302 4.62083 8.12649 4.86622 7.49547C5.18874 6.66113 5.58137 6.05816 6.20538 5.43415C6.8364 4.80314 7.43236 4.41752 8.2667 4.095C8.89772 3.8496 9.85125 3.55513 11.5971 3.478C13.4831 3.39387 14.051 3.37283 18.8467 3.37283ZM18.8467 0.140625C13.9739 0.140625 13.3639 0.161659 11.4498 0.245794C9.54276 0.32993 8.23164 0.638427 7.09581 1.08014C5.9109 1.54288 4.90829 2.15287 3.91268 3.15548C2.91007 4.15109 2.30009 5.1537 1.83734 6.3316C1.39563 7.47444 1.08713 8.77854 1.003 10.6856C0.918861 12.6067 0.897827 13.2167 0.897827 18.0895C0.897827 22.9624 0.918861 23.5724 1.003 25.4865C1.08713 27.3935 1.39563 28.7046 1.83734 29.8405C2.30009 31.0254 2.91007 32.028 3.91268 33.0236C4.90829 34.0192 5.9109 34.6362 7.0888 35.0919C8.23164 35.5336 9.53574 35.8421 11.4428 35.9263C13.3569 36.0104 13.9669 36.0314 18.8397 36.0314C23.7126 36.0314 24.3226 36.0104 26.2367 35.9263C28.1437 35.8421 29.4548 35.5336 30.5907 35.0919C31.7686 34.6362 32.7712 34.0192 33.7668 33.0236C34.7624 32.028 35.3794 31.0254 35.8351 29.8475C36.2768 28.7046 36.5853 27.4005 36.6695 25.4935C36.7536 23.5794 36.7746 22.9694 36.7746 18.0966C36.7746 13.2237 36.7536 12.6137 36.6695 10.6996C36.5853 8.79256 36.2768 7.48145 35.8351 6.34562C35.3934 5.1537 34.7834 4.15109 33.7808 3.15548C32.7852 2.15988 31.7826 1.54288 30.6047 1.08715C29.4618 0.645438 28.1577 0.336941 26.2507 0.252806C24.3296 0.161659 23.7196 0.140625 18.8467 0.140625Z"
                fill="white"
              />
              <path
                d="M18.8468 8.86963C13.7566 8.86963 9.62695 12.9993 9.62695 18.0895C9.62695 23.1797 13.7566 27.3093 18.8468 27.3093C23.937 27.3093 28.0667 23.1797 28.0667 18.0895C28.0667 12.9993 23.937 8.86963 18.8468 8.86963ZM18.8468 24.0701C15.5445 24.0701 12.8662 21.3918 12.8662 18.0895C12.8662 14.7872 15.5445 12.1088 18.8468 12.1088C22.1491 12.1088 24.8274 14.7872 24.8274 18.0895C24.8274 21.3918 22.1491 24.0701 18.8468 24.0701Z"
                fill="white"
              />
              <path
                d="M30.5837 8.50501C30.5837 9.69693 29.6161 10.6575 28.4312 10.6575C27.2393 10.6575 26.2787 9.68992 26.2787 8.50501C26.2787 7.31309 27.2463 6.35254 28.4312 6.35254C29.6161 6.35254 30.5837 7.3201 30.5837 8.50501Z"
                fill="white"
              />
            </g>
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
            <defs>
              <clipPath id="clip0_784_428">
                <rect
                  width="35.8978"
                  height="35.8978"
                  fill="white"
                  transform="translate(0.897827 0.140625)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>

        <a
          href="https://m.youtube.com/channel/UCf40GISJivaYZK2pPOyt1kw"
          target="_blank"
        >
          <svg
            width="37"
            height="37"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_985_608)">
              <path
                d="M45.041 14.4534C45.041 14.4534 44.6046 11.1317 43.2604 9.67312C41.5583 7.75349 39.6555 7.74408 38.7826 7.63116C32.5329 7.14185 23.1497 7.14185 23.1497 7.14185H23.1322C23.1322 7.14185 13.7489 7.14185 7.49924 7.63116C6.62638 7.74408 4.72353 7.75349 3.02145 9.67312C1.67725 11.1317 1.24954 14.4534 1.24954 14.4534C1.24954 14.4534 0.795654 18.3585 0.795654 22.2542V25.9053C0.795654 29.801 1.24081 33.7061 1.24081 33.7061C1.24081 33.7061 1.67725 37.0279 3.01272 38.4864C4.71481 40.406 6.94933 40.3402 7.9444 40.5472C11.5231 40.9142 23.1409 41.0271 23.1409 41.0271C23.1409 41.0271 32.5329 41.0083 38.7826 40.5284C39.6555 40.4154 41.5583 40.406 43.2604 38.4864C44.6046 37.0279 45.041 33.7061 45.041 33.7061C45.041 33.7061 45.4862 29.8104 45.4862 25.9053V22.2542C45.4862 18.3585 45.041 14.4534 45.041 14.4534ZM18.5235 30.3374V16.7965L30.5952 23.5904L18.5235 30.3374Z"
                fill="white"
              />
            </g>
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
            <defs></defs>
          </svg>
        </a>
      </div>
      <div className={LanderCSS.transition}></div>

      {/* king eyes */}

      {/* lava */}
      {/* <div className={LanderCSS.leftLava}>
        <div className={LanderCSS.leftLava__1}>
          <img className={LanderCSS.leftLava__1Img} src={leftLava1} />
        </div>
        <div className={LanderCSS.leftLava__2}>
          <img className={LanderCSS.leftLava__2Img} src={leftLava2} />
        </div>
        <div className={LanderCSS.leftLava__3}>
          <img className={LanderCSS.leftLava__3Img} src={leftLava3} />
        </div>
        <div className={LanderCSS.leftLava__4}>
          <img className={LanderCSS.leftLava__4Img} src={leftLava4} />
        </div>
      </div> */}
    </div>
  );
};

export default Lander;
