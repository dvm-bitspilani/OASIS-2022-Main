import React from "react";
import StrangeShardCSS from "../styles/StrangeShard.module.css";

const StrangeShard = () => {
  const offXMod = Math.random() * 50;
  const mul = Math.random() > 0.5 ? 1 : -1;
  const offX = mul * offXMod;
  const offYMin = Math.max(
    Math.sqrt(2 * Math.pow(35, 2) - Math.pow(offX, 2)),
    0
  );
  let offYMax = 70;
  if (window.innerWidth <= 800) {
    offYMax = 50
  }
  const offY = offYMin + Math.random() * (offYMax - offYMin);
  const deg = Math.atan(offY / offX) * (180 / Math.PI);
  const delay = Math.random() * 5;
  const cols = ["#D19A08", "#FEDB7E", "#EBB935", "#FCD776", "#D19A08"];
  const colIdx = Math.floor(Math.random() * cols.length);
  const col = cols[colIdx];
  return (
    <div
      className={StrangeShardCSS.shard}
      style={{
        "--offX": `${offX}vw`,
        "--offY": `${offY}vh`,
        "--rot": `${deg}deg`,
        "--delay": `${delay}s`,
        "--bgCol": col,
      }}
    ></div>
  );
};

export default StrangeShard;
