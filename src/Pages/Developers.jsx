import legacyAsset0 from "../Assets/Developers/DevImages/jay.webp";
import legacyAsset1 from "../Assets/Developers/DevImages/vaibhav.webp";
import legacyAsset2 from "../Assets/Developers/DevImages/prateek.webp";
import legacyAsset3 from "../Assets/Developers/DevImages/shwetabh.webp";
import legacyAsset4 from "../Assets/Developers/DevImages/aaradhya.webp";
import legacyAsset5 from "../Assets/Developers/DevImages/shivang.webp";
import legacyAsset6 from "../Assets/Developers/DevImages/satwik.webp";
import legacyAsset7 from "../Assets/Developers/DevImages/sejal.webp";
import legacyAsset8 from "../Assets/Developers/DevImages/swaha.webp";
import legacyAsset9 from "../Assets/Developers/DevImages/aditya.webp";
import legacyAsset10 from "../Assets/Developers/DevImages/harsh.webp";
import legacyAsset11 from "../Assets/Developers/DevImages/prakhar.webp";
import legacyAsset12 from "../Assets/Developers/DevImages/maanas.webp";
import legacyAsset13 from "../Assets/Developers/DevImages/utkarsh.webp";
import legacyAsset14 from "../Assets/Developers/DevImages/harshith.webp";
import React, { useEffect, useRef, useState } from "react";
import { MouseTrail } from "../Components/MouseTrail";
import devCSS from "../styles/Developers.module.css";
import { useNavigate } from "react-router-dom";

import Front from "../Assets/Developers/Front";
import Design from "../Assets/Developers/Design";
import Back from "../Assets/Developers/Back";

import dvmlogo from "../Assets/Developers/dvm_logo.webp";
import hoverTxt1 from "../Assets/Developers/hoverTxt1.webp";
import hoverTxt2 from "../Assets/Developers/hoverTxt2.webp";

import D from "../Assets/Developers/D.jsx";
import E from "../Assets/Developers/E.jsx";
import V from "../Assets/Developers/V.jsx";
import L from "../Assets/Developers/L.jsx";
import P from "../Assets/Developers/P.jsx";
import O from "../Assets/Developers/O.jsx";
import R from "../Assets/Developers/R.jsx";
import S from "../Assets/Developers/S.jsx";

import vector1 from "../Assets/Developers/vector1.svg";
import vector2 from "../Assets/Developers/vector2.svg";
import vector3 from "../Assets/Developers/vector3.svg";
import vector4 from "../Assets/Developers/vector4.svg";
import vector5 from "../Assets/Developers/vector5.svg";
import vector6 from "../Assets/Developers/vector6.svg";
import vector7 from "../Assets/Developers/vector7.svg";
import DevelopersModel from "../Components/DevelopersModel";

