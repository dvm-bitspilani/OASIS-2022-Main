import React, { useEffect, useRef } from "react";
import devCSS from "../styles/Developers.module.css";

import Front from '../Assets/Developers/Front'
import Design from '../Assets/Developers/Design'
import Back from '../Assets/Developers/Back'

import dvmlogo from '../Assets/Developers/dvm_logo.png'
import hoverTxt1 from '../Assets/Developers/hoverTxt1.png'
import hoverTxt2 from '../Assets/Developers/hoverTxt2.png'

import D from '../Assets/Developers/D.svg'
import E from '../Assets/Developers/E.svg'
import V from '../Assets/Developers/V.svg'
import L from '../Assets/Developers/L.svg'
import P from '../Assets/Developers/P.svg'
import O from '../Assets/Developers/O.svg'
import R from '../Assets/Developers/R.svg'
import S from '../Assets/Developers/S.svg'

import vector1 from '../Assets/Developers/vector1.svg'
import vector2 from '../Assets/Developers/vector2.svg'
import vector3 from '../Assets/Developers/vector3.svg'
import vector4 from '../Assets/Developers/vector4.svg'
import vector5 from '../Assets/Developers/vector5.svg'
import vector6 from '../Assets/Developers/vector6.svg'
import vector7 from '../Assets/Developers/vector7.svg'

const Developers = () => {
  // for (let a = 0; a < 15; a++) {
  //   fifteen[a] = (
  //     <div key={a} className={devCSS.devCard} id="devCard" dataSpeed={a}>
  //       <div className={devCSS.devImageCont}>
  //         <div className={devCSS.devImage}>
  //           <img
  //             src={data[a].image}
  //             alt={data[a].name}
  //             className={devCSS.devImage}
  //           />
  //         </div>
  //       </div>
  //       <div className={devCSS.devName}>{data[a].name}</div>
  //       <div className={devCSS.devDept}>{data[a].dept}</div>
  //       <div className={devCSS.devLinks}>
  //         <PhoneIcon tele={data[a].github} />
  //         <MailIcon mail={data[a].linkedin} />
  //       </div>
  //     </div>
  //   );
  // }

  const lettersRef = useRef([]);

  useEffect(() => {
    console.log(document.querySelectorAll('.devLetter'))
  }, [document.querySelectorAll('.devLetter'), document.querySelectorAll('.vector')])


  const parallax = (e) => {
    let i = 1;
    document.querySelectorAll('.devLetter').forEach(div => {
      i++;
      const speed = (div.getAttribute('dataSpeed'))*.01;
      const left = 0;
      // const left = e.pageX*speed / 10;
      const top = e.pageY*speed / 1.2;
      div.style.transform = `translateX(${left}px) translateY(${top}px)`;
    })
    i=1;
    document.querySelectorAll('.vector').forEach(div => {
      i++;
      const speed = (div.getAttribute('dataSpeed'))*.01;
      const left = div.style.left;
      const top = div.style.top;
      const x = left - e.pageX*speed;
      const y = top - e.pageY*speed*2;
      div.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
    i=1;
    document.querySelectorAll('.devIcon').forEach(div => {
      i++;
      const speed = (div.getAttribute('dataSpeed'))*.01;
      const left = div.style.left;
      const top = div.style.top;
      const x = left - e.pageX*speed;
      const y = top - e.pageY*speed;
      div.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
  }

  document.addEventListener('mousemove', parallax);

  return (
    <div className={devCSS.devContainer}>
      <div className={devCSS.dvmlogo}>
        <img src={dvmlogo} alt="" />
      </div>

      <div className={devCSS.hoverTxt} id={devCSS.hoverTxt1}><img src={hoverTxt1} alt="" /></div>
      <div className={devCSS.hoverTxt} id={devCSS.hoverTxt2}><img src={hoverTxt2} alt="" /></div>

      <div className={devCSS.developers}>
        <div className={devCSS.devLetters}>
          <img className={`${devCSS.devLetter} devLetter`} id={devCSS.devLetter1} dataSpeed={1} src={D} alt="" />
          <img className={`${devCSS.devLetter} devLetter`} id={devCSS.devLetter2} dataSpeed={-1} src={E} alt="" />
          <img className={`${devCSS.devLetter} devLetter`} id={devCSS.devLetter3} dataSpeed={2} src={V} alt="" />
          <img className={`${devCSS.devLetter} devLetter`} id={devCSS.devLetter4} dataSpeed={-2} src={E} alt="" />
          <img className={`${devCSS.devLetter} devLetter`} id={devCSS.devLetter5} dataSpeed={2} src={L} alt="" />
          <img className={`${devCSS.devLetter} devLetter`} id={devCSS.devLetter6} dataSpeed={-2} src={O} alt="" />
          <img className={`${devCSS.devLetter} devLetter`} id={devCSS.devLetter7} dataSpeed={1} src={P} alt="" />
          <img className={`${devCSS.devLetter} devLetter`} id={devCSS.devLetter8} dataSpeed={2} src={E} alt="" />
          <img className={`${devCSS.devLetter} devLetter`} id={devCSS.devLetter9} dataSpeed={-1} src={R} alt="" />
          <img className={`${devCSS.devLetter} devLetter`} id={devCSS.devLetter10} dataSpeed={1}  src={S} alt="" />
        </div>

        <div className={devCSS.vectors}>
          <img src={vector1} className={`${devCSS.vector} vector`} id={devCSS.vector1} dataSpeed={1} alt="" />
          <img src={vector2} className={`${devCSS.vector} vector`} id={devCSS.vector2} dataSpeed={-2} alt="" />
          <img src={vector3} className={`${devCSS.vector} vector`} id={devCSS.vector3} dataSpeed={-3} alt="" />
          <img src={vector4} className={`${devCSS.vector} vector`} id={devCSS.vector4} dataSpeed={2} alt="" />
          <img src={vector5} className={`${devCSS.vector} vector`} id={devCSS.vector5} dataSpeed={2} alt="" />
          <img src={vector6} className={`${devCSS.vector} vector`} id={devCSS.vector6} dataSpeed={-1} alt="" />
          <img src={vector7} className={`${devCSS.vector} vector`} id={devCSS.vector7} dataSpeed={-3} alt="" />
        </div>

        <div className={devCSS.devIcons}>
          <div className={`${devCSS.devIcon} devIcon`} id={devCSS.front} dataSpeed={-2}><Front /></div>
          <div className={`${devCSS.devIcon} devIcon`} id={devCSS.design} dataSpeed={1}><Design /></div>
          <div className={`${devCSS.devIcon} devIcon`} id={devCSS.back} dataSpeed={-1}><Back /></div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
