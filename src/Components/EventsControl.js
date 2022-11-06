import React, { useEffect, useRef, useState } from "react";
import { act } from "react-dom/test-utils";
import EcCSS from "../styles/Ec.module.css";
import ruleBookPdf from "../Assets/rulebook.pdf";

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
  const [heightMod,setHeightMod]=useState()

  function inputContainerClick(e) {
    setActive(true);
  }

  function inputBlur(e) {
    setTimeout(() => {
      setSearchTerm("");
    }, 200);
    let rootStyle = document.querySelector(":root").style

    rootStyle.setProperty("--dropDownHeight",`120px`)

    setActive(false);
  }

  function handleInputChange(e) {
    setSearchTerm(e.target.value);
    let dynamicLength = eventsList
            .filter((data) => {
              if (e.target.value === "") {
                return data;
              } else if (
                data.name.toLowerCase().includes(e.target.value.toLowerCase())
              ) {
                return data;
              }
            }).length
    let rootStyle = document.querySelector(":root").style
    // console.log(rootStyle)
    if(dynamicLength <=5){
      rootStyle.setProperty("--dropDownHeight",`${dynamicLength*25}px`)
    }
    else{
      rootStyle.setProperty("--dropDownHeight",`120px`)
    }

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

    console.log([...updatedList].length)

    // if([...updatedList].length <=5){
    //   // setHeightMod({hei})
    //   setHeightMod(EcCSS.heightMod)
    // }
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

    // if([...updatedList].length > 5){
    //   // setHeightMod({hei})
    //   setHeightMod(null)
    // }
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

  useEffect(() => {
    // console.log("triggere")
    let rootStyle = document.querySelector(":root").style
    // console.log(rootStyle)
    if(eventsList.length <=5){
      rootStyle.setProperty("--dropDownHeight",`${eventsList.length*25}px`)
    }
    else{
      rootStyle.setProperty("--dropDownHeight",`120px`)
    }

  },[eventsList.length])
  return (
    <div className={EcCSS.formControl}>
      <div className={EcCSS.inputContainer}>
        <span className={`${EcCSS.label} ${labelClass}`}>Events * </span>
        <span >
          <i
            className={`fa-solid fa-caret-down ${EcCSS.caretClass} ${caretClass}`}
          ></i>
        </span>
        <input
          type="text"
          ref={inputRef}
          onChange={handleInputChange}
          onClick={inputContainerClick}
          onBlur={inputBlur}
        />

        <ul className={`${EcCSS.dropDown} ${dropDownClass} ${heightMod}`}>
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
