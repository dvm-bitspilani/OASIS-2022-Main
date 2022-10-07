import React, { useEffect, useState } from "react";
import EventItemCss from "../styles/EventItem.module.css";
import EventTriangleSvg from "../Assets/EventTriangle.svg";
import EventIcon from "../Assets/Event.png";

const EventItem = (props) => {
  let [opacity, setOpacity] = useState("0");
  const updateOpacity = () => {
    if (Math.abs(props.idx - props.itrCount) <= 2) {
      setOpacity("1");
    } else {
      setOpacity("0");
    }
    if (props.itrCount < 2) {
      if (props.idx >= props.len - (2 - props.itrCount)) {
        setOpacity("1");
      }
    }
    if (props.itrCount >= props.len - 2) {
      if (props.idx <= 2 - props.len + props.itrCount) {
        setOpacity("1");
      }
    }
  };

  const handleNoImg = (evt) => {
    evt.target.src = EventIcon;
  };

  useEffect(updateOpacity, [props.itrCount]);

  const style = {
    transform: `perspective(5000px) translate3d(${
      43 *
      Math.sin((props.angle * Math.PI * (props.idx - props.itrCount)) / 180)
    }vw, 0, ${
      43 *
      Math.cos((props.angle * Math.PI * (props.idx - props.itrCount)) / 180)
    }vw) rotate3d(0, 1, 0, ${props.angle * (props.idx - props.itrCountAct)}deg`,
    opacity: opacity,
    zIndex: `${props.len - Math.abs(props.idx - props.itrCount)}`,
  };
  return (
    <div className={EventItemCss.eventItemCont} style={style}>
      <div className={EventItemCss.eventItemHeading}>{props.eventName}</div>
      <div className={EventItemCss.eventItemBody}>
        <img
          src={props.eventImg}
          onError={handleNoImg}
          alt={props.eventName}
          className={EventItemCss.eventItemImg}
        />
        <div className={EventItemCss.eventItemClick}>
          <img
            src={EventTriangleSvg}
            alt="Read More"
            className={EventItemCss.eventItemClickTriag}
          />
          <div>Click to view more details</div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
