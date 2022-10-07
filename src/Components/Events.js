import React, { useEffect, useRef, useState } from "react";
import EventsCss from "../styles/Events.module.css";
import EventItem from "./EventItem";
import ruleBookPdf from "../Assets/rulebook.pdf";
import EventIcon from "../Assets/Event.png";
import Button from "./Button";

const Events = React.forwardRef((props, ref) => {
  const EVENT_URL =
    "https://bits-oasis.org/2022/main/registrations/events_details";
  const [eventsArr, setEventsArr] = useState([]);

  const [angle, setAngle] = useState(0);
  const [itrCount, setItrCount] = useState(0);
  const [arrLength, setArrLength] = useState(0);
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
        };
      });
      console.log(evtArr);
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

  useEffect(() => {
    getEvents();
    clearInterval(eventTimer.current);
  }, []);

  useEffect(() => {
    eventTimer.current = setTimeout(loopOver, 5000);
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
      <div className={EventsCss.eventsCar}>
        {eventsArr.map((event, idx) => {
          return (
            <EventItem
              key={idx}
              eventImg={event.img}
              eventName={event.name}
              eventDesc={event.desc}
              idx={idx}
              angle={angle}
              itrCount={itrCount % arrLength}
              itrCountAct={itrCount}
              len={arrLength}
              itrSet={setItr}
            />
          );
        })}
      </div>
      {eventsArr.length > 0 ? (
        <img
          src={eventsArr[0].img}
          onError={handleNoImg}
          className={EventsCss.eventsPlaceholder}
        />
      ) : (
        <></>
      )}

      <div className={EventsCss.btn}>
        {/* <Button btn_title="Guidelines" /> */}
        <a href={ruleBookPdf}>Guidelines</a>
      </div>
    </section>
  );
});

export default Events;
