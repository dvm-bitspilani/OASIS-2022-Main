import RingCss from "../styles/LanderRings.module.css";
import RingShadows from "../JSON/dropShadows.json";

const LanderRing = (props) => {
  const idxGen = Math.random();
  const idx = idxGen < 0.4 ? 0 : idxGen < 0.75 ? 1 : 2;
  return (
    <svg
      viewBox="0 0 1283 1283"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={RingCss.goldringsImg}
      style={{
        "--offsetX": props.offX,
        "--offsetY": props.offY,
        "--speed": `${0.8 + Math.random() * 0.3}s`,
        "--filter": RingShadows[props.filter],
      }}
    >
      <path
        d="M1281.01 641.063C1281.01 994.528 994.472 1281.07 641.006 1281.07C287.54 1281.07 1 994.528 1 641.063C1 287.598 287.54 1.05841 641.006 1.05841C994.472 1.05841 1281.01 287.598 1281.01 641.063Z"
        stroke="url(#paint0_linear_784_398)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_784_398"
          x1="0"
          y1="0.0584106"
          x2="1378.96"
          y2="114.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D19A08" />
          <stop offset="0.164943" stopColor="#FEDB7E" />
          <stop offset="0.433733" stopColor="#EBB935" />
          <stop offset="0.749575" stopColor="#FCD776" />
          <stop offset="1" stopColor="#D19A08" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LanderRing;
