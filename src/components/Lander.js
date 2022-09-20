import LanderCSS from "../styles/Lander.module.css";
import window from "../Assets/window.png";
import goldrings from "../Assets/goldrings.png";
import king from "../Assets/king.png";
import logo from "../Assets/logo.png";

import leftLava4 from "../Assets/left-lava-4.png";
import leftLava3 from "../Assets/left-lava-3.png";
import leftLava2 from "../Assets/left-lava-2.png";
import leftLava1 from "../Assets/left-lava-1.png";

import { ReactComponent as EyeSvg } from "../Assets/eyes.svg";
import { useEffect, useRef, useState } from "react";

const Lander = () => {
    const [eyePosition,setEyePosition]=useState({top:null})
    
    const kingEl=useRef(null)

    useEffect(()=>{
        // const kingImg=document.querySelector(".king")
        const KingPos=kingEl.current.getBoundingClientRect()
        setEyePosition({top:KingPos.height*0.3})
        console.log(kingEl.current.getBoundingClientRect(), eyePosition)

    //    console.log(kingRef.getBoundingClientRect().height)
    },[])


  return (
    <div className={LanderCSS.lander}>
      <img src={logo} alt="" className={LanderCSS.logo} />
      <img src={window} alt="" className={LanderCSS.window} />
      <div className={LanderCSS.goldrings}>
        <img
          src={goldrings}
          alt=""
          className={[LanderCSS.goldringsImg, LanderCSS.goldringsImgUp].join(' ')}
        />
        <img src={goldrings} alt="" className={LanderCSS.goldringsImg} />
      </div>
      <img src={king} alt="" className={LanderCSS.king} ref={kingEl}/>
      <div className="eye-svg-container">
        <EyeSvg />
      </div>
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
