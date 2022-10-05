import React from "react";
import EventItemCss from "../styles/EventItem.module.css";

const EventItem = (props) => {
  return (
    <div className={EventItemCss.eventItemCont}>
      <img
        className={EventItemCss.eventItemImg}
        src={props.eventImg}
        alt="Event Image"
      />
      <div className={EventItemCss.eventItemText}>
        <div className={EventItemCss.eventItemHeading}>{props.eventName}</div>
        <div
          className={EventItemCss.eventItemDesc}
          dangerouslySetInnerHTML={{
            __html: props.eventDesc.replace(new RegExp("<.*?>", "g"), ""),
          }}
        ></div>
      </div>
    </div>
  );
};

export default EventItem;
