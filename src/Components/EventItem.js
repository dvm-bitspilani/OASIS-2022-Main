import React from "react";
import EventItemCss from "../styles/EventItem.module.css";
import EventTriangleSvg from "../Assets/EventTriangle.svg";

const EventItem = (props) => {
  return (
    <div className={EventItemCss.eventItemCont}>
      <div className={EventItemCss.eventItemHeading}>{props.eventName}</div>
      <img
        src={props.eventImg}
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
  );
};

export default EventItem;
