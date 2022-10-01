import React, { useEffect, useRef, useState } from "react";
import EventsCss from "../styles/Events.module.css";
import EventItem from "./EventItem";

const Events = () => {
  const EVENT_URL =
    "https://bits-oasis.org/2022/main/registrations/events_details";
  const [eventsArr, setEventsArr] = useState([]);

  const getEvents = async () => {
    try {
      let res = await fetch(EVENT_URL, { method: "GET" });
      let events = await res.json();
      let evtArr = events[0].events.map((event) => {
        return {
          img:
            event.img_url === "Nill"
              ? require("../Assets/Event.png")
              : event.img_url,
          name: event.name,
          desc:
            event.details === "NA"
              ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque distinctio error minus, natus nesciunt nihil nostrum quae rem!"
              : event.details,
        };
      });
      setEventsArr(evtArr);
    } catch (e) {
      console.log(e);
      alert("NETWORK ERROR!");
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <section className={EventsCss.eventSec}>
      <div className="secHead">KERNEL EVENTS</div>
      <div className={EventsCss.eventsCarCont}>
        <div className={EventsCss.eventsCont}>
          {eventsArr.map((event, idx) => {
            return (
              <EventItem
                key={idx}
                eventImg={event.img}
                eventName={event.name}
                eventDesc={event.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
