import React, { useEffect, useState } from "react";
import EventsCss from "../styles/Events.module.css";
import EventItem from "./EventItem";
import ruleBookPdf from "../Assets/rulebook.pdf";
import Button from "./Button";

const Events = React.forwardRef((props, ref) => {
  const EVENT_URL =
    "https://bits-oasis.org/2022/main/registrations/events_details";
  const [eventsArr, setEventsArr] = useState([]);

  const [angle, setAngle] = useState(0);
  const [itrCount, setItrCount] = useState(0);

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

  useEffect(() => {
    getEvents();
    console.log(eventsArr);
  }, []);

  return (
    <section className={EventsCss.eventSec} ref={ref}>
      <div className="secHead">KERNEL EVENTS</div>
      <div className={EventsCss.eventsCont}>
        
        {eventsArr.map((event,idx) => {
          return (
          <EventItem key={idx}
            eventImg={event.img}
            eventName={event.name}
            eventDesc={event.desc}
            idx={idx}
            angle={angle}
            itrCount={itrCount}
          />
          )
        })}
        
      </div>

      <div className={EventsCss.btn}>
        {/* <Button btn_title="Guidelines" /> */}
        <a href={ruleBookPdf}>Guidelines</a>
      </div>
    </section>
  );
});

export default Events;
