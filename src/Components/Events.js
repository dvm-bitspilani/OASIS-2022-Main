import React, { useEffect, useRef, useState } from "react";
import EventsCss from "../styles/Events.module.css";
import EventItem from "./EventItem";
import EventIcon from "../Assets/Event.png";
import arrow from "../Assets/Arrow.svg";
import EventsPopUp from "./EventsPopUp";

const Events = React.forwardRef((props, ref) => {
  const EVENT_URL =
    "https://bits-oasis.org/2022/main/registrations/events_details";
  const [eventsArr, setEventsArr] = useState([]);

  const [angle, setAngle] = useState(0);
  const [itrCount, setItrCount] = useState(0);
  const [arrLength, setArrLength] = useState(0);
  const [shouldDisplayPopUp, setShouldDisplayPopUp] = useState(false);
  const [popUpIdx, setPopUpIdx] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const eventTimer = useRef(null);

  const getEvents = async () => {
    try {
      let res = await fetch(EVENT_URL, { method: "GET" });
      let events = await res.json();
      let evtArr = events[0].events.map((event) => {
        return {
          img: event.img_url,
          name: event.name,
          desc: event.details,
          guidelines: event.rules,
          contact: event.contact,
        };
      });
      setEventsArr(evtArr);
    } catch (e) {
      console.log(e);
      alert("NETWORK ERROR!");
    }
  };

  const loopOver = () => {
    setItrCount((itrCount) => {
      return itrCount + 1;
    });
  };

  const next = () => {
    clearTimeout(eventTimer.current);
    setItrCount((itrCount) => {
      return itrCount + 1;
    });
  };

  const prev = () => {
    clearTimeout(eventTimer.current);
    setItrCount((itrCount) => {
      return itrCount - 1;
    });
  };

  const setItr = (itr) => {
    clearTimeout(eventTimer.current);
    setItrCount(itr);
  };

  const handleNoImg = (evt) => {
    evt.target.src = EventIcon;
  };

  const openPopUp = (evtIdx) => {
    clearTimeout(eventTimer.current);
    setShouldDisplayPopUp(true);
    setPopUpIdx(evtIdx);
    document.body.style.overflow = "hidden";
  };

  const closePopUp = () => {
    setShouldDisplayPopUp(false);
    document.body.style.overflow = "unset";
    eventTimer.current = setTimeout(loopOver, 3000);
  };

  const handleTouchStart = (evt) => {
    const touchDown = evt.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (evt) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currTouchDown = evt.touches[0].clientX;
    const diff = currTouchDown - touchDown;

    if (diff > 5) {
      prev();
    } else if (diff < -5) {
      next();
    }
    setTouchPosition(null);
  };

  useEffect(() => {
    getEvents();
    clearInterval(eventTimer.current);
  }, []);

  useEffect(() => {
    eventTimer.current = setTimeout(loopOver, 3000);
  }, [itrCount]);

  useEffect(() => {
    if (eventsArr.length !== 0) {
      setAngle(360 / eventsArr.length);
    } else {
      setAngle(0);
    }
    setArrLength(eventsArr.length);
  }, [eventsArr]);

  return (
    <section className={EventsCss.eventSec} ref={ref}>
      <div className="secHead">KERNEL EVENTS</div>
      <div className={EventsCss.eventsCarCont}>
        <div
          onClick={prev}
          className={`${EventsCss.eventsArr} ${EventsCss.eventsLeftArr}`}
        >
          <img src={arrow} alt="Right Arrrow" />
        </div>
        <div
          className={EventsCss.eventsCar}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {eventsArr.map((event, idx) => {
            return (
              <EventItem
                key={idx}
                eventImg={event.img === "Nill" ? EventIcon : event.img}
                eventName={event.name}
                eventDesc={event.desc}
                idx={idx}
                angle={angle}
                itrCount={itrCount % arrLength}
                itrCountAct={itrCount}
                len={arrLength}
                itrSet={setItr}
                openPopUp={openPopUp}
              />
            );
          })}
          {eventsArr.length > 0 ? (
            <img
              src={eventsArr[0].img}
              onError={handleNoImg}
              className={EventsCss.eventsPlaceholder}
            />
          ) : (
            <></>
          )}
        </div>
        <div
          onClick={next}
          className={`${EventsCss.eventsArr} ${EventsCss.eventsRightArr}`}
        >
          <img src={arrow} alt="Right Arrrow" />
        </div>
      </div>
      {shouldDisplayPopUp ? (
        <EventsPopUp
          img={
            eventsArr[popUpIdx].img === "Nill"
              ? EventIcon
              : eventsArr[popUpIdx].img
          }
          name={eventsArr[popUpIdx].name}
          desc={eventsArr[popUpIdx].desc}
          guidlines={eventsArr[popUpIdx].guidelines}
          contact={eventsArr[popUpIdx].contact}
          closePopUp={closePopUp}
        />
      ) : (
        <></>
      )}
    </section>
  );
});

export default Events;
