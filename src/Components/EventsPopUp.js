import EventsPopUpCss from "../styles/EventsPopUp.module.css";
import { useEffect, useRef, useState } from "react";

const EventsPopUp = (props) => {
  const popUpRef = useRef();
  const [activeDesc, setActiveDesc] = useState("desc");
  const [activeText, setActiveText] = useState();
  useEffect(() => {
    if (activeDesc === "desc") {
      setActiveText(props.desc);
    } else if (activeDesc === "guide") {
      setActiveText(props.guidlines);
    } else {
      setActiveText(props.contact);
    }
  });
  return (
    <div className={EventsPopUpCss.popUpCont}>
      <div className={EventsPopUpCss.popUp} ref={popUpRef}>
        <img
          className={EventsPopUpCss.popUpImg}
          src={props.img}
          alt="Event Image"
        />
        <div className={EventsPopUpCss.popUpTextCont}>
          <div className={EventsPopUpCss.popUpHeading}>{props.name}</div>
          <div className={EventsPopUpCss.popUpSecCont}>
            <div
              className={`${EventsPopUpCss.popUpSec} ${
                activeDesc === "desc" ? EventsPopUpCss.popUpSecActive : null
              }`}
              onClick={() => {
                setActiveDesc("desc");
              }}
            >
              DETAILS
            </div>
            <div
              className={`${EventsPopUpCss.popUpSec} ${
                activeDesc === "guide" ? EventsPopUpCss.popUpSecActive : null
              }`}
              onClick={() => {
                setActiveDesc("guide");
              }}
            >
              GUIDELINES
            </div>
            <div
              className={`${EventsPopUpCss.popUpSec} ${
                activeDesc === "contact" ? EventsPopUpCss.popUpSecActive : null
              }`}
              onClick={() => {
                setActiveDesc("contact");
              }}
            >
              CONTACT
            </div>
          </div>
          <div
            className={EventsPopUpCss.popUpText}
            dangerouslySetInnerHTML={{ __html: activeText || "NA" }}
          ></div>
        </div>
        <div
          className={EventsPopUpCss.popUpClose}
          onClick={props.closePopUp}
        ></div>
      </div>
    </div>
  );
};

export default EventsPopUp;
