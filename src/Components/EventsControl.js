import React, { useEffect, useRef, useState } from "react";
import { act } from "react-dom/test-utils";
import EcCSS from "../styles/Ec.module.css";

const EventsControl = (props) => {
  const inputRef = useRef();
  const isMounted = useRef(false);
  const [active, setActive] = useState(null);
  const [labelClass, setLabelClass] = useState(null);
  const [dropDownClass, setDropDownClass] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [events_ids, setEventsIds] = useState([]);
  const [caretClass, setCaretClass] = useState(EcCSS.rotateDown);

  const [eventsList, setEventList] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  function inputContainerClick(e) {
    setActive(true);
  }

  function inputBlur(e) {
    setTimeout(() => {
      setSearchTerm("");
    }, 200);

    setActive(false);
  }

  function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleEventSelection(e) {
    let eventSelected = e.target;
    let eventId = e.target.getAttribute("idno");
    console.log(eventId);

    let updatedList = eventsList.filter((events) => {
      if (events.id.toString() !== eventId) {
        return events;
      }
    });
    let selectedEventList = eventsList.filter((events) => {
      if (events.id.toString() === eventId) {
        return events;
      }
    });
    setEventList([...updatedList]);
    setSelectedEvents((prevList) => [...prevList, ...selectedEventList]);
  }

  function handleEventDeselect(e) {
    let eventSelected = e.target.parentNode;
    let eventId = eventSelected.getAttribute("idno");

    let updatedList = selectedEvents.filter((events) => {
      if (events.id.toString() !== eventId) {
        return events;
      }
    });

    let removedEvent = selectedEvents.filter((events) => {
      if (events.id.toString() === eventId) {
        return events;
      }
    });
    setSelectedEvents([...updatedList]);
    setEventList((prevList) => [...prevList, ...removedEvent]);
  }

  useEffect(() => {
    let eventsIds = [];
    selectedEvents.forEach((events) => {
      let id = events.id;
      eventsIds.push(id);
    });
    props.setEventsIds([...eventsIds]);
  }, [selectedEvents]);

  useEffect(() => {
    if (active) {
      setLabelClass(EcCSS.shiftLabelUp);
      setDropDownClass(EcCSS.showList);
      setCaretClass(EcCSS.rotateUp);
      inputRef.current.focus();
    } else {
      inputRef.current.value = "";
      setLabelClass(EcCSS.shiftLabelDown);
      setDropDownClass(EcCSS.hideList);
      setCaretClass(EcCSS.rotateDown);
      inputRef.current.blur();
    }
  }, [active]);

  useEffect(() => {
    setEventList([...props.listData]);
  }, [props.listData]);

  return (
    <div className={EcCSS.formControl}>
      <div className={EcCSS.inputContainer}>
        <span className={`${EcCSS.label} ${labelClass}`}>Events</span>
        <span className={EcCSS.caretClass}>
          <i
            className={`fa-solid fa-caret-down fa-xl ${EcCSS.caretClass} ${caretClass}`}
          ></i>
        </span>
        <input
          type="text"
          ref={inputRef}
          onChange={handleInputChange}
          onClick={inputContainerClick}
          onBlur={inputBlur}
        />

        <ul className={`${EcCSS.dropDown} ${dropDownClass}`}>
          {eventsList
            .filter((data) => {
              if (searchTerm === "") {
                return data;
              } else if (
                data.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return data;
              }
            })
            .map((data) => (
              <li
                key={data.id}
                idno={data.id}
                onMouseDown={handleEventSelection}
              >
                {data.name}
              </li>
            ))}
        </ul>
      </div>

      <ul className={EcCSS.eventsContainer}>
        {selectedEvents.map((data) => (
          <li key={data.id} idno={data.id}>
            {data.name}
            <i class="fa-solid fa-xmark" onClick={handleEventDeselect}></i>
          </li>
        ))}
      </ul>

      {/* {dynamicEventsList.map((eventData)=>( <li>{eventData.name}<div className={RegFormCSS.eventCrossIcon} onClick={handleEventCross}><i class="fa-solid fa-xmark"></i></div></li>))} */}
      {/* <li>lkj<div className={RegFormCSS.eventCrossIcon} onClick={handleEventCross}><i class="fa-solid fa-xmark"></i></div></li>
<li>lkj<div className={RegFormCSS.eventCrossIcon}><i class="fa-solid fa-xmark"></i></div></li>
<li>l;kj<div className={RegFormCSS.eventCrossIcon}><i class="fa-solid fa-xmark"></i></div></li> */}
    </div>
  );
};

export default EventsControl;
