import React from "react";
import EventItemCss from "../styles/EventItem.module.css";

const EventItem = (props) => {
  return (
    <div className={EventItemCss.eventItemCont}>
      <div className={EventItemCss.eventItemHeading}>{props.eventName}</div>
      <div className={EventItemCss.eventItemBody}>
        <div className={EventItemCss.eventItemImg}></div>
        <div className={EventItemCss.eventItemClick}></div>
      </div>
    </div>
  );
};

export default EventItem;
