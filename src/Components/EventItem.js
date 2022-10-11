import React, { useEffect, useRef, useState } from "react";
import EventItemCss from "../styles/EventItem.module.css";
import EventTriangleSvg from "../Assets/EventTriangle.svg";
import EventIcon from "../Assets/Event.png";

const EventItem = (props) => {
  const [opacity, setOpacity] = useState("0");
  const [numItem, setNumItem] = useState(2);
  const [radius, setRadius] = useState(40);
  const [diff, setDiff] = useState(0);

  const getDiff = () => {
    let newDiff = props.idx - props.itrCount;
    if (newDiff > props.len / 2) {
      newDiff = newDiff - props.len;
    }
    if (newDiff < (-1 * props.len) / 2) {
      newDiff = props.len - Math.abs(newDiff);
    }
    setDiff(newDiff);
  };
  const updateOpacity = () => {
    if (Math.abs(diff) <= numItem) {
      setOpacity("1");
    } else {
      setOpacity("0");
    }
  };

  const getNumItem = () => {
    if (window.innerWidth > 1000) {
      setNumItem(2);
      setRadius(42);
    } else if (window.innerWidth > 500) {
      setNumItem(1);
      setRadius(60);
    } else {
      setNumItem(1);
      setRadius(155);
    }
  };
  const dispatchClick = () => {
    console.log(`DISPATCHING WITH: ${props.itrCountAct + diff} and ${diff}`);
    props.itrSet(props.itrCountAct + diff);
  };

  useEffect(() => {
    getNumItem();
    window.addEventListener("resize", getNumItem);
  }, []);

  useEffect(() => {
    getDiff();
  }, [props.itrCount]);

  useEffect(() => {
    updateOpacity();
  }, [diff]);

  const style = {
    transform: `perspective(5000px) translate3d(${
      radius *
      Math.sin((props.angle * Math.PI * (props.idx - props.itrCount)) / 180)
    }vw, 0, ${
      radius *
      Math.cos((props.angle * Math.PI * (props.idx - props.itrCount)) / 180)
    }vw) scale(${95 - Math.abs(diff * 8)}%)`,
    opacity: opacity,
    zIndex: `${props.len - Math.abs(diff)}`,
  };

  return (
    <div
      className={`${EventItemCss.eventItemCont} ${
        props.idx === props.itrCount ? EventItemCss.eventItemActiveCont : null
      }`}
      style={style}
      onClick={() => {
        console.log("RUNNING");
        if (props.itrCount === props.idx) {
          props.openPopUp(props.idx);
        } else {
          dispatchClick();
        }
      }}
    >
      <div className={EventItemCss.eventItemHeading}>{props.eventName}</div>
      <div
        className={EventItemCss.eventItemBody}
        style={{ backgroundImage: `url(${props.eventImg})` }}
      >
        {props.idx === props.itrCount ? (
          <div className={EventItemCss.eventItemClick}>
            <img
              src={EventTriangleSvg}
              alt="Read More"
              className={EventItemCss.eventItemClickTriag}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default EventItem;
