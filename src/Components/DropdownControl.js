import React from "react";
import DropdownCSS from "../styles/Dropdown.module.css";
import { useState, useRef, useEffect } from "react";

const DropdownControl = (props) => {
  const inputRef = useRef(),
    listRef = useRef(),
    isMounted = useRef(false),
    [active, setActive] = useState(false),
    [listClass, setListClass] = useState(""),
    [labelClass, setLabelClass] = useState(""),
    [caretClass, setCaretClass] = useState(null),
    [searchTerm, setSearchTerm] = useState(""),
    [requiredInp, setRequired] = useState(),
    [eventList, setEventList] = useState();

  let pattern = new RegExp(),
    patterns = [];

  useEffect(() => {
    if (props.info !== "events") setRequired(`required`);
  }, [props.info]);

  useEffect(() => {
    if (props.info === "college") {
      patterns = props.listData.map((data) => data.name.trim()).join("|");
      // inputRef.current.pattern = patterns;
    }

    if (props.info === "year") {
      patterns = `${1}|${2}|${3}|${4}|${5}`;
      inputRef.current.pattern = patterns;
    }

    setEventList([...props.listData]);
  }, [props.listData]);

  const handleControlClick = () => {
    if (!active) {
      setActive(true);
      setListClass(DropdownCSS.openList);
      setLabelClass(DropdownCSS.shiftLabelUp);
      setCaretClass(DropdownCSS.rotateUp);

      inputRef.current.focus();
    }
  };

  if (!isMounted) isMounted.current = true;
  else {
    setInterval(() => {
      if (inputRef.current === document.activeElement) handleControlClick();
    }, 50);
  }

  const handleBlur = () => {
    setSearchTerm("");
    setTimeout(() => {
      setListClass(DropdownCSS.closeList);
      setActive(false);
      setCaretClass(DropdownCSS.rotateDown);
      if (inputRef.current.value.trim() === "") {
        setLabelClass();
      }
    }, 250);
  };

  const handleCollegeSelection = (e) => {
    let idNo = e.target.getAttribute("idno");
    inputRef.current.value = e.target.textContent.trim();

    if (props.info === "events") e.target.remove();
    if (props.info === "college") props.setValue(idNo);
    if (props.info === "year") props.setValue(e.target.textContent);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={DropdownCSS.formControl} onClick={handleControlClick}>
      <span className={`${DropdownCSS.collegeLabel} ${labelClass}`}>
        {props.label}
      </span>
      <span className={DropdownCSS.caretDown}>
        <i
          className={`fa-solid fa-caret-down ${DropdownCSS.caretClass} ${caretClass}`}
          onClick={handleControlClick}
        ></i>
      </span>
      <input
        type="text"
        className={DropdownCSS.collegeInput}
        onBlur={handleBlur}
        ref={inputRef}
        onChange={handleInputChange}
        required={requiredInp}
      />
      <ul
        className={`${DropdownCSS.collegeList} ${listClass}`}
        onMouseDown={handleCollegeSelection}
        ref={listRef}
      >
        {props.listData
          .filter((data) => {
            if (searchTerm === "") return data;
            else if (data.name.toLowerCase().includes(searchTerm.toLowerCase()))
              return data;

            return 0;
          })
          .map((data) => (
            <li key={data.id} idno={data.id}>
              {data.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DropdownControl;
