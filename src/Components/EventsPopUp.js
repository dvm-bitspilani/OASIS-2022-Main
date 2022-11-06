import EventsPopUpCss from "../styles/EventsPopUp.module.css";
import { useEffect, useRef, useState } from "react";

const EventsPopUp = (props) => {
  const popUpCont = useRef(null);
  const popUpTextCont = useRef(null);
  const [activeDesc, setActiveDesc] = useState("desc");
  const [activeText, setActiveText] = useState();

  const popUpClick = (evt) => {
    popUpTextCont.current.classList.add(EventsPopUpCss.popUpTextContClose);
    popUpCont.current.classList.add(EventsPopUpCss.popUpContClose);
    setTimeout(() => {
      props.closePopUp();
    }, 500);
  };

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
    <div
      className={EventsPopUpCss.popUpCont}
      onClick={popUpClick}
      ref={popUpCont}
    >
      <div
        className={EventsPopUpCss.popUp}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img
          className={EventsPopUpCss.popUpImg}
          src={props.img}
          alt="Event Image"
        />
        <div className={EventsPopUpCss.popUpTextCont} ref={popUpTextCont}>
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
            dangerouslySetInnerHTML={{
              __html: activeText || "NA",
            }}
          ></div>
        </div>
        <div className={EventsPopUpCss.popUpClose} onClick={popUpClick}></div>
      </div>
    </div>
  );
};

export default EventsPopUp;
