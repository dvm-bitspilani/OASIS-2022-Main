import React, { useEffect, useRef, useState } from "react";
import EventItemCss from "../styles/EventItem.module.css";
import EventTriangleSvg from "../Assets/EventTriangle.svg";
import EventIcon from "../Assets/Event.png";

const EventItem = (props) => {
  const [opacity, setOpacity] = useState("0");
  const [numItem, setNumItem] = useState(2);
  const [radius, setRadius] = useState(40);
  const updateOpacity = () => {
    if (Math.abs(props.idx - props.itrCount) <= numItem) {
      setOpacity("1");
    } else {
      setOpacity("0");
    }
    if (props.itrCount < numItem) {
      if (props.idx >= props.len - (numItem - props.itrCount)) {
        setOpacity("1");
      }
    }
    if (props.itrCount >= props.len - numItem) {
      if (props.idx <= numItem - props.len + props.itrCount) {
        setOpacity("1");
      }
    }
  };

  const getNumItem = () => {
    if (window.innerWidth > 1000) {
      setNumItem(2);
      setRadius(40);
    } else if (window.innerWidth > 500) {
      setNumItem(1);
      setRadius(60);
    } else {
      setNumItem(0);
      setRadius(50);
    }
  };
  const handleNoImg = (evt) => {
    evt.target.style.backgroundImage = `url(${EventIcon})`;
  };

  useEffect(() => {
    getNumItem();
    window.addEventListener("resize", getNumItem);
  }, []);

  useEffect(updateOpacity, [props.itrCount]);

  const style = {
    transform: `perspective(5000px) translate3d(${
      radius *
      Math.sin((props.angle * Math.PI * (props.idx - props.itrCount)) / 180)
    }vw, 0, ${
      radius *
      Math.cos((props.angle * Math.PI * (props.idx - props.itrCount)) / 180)
    }vw) rotate3d(0, 1, 0, ${props.angle * (props.idx - props.itrCountAct)}deg`,
    opacity: opacity,
    zIndex: `${props.len - Math.abs(props.idx - props.itrCount)}`,
  };

  const mouseOverEvt = (evt) => {};

  const mouseOutEvt = (evt) => {};

  const dispatchClick = () => {
    let change = props.idx - props.itrCount;
    console.log(change);
    if (Math.abs(change) > props.len / 2) {
      change =
        (-1 * Math.abs(change) * ((change % 2) + (props.len % 2))) / change;
    }
    props.itrSet(props.itrCountAct + change);
  };

  return (
    <div
      className={`${EventItemCss.eventItemCont} ${
        props.idx === props.itrCount ? EventItemCss.eventItemActiveCont : null
      }`}
      style={style}
      onClick={() => {
        if (props.itrCount === props.idx) {
          props.openPopUp(props.idx);
        }
      }}
    >
      <div className={EventItemCss.eventItemHeading}>{props.eventName}</div>
      <div
        className={EventItemCss.eventItemBody}
        style={{ backgroundImage: `url(${props.eventImg})` }}
        onMouseOver={mouseOverEvt}
        onMouseOut={mouseOutEvt}
        onClick={dispatchClick}
      >
        <div className={EventItemCss.eventItemClick}>
          <img
            src={EventTriangleSvg}
            alt="Read More"
            className={EventItemCss.eventItemClickTriag}
          />
        </div>
      </div>
    </div>
  );
};

export default EventItem;