const Developers = () => {
  document.title = "OASIS'22 | Developers"
  const navigate = useNavigate();
  const navigateBack = () => navigate("/");

  const front = [
    {
      img: legacyAsset0,
      name: "Jay Goyal",
      github: "https://github.com/jay-goyal",
      linkedin: "https://www.linkedin.com/in/jay-goyal-41395b224/",
      behance: "",
    },
    {
      img: legacyAsset1,
      name: "Vaibhav Singla",
      github: "https://github.com/CoderVaibhavS",
      linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/",
      behance: "",
    },
    {
      img: legacyAsset2,
      name: "Prateek Kashyap",
      github: "https://github.com/bit-by-bits",
      linkedin: "https://www.linkedin.com/in/bit-by-bits/",
      behance: "",
    },
    {
      img: legacyAsset3,
      name: "Shwetabh Niket",
      github: "https://www.github.com/nIMblEt06",
      linkedin: "https://www.linkedin.com/in/niketshwetabh",
      behance: "",
    },
    {
      img: legacyAsset4,
      name: "Aaradhya Kulshreshta",
      github: "https://github.com/aaradhyakul",
      linkedin: "https://www.linkedin.com/in/aaradhya-kulshrestha-20bab8223",
      behance: "",
    },
  ];

  const design = [
    {
      img: legacyAsset5,
      name: "Shivang Rai",
      github: "",
      linkedin: "https://www.linkedin.com/in/shivang-rai-36a0481bb/",
      behance: "https://www.behance.net/shivangrai2",
    },
    {
      img: legacyAsset6,
      name: "Satwik Rath",
      github: "",
      linkedin: "https://www.linkedin.com/in/satwik-rath-70034421b/",
      behance: "https://www.behance.net/satwikrath",
    },
    {
      img: legacyAsset7,
      name: "Sejal Agarwal",
      github: "",
      linkedin: "https://www.linkedin.com/in/sejal-agarwal-618176228/",
      behance: "https://www.behance.net/sejalagarwal12",
    },
    {
      img: legacyAsset8,
      name: "Swaha Pati",
      github: "",
      linkedin: "https://www.linkedin.com/in/swahapati",
      behance: "https://www.behance.net/patiswaha",
    },
    {
      img: legacyAsset9,
      name: "Aditya Patil",
      github: "",
      linkedin: "https://www.linkedin.com/in/aditya-patil-aa2431230",
      behance: "https://www.behance.net/AnAvUser",
    },
  ];

  const back = [
    {
      img: legacyAsset10,
      name: "Harsh Singh",
      github: "https://github.com/DankMemes4President",
      linkedin: "https://www.linkedin.com/in/harsh-singh-049838227",
      behance: "",
    },
    {
      img: legacyAsset11,
      name: "Prakhar Gurunani",
      github: "https://github.com/FirePing32/",
      linkedin: "https://linkedin.com/in/prakhargurunani/",
      behance: "",
    },
    {
      img: legacyAsset12,
      name: "Maanas Singh",
      github: "https://github.com/Maanas-23",
      linkedin: "https://www.linkedin.com/in/maanas23",
      behance: "",
    },
    {
      img: legacyAsset13,
      name: "Utkarsh Sharma",
      github: "https://github.com/utkarsh314",
      linkedin: "https://www.linkedin.com/in/utkarsh314/",
      behance: "",
    },
    {
      img: legacyAsset14,
      name: "Harshith Vasireddy",
      github: "https://github.com/ode",
      linkedin: "",
      behance: "",
    },
  ];

  const parallax = (e) => {
    let i = 1;
    document.querySelectorAll(".devLetter").forEach((div) => {
      i++;
      const speed = div.getAttribute("dataSpeed") * 0.01;
      const left = 0;
      const top = (e.pageY * speed) / 1.2;
      div.style.transform = `translateX(${left}px) translateY(${top}px)`;
    });
    i = 1;
    document.querySelectorAll(".vector").forEach((div) => {
      i++;
      const speed = div.getAttribute("dataSpeed") * 0.01;
      const left = div.style.left;
      const top = div.style.top;
      const x = (parseFloat(left) || 0) - e.pageX * speed;
      const y = (parseFloat(top) || 0) - e.pageY * speed * 2;
      div.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    i = 1;
    document.querySelectorAll(".devIcon").forEach((div) => {
      i++;
      const speed = div.getAttribute("dataSpeed") * 0.01;
      const left = div.style.left;
      const top = div.style.top;
      const x = (parseFloat(left) || 0) - e.pageX * speed;
      const y = (parseFloat(top) || 0) - e.pageY * speed;
      div.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  const [openFront, setOpenFront] = useState(0);
  const [openDesign, setOpenDesign] = useState(0);
  const [openBack, setOpenBack] = useState(0);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    let frame;
    const move = (event) => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => parallax(event)); };
    document.addEventListener("pointermove", move, { passive: true });
    return () => { cancelAnimationFrame(frame); document.removeEventListener("pointermove", move); };
  }, []);

  const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#EBB935",
    lag: 0,
  };

  return (
    <div className={devCSS.devContainer}>
      <div className="backBtn">
        <svg
          onClick={navigateBack}
          version="1.1"
          id="Capa_1"
          viewBox="0 0 486.975 486.975"
          width="40"
          height="35"
        >
          <g>
            <path
              d="M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1
		l139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5
		S480.975,230.025,473.475,230.025z"
            />
          </g>
        </svg>
      </div>
      <div style={{ zIndex: 1000 }}>
        <MouseTrail {...trailProps} />
      </div>
      <div className={devCSS.dvmlogo}>
        <img src={dvmlogo} alt="" />
      </div>

      <div className={devCSS.hoverTxt} id={devCSS.hoverTxt1}>
        <img src={hoverTxt1} alt="" />
      </div>
      <div className={devCSS.hoverTxt} id={devCSS.hoverTxt2}>
        <img src={hoverTxt2} alt="" />
      </div>

      <div className={devCSS.developers}>
        <div className={devCSS.devLetters}>
          <div
            className={`${devCSS.devLetter} devLetter`}
            id={devCSS.devLetter1}
            dataSpeed={1}
          >
            <D />
          </div>
          <div
            className={`${devCSS.devLetter} devLetter`}
            id={devCSS.devLetter2}
            dataSpeed={-1}
          >
            <E />
          </div>
          <div
            className={`${devCSS.devLetter} devLetter`}
            id={devCSS.devLetter3}
            dataSpeed={2}
          >
            <V />
          </div>
          <div
            className={`${devCSS.devLetter} devLetter`}
            id={devCSS.devLetter4}
            dataSpeed={-2}
          >
            <E />
          </div>
          <div
            className={`${devCSS.devLetter} devLetter`}
            id={devCSS.devLetter5}
            dataSpeed={2}
          >
            <L />
          </div>
          <div
            className={`${devCSS.devLetter} devLetter`}
            id={devCSS.devLetter6}
            dataSpeed={-2}
          >
            <O />
          </div>
          <div
            className={`${devCSS.devLetter} devLetter`}
            id={devCSS.devLetter7}
            dataSpeed={1}
          >
            <P />
          </div>
          <div
            className={`${devCSS.devLetter} devLetter`}
            id={devCSS.devLetter8}
            dataSpeed={2}
          >
            <E />
          </div>
          <div
            className={`${devCSS.devLetter} devLetter`}
            id={devCSS.devLetter9}
            dataSpeed={-1}
          >
            <R />
          </div>
          <div
            className={`${devCSS.devLetter} devLetter`}
            id={devCSS.devLetter10}
            dataSpeed={1}
          >
            <S />
          </div>
        </div>

        <div className={devCSS.vectors}>
          <img
            src={vector1}
            className={`${devCSS.vector} vector`}
            id={devCSS.vector1}
            dataSpeed={1}
            alt=""
          />
          <img
            src={vector2}
            className={`${devCSS.vector} vector`}
            id={devCSS.vector2}
            dataSpeed={-2}
            alt=""
          />
          <img
            src={vector3}
            className={`${devCSS.vector} vector`}
            id={devCSS.vector3}
            dataSpeed={-3}
            alt=""
          />
          <img
            src={vector4}
            className={`${devCSS.vector} vector`}
            id={devCSS.vector4}
            dataSpeed={2}
            alt=""
          />
          <img
            src={vector5}
            className={`${devCSS.vector} vector`}
            id={devCSS.vector5}
            dataSpeed={2}
            alt=""
          />
          <img
            src={vector6}
            className={`${devCSS.vector} vector`}
            id={devCSS.vector6}
            dataSpeed={-1}
            alt=""
          />
          <img
            src={vector7}
            className={`${devCSS.vector} vector`}
            id={devCSS.vector7}
            dataSpeed={-3}
            alt=""
          />
        </div>

        <div className={devCSS.devIcons}>
          <div
            className={`${devCSS.devIcon} devIcon`}
            id={devCSS.front}
            onClick={() => setOpenFront(1)}
            dataSpeed={-2}
          >
            <Front />
          </div>
          <div
            className={`${devCSS.devIcon} devIcon`}
            id={devCSS.design}
            onClick={() => setOpenDesign(1)}
            dataSpeed={1}
          >
            <Design />
          </div>
          <div
            className={`${devCSS.devIcon} devIcon`}
            id={devCSS.back}
            onClick={() => setOpenBack(1)}
            dataSpeed={-1}
          >
            <Back />
          </div>
        </div>
      </div>

      {openFront ? (
        <div className={devCSS.model} id="frontModel">
          <DevelopersModel
            setOpen={setOpenFront}
            team="Front-end Team"
            devs={front}
          />
        </div>
      ) : (
        <div></div>
      )}

      {openDesign ? (
        <div className={devCSS.model} id="designModel">
          <DevelopersModel
            setOpen={setOpenDesign}
            team="UI/UX Team"
            devs={design}
          />
        </div>
      ) : (
        <div></div>
      )}

      {openBack ? (
        <div className={devCSS.model} id="backModel">
          <DevelopersModel
            setOpen={setOpenBack}
            team="Back-end Team"
            devs={back}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Developers;
