import React from "react";
import StrangeShardCSS from "../styles/StrangeShard.module.css";

const StrangeShard = () => {
  const offX = -50 + Math.random() * 100;
  const offY = 10 + Math.random() * 70;
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
