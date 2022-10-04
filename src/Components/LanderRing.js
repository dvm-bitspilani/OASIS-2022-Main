import RingCss from "../styles/LanderRings.module.css";
import RingImg from "../Assets/rings.png";

const LanderRing = (props) => {
  return (
    <img
      src={RingImg}
      alt="Ring"
      className={RingCss.goldringsImg}
      style={{
        "--offsetX": props.offX,
        "--offsetY": props.offY,
        "--offsetRot": `${props.initAngle}deg`,
        "--speed": `${4.5 + Math.random() * 1.2}s`,
        "--stretch": `${props.stretch / 76.6}`,
      }}
    />
  );
};

export default LanderRing;
