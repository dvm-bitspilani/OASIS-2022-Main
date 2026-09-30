import React, { useEffect, useRef, useState } from "react";
import EventsCss from "../styles/Events.module.css";
import EventItem from "./EventItem";
import EventIcon from "../Assets/Events/Event.webp";
import arrow from "../Assets/Events/Arrow.svg";
import EventsPopUp from "./EventsPopUp";
import { demoEvents } from "../demo/services";

const Events = (props) => {
  const [eventsArr] = useState(demoEvents);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [angle, setAngle] = useState(0);
  const [itrCount, setItrCount] = useState(0);
  const [arrLength, setArrLength] = useState(0);
  const [shouldDisplayPopUp, setShouldDisplayPopUp] = useState(false);
  const [popUpIdx, setPopUpIdx] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const eventTimer = useRef(null);

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
    clearTimeout(eventTimer.current);

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
    if (!visible || shouldDisplayPopUp || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(loopOver, 3000);
    eventTimer.current = timer;
    return () => clearTimeout(timer);
  }, [itrCount, shouldDisplayPopUp, visible]);

  useEffect(() => {
    if (eventsArr.length !== 0) {
      setAngle(360 / eventsArr.length);
    } else {
      setAngle(0);
    }
    setArrLength(eventsArr.length);
    setItrCount(eventsArr.length * 10);
  }, [eventsArr]);

  return (
    <section ref={sectionRef} className={EventsCss.eventSec}>
      <div className="secHead">KERNEL EVENTS</div>
      <p className="portfolio-event-note">Representative demo events · original event records unavailable</p>
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
};

export default Events;
