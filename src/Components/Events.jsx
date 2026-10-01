import EventsCSS from "../styles/Events.module.css";
import EventCSS from "../styles/EventItem.module.css";
import eventArtwork from "../Assets/Events/Event.webp";

export default function Events() {
  return <section className={EventsCSS.eventSec}>
    <h2 className="secHead">KERNEL EVENTS</h2>
    <div className={`${EventsCSS.eventsCarCont} ${EventsCSS.unavailable}`}>
      <div className={EventCSS.eventItemActiveCont}>
        <img className={EventCSS.eventItemBody} src={eventArtwork} alt="" loading="lazy" decoding="async" />
      </div>
      <p>Event details are unavailable for this edition.</p>
    </div>
  </section>;
}
