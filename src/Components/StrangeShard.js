import React, { createRef, useEffect, useState } from "react";
import StrangeShardCSS from "../styles/StrangeShard.module.css";

const StrangeShard = (props) => {
  const [isRunner, setIsRunner] = useState(false);
  const offXStartMod = Math.random() * 40;
  const mul = Math.random() > 0.5 ? 1 : -1;
  const offXStart = mul * offXStartMod;
  const offYStart = Math.sqrt(
    Math.abs(Math.pow(45, 2) - Math.pow(offXStartMod, 2))
  );
  // let offYStartMax = Math.sqrt(Math.pow(50, 2) - Math.pow(offXStart, 2));
  // if (window.innerWidth <= 800) {
  //   offYStartMax = 50;
  // }
  const deg = Math.atan(offYStart / offXStart) * (180 / Math.PI);
  const delay = Math.random() * 20;
  const dist = Math.random() * 30;
  const angle = 90 + Math.random() * 15;
  const oppSide = Math.sqrt(
    Math.pow(37, 2) + Math.pow(dist, 2) - 2 * 37 * dist * Math.cos(angle)
  );
  const offAngle =
    Math.acos(
      (Math.pow(37, 2) + Math.pow(oppSide, 2) - Math.pow(dist, 2)) /
        (2 * 37 * oppSide)
    ) - deg;
  const cols = ["#D19A08", "#FEDB7E", "#EBB935", "#FCD776", "#D19A08"];
  const colIdx = Math.floor(Math.random() * cols.length);
  const col = cols[colIdx];

  const elementRef = createRef();

  const checkRunner = () => {
    let elementRect = elementRef.current.getBoundingClientRect();
    if (
      Math.pow(elementRect.left - props.mouseX.current, 2) +
        Math.pow(elementRect.top - props.mouseY.current, 2) <=
      20
    ) {
      setIsRunner(true);
    }
  };

  return (
    <div
      className={`${StrangeShardCSS.shard} ${
        isRunner ? StrangeShardCSS.shardRunner : ""
      }`}
      ref={elementRef}
      style={{
        "--offXStart": `${offXStart}vw`,
        "--offYStart": `${offYStart}vw`,
        "--offXEnd": `${oppSide * Math.cos(offAngle)}vw`,
        "--offYEnd": `${oppSide * Math.sin(offAngle)}vw`,
        "--delay": `${delay}s`,
        "--bgCol": col,
      }}
    ></div>
  );
};

export default StrangeShard;
