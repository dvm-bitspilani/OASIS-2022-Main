import "../styles/Lander.css";
import window from "../Assets/window.png";
import goldrings from "../Assets/goldrings.png";
import king from "../Assets/king.png";
import logo from "../Assets/logo.png";

import leftLava4 from "../Assets/left-lava-4.png";
import leftLava3 from "../Assets/left-lava-3.png";
import leftLava2 from "../Assets/left-lava-2.png";
import leftLava1 from "../Assets/left-lava-1.png";

import { ReactComponent as EyeSvg } from "../Assets/eyes.svg";

const Lander = () => {
  return (
    <div className="lander">
      <img src={logo} alt="" className="logo" />
      <img src={window} alt="" className="window" />
      <div className="goldrings">
        <img
          src={goldrings}
          alt=""
          className="goldrings-img goldrings-img-up"
        />
        <img src={goldrings} alt="" className="goldrings-img" />
      </div>
      <img src={king} alt="" className="king" />
      <div className="eye-svg-container">
        <EyeSvg />
      </div>
      <div className="left-lava">
        <div className="left-lava__1">
          <img className="left-lava__1--img" src={leftLava1} alt="" />
        </div>
        <div className="left-lava__2">
          <img className="left-lava__2--img" src={leftLava2} alt="" />
        </div>
        <div className="left-lava__3">
          <img className="left-lava__3--img" src={leftLava3} alt="" />
        </div>
        <div className="left-lava__4">
          <img className="left-lava__4--img" src={leftLava4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Lander;
