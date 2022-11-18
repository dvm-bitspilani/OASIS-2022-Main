import React, { useEffect, useRef, useState } from "react";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import devCSS from "../styles/Developers.module.css";
import { useNavigate } from "react-router-dom";

import Front from "../Assets/Developers/Front";
import Design from "../Assets/Developers/Design";
import Back from "../Assets/Developers/Back";

import dvmlogo from "../Assets/Developers/dvm_logo.png";
import hoverTxt1 from "../Assets/Developers/hoverTxt1.png";
import hoverTxt2 from "../Assets/Developers/hoverTxt2.png";

import D from "../Assets/Developers/D.js";
import E from "../Assets/Developers/E.js";
import V from "../Assets/Developers/V.js";
import L from "../Assets/Developers/L.js";
import P from "../Assets/Developers/P.js";
import O from "../Assets/Developers/O.js";
import R from "../Assets/Developers/R.js";
import S from "../Assets/Developers/S.js";

import vector1 from "../Assets/Developers/vector1.svg";
import vector2 from "../Assets/Developers/vector2.svg";
import vector3 from "../Assets/Developers/vector3.svg";
import vector4 from "../Assets/Developers/vector4.svg";
import vector5 from "../Assets/Developers/vector5.svg";
import vector6 from "../Assets/Developers/vector6.svg";
import vector7 from "../Assets/Developers/vector7.svg";
import DevelopersModel from "../Components/DevelopersModel";

const Developers = () => {
  
  const navigate = useNavigate()
  const navigateBack = () => navigate('/');

  const front = [
    {
      img: require("../Assets/Developers/DevImages/jay.jpg"),
      name: "Jay Goyal",
      github: "https://github.com/jay-goyal",
      linkedin: "https://www.linkedin.com/in/jay-goyal-41395b224/",
      behance: "",
    },
    {
      img: require("../Assets/Developers/DevImages/vaibhav.jpg"),
      name: "Vaibhav Singla",
      github: "https://github.com/CoderVaibhavS",
      linkedin: "https://www.linkedin.com/in/vaibhav-singla-8128321b3/",
      behance: "",
    },
    {
      img: require("../Assets/Developers/DevImages/prateek.png"),
      name: "Prateek Kashyap",
      github: "https://github.com/bit-by-bits",
      linkedin: "https://www.linkedin.com/in/bit-by-bits/",
      behance: "",
    },
    {
      img: require("../Assets/Developers/DevImages/shwetabh.jpeg"),
      name: "Shwetabh Niket",
      github: "https://www.github.com/nIMblEt06",
      linkedin: "https://www.linkedin.com/in/niketshwetabh",
      behance: "",
    },
    {
      img: require("../Assets/Developers/DevImages/aaradhya.jpg"),
      name: "Aaradhya Kulshreshta",
      github: "https://github.com/aaradhyakul",
      linkedin: "https://www.linkedin.com/in/aaradhya-kulshrestha-20bab8223",
      behance: "",
    },
  ];

  const design = [
    {
      img: require("../Assets/Developers/DevImages/shivang.png"),
      name: "Shivang Rai",
      github: "",
      linkedin: "https://www.linkedin.com/in/shivang-rai-36a0481bb/",
      behance: "https://www.behance.net/shivangrai2",
    },
    {
      img: require("../Assets/Developers/DevImages/satwik.JPG"),
      name: "Satwik Rath",
      github: "",
      linkedin: "https://www.linkedin.com/in/satwik-rath-70034421b/",
      behance: "https://www.behance.net/satwikrath",
    },
    {
      img: require("../Assets/Developers/DevImages/sejal.jpg"),
      name: "Sejal Agarwal",
      github: "",
      linkedin: "https://www.linkedin.com/in/sejal-agarwal-618176228/",
      behance: "https://www.behance.net/sejalagarwal12",
    },
    {
      img: require("../Assets/Developers/DevImages/swaha.jpeg"),
      name: "Swaha Pati",
      github: "",
      linkedin: "http://www.linkedin.com/in/swahapati",
      behance: "https://www.behance.net/patiswaha",
    },
    {
      img: require("../Assets/Developers/DevImages/aditya.jpg"),
      name: "Aditya Patil",
      github: "",
      linkedin: "https://www.linkedin.com/in/aditya-patil-aa2431230",
      behance: "https://www.behance.net/AnAvUser",
    },
  ];

  const back = [
    {
      img: require("../Assets/Developers/DevImages/harsh.jpg"),
      name: "Harsh Singh",
      github: "https://github.com/DankMemes4President",
      linkedin: "https://www.linkedin.com/in/harsh-singh-049838227",
      behance: "",
    },
    {
      img: require("../Assets/Developers/DevImages/prakhar.jpeg"),
      name: "Prakhar Gurunani",
      github: "https://github.com/FirePing32/",
      linkedin: "https://linkedin.com/in/prakhargurunani/",
      behance: "",
    },
    {
      img: require("../Assets/Developers/DevImages/maanas.jpg"),
      name: "Maanas Singh",
      github: "https://github.com/Maanas-23",
      linkedin: "https://www.linkedin.com/in/maanas23",
      behance: "",
    },
    {
      img: require("../Assets/Developers/DevImages/utkarsh.jpg"),
      name: "Utkarsh Sharma",
      github: "https://github.com/utkarsh314",
      linkedin: "https://www.linkedin.com/in/utkarsh314/",
      behance: "",
    },
    {
      img: require("../Assets/Developers/DevImages/harshith.jpg"),
      name: "Harshith Vasireddy",
      github: "https://github.com/ode",
      linkedin: "",
      behance: "",
    },
  ];

  useEffect(() => {}, [
    document.querySelectorAll(".devLetter"),
    document.querySelectorAll(".vector"),
  ]);

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
      const x = left - e.pageX * speed;
      const y = top - e.pageY * speed * 2;
      div.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    i = 1;
    document.querySelectorAll(".devIcon").forEach((div) => {
      i++;
      const speed = div.getAttribute("dataSpeed") * 0.01;
      const left = div.style.left;
      const top = div.style.top;
      const x = left - e.pageX * speed;
      const y = top - e.pageY * speed;
      div.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  const [openFront, setOpenFront] = useState(0);
  const [openDesign, setOpenDesign] = useState(0);
  const [openBack, setOpenBack] = useState(0);

  document.addEventListener("mousemove", parallax);

  const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#EBB935",
    lag: 0,
  };

  return (
    <div className={devCSS.devContainer}>
      <div className="backBtn">
      <svg onClick={navigateBack}
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
