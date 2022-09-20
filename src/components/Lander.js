import LanderCSS from "../styles/Lander.module.css";
import window from "../Assets/window.png";
import ring1 from "../Assets/ring1.png";
import ring2 from "../Assets/ring2.png";
import ring3 from "../Assets/ring3.png";
import ring4 from "../Assets/ring4.png";
import king from "../Assets/king.png";
import logo from "../Assets/logo.png";
import title from "../Assets/title.png";

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
        <img src={ring1} alt="" className={[LanderCSS.ring1, LanderCSS.goldringsImg, LanderCSS.goldringsImgUp].join(' ')} />
        <img src={ring2} alt="" className={[LanderCSS.ring2, LanderCSS.goldringsImg, LanderCSS.goldringsImgUp].join(' ')} />
        <img src={ring3} alt="" className={[LanderCSS.ring3, LanderCSS.goldringsImg, LanderCSS.goldringsImgUp].join(' ')} />
        <img src={ring4} alt="" className={[LanderCSS.ring4, LanderCSS.goldringsImg, LanderCSS.goldringsImgUp].join(' ')} />
        <img src={ring1} alt="" className={[LanderCSS.ring1, LanderCSS.goldringsImg, LanderCSS.goldringsImgDown].join(' ')} />
        <img src={ring2} alt="" className={[LanderCSS.ring2, LanderCSS.goldringsImg, LanderCSS.goldringsImgDown].join(' ')} />
        <img src={ring3} alt="" className={[LanderCSS.ring3, LanderCSS.goldringsImg, LanderCSS.goldringsImgDown].join(' ')} />
        <img src={ring4} alt="" className={[LanderCSS.ring4, LanderCSS.goldringsImg, LanderCSS.goldringsImgDown].join(' ')} />
      </div>

      <img src={king} alt="" className={LanderCSS.king} ref={kingEl}/>
      <img src={title} alt="" className={LanderCSS.title} />

      <div className={LanderCSS.register}>
        <div>Register Now</div>
      </div>

      {/* icons */}
      <div className={LanderCSS.icons}>
        <i class="fa fa-brands fa-facebook"></i>
        <i class="fa fa-brands fa-instagram"></i>
      </div>

      {/* king eyes */}
      <div className="eye-svg-container">
        <EyeSvg />
      </div>

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
