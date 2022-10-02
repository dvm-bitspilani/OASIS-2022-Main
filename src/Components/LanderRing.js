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
        "--speed": `${1.0 + Math.random() * 0.5}s`,
      }}
    />
  );
};

export default LanderRing;
