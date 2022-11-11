import React, { createRef, useEffect, useState } from "react";
import StrangeShardCSS from "../styles/StrangeShard.module.css";

const StrangeShard = (props) => {
  const [isRunner, setIsRunner] = useState(false);
  const offXStartMod = Math.random() * 40;
  const mul = Math.random() > 0.5 ? 1 : -1;
  const offXStart = mul * offXStartMod;
  const offYStart = Math.sqrt(
    Math.abs(Math.pow(props.width, 2) - Math.pow(offXStartMod, 2))
  );
  // let offYStartMax = Math.sqrt(Math.pow(50, 2) - Math.pow(offXStart, 2));
  // if (window.innerWidth <= 800) {
  //   offYStartMax = 50;
  // }
  const deg = Math.atan(offYStart / offXStart) * (180 / Math.PI);
  const delay = Math.random() * 26;
  const dist = Math.random() * 30;
  const angle = 90 + Math.random() * 15;
  const oppSide = Math.sqrt(
    Math.pow(props.portalWidth, 2) +
      Math.pow(dist, 2) -
      2 * props.portalWidth * dist * Math.cos(angle)
  );
  const offAngle =
    Math.acos(
      (Math.pow(props.portalWidth, 2) +
        Math.pow(oppSide, 2) -
        Math.pow(dist, 2)) /
        (2 * props.portalWidth * oppSide)
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
        "--offYStart": `${Math.min(
          (offYStart * window.innerHeight) / window.innerWidth,
          90
        )}vh`,
        "--offXEnd": `${oppSide * Math.cos(offAngle)}vw`,
        "--offYEnd": `${Math.max(
          (oppSide * Math.sin(offAngle) * window.innerHeight) /
            window.innerWidth,
          0
        )}vh`,
        "--delay": `${delay}s`,
        "--bgCol": col,
      }}
    ></div>
  );
};

export default StrangeShard;
