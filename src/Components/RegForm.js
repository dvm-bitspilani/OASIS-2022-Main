import React, { useEffect } from "react";
import RegFormCSS from "../styles/RegForm.module.css";
import { useState } from "react";
import TextInputControl from "./TextInputControl";
import GenderInputControl from "./GenderInputControl";
import DropdownControl from "./DropdownControl";
import EventsControl from "./EventsControl";
import Button from "./Button";
import InstrucBook from "../Assets/Registration/reg_guidelines.pdf";
import Alert from "./Alert";
import Wheel from "./Wheel";
import { useInView } from "react-intersection-observer";
import { doc } from "prettier";

const OPTIONS = {
  root: document.getElementById("regFormBox"),
  threshold: 0.8,
};

const RegForm = (props) => {
  const OASIS_END_POINT = "https://bits-oasis.org/2022/main/registrations";
  const OASIS_END_POINT_POST =
    "https://bits-oasis.org/2022/main/registrations/Register/";

  let availColleges = [];
  let availEvents = [];

  const [name, setName] = useState("");
  const [email_id, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [college_id, setCollege] = useState(null);
  const [location, setLocation] = useState("");
  const [head_of_society, setHeadOfSociety] = useState(false);
  const [choreographer, setChoreo] = useState(false);
  const [year_of_study, setYear] = useState("");
  const [events_ids, setEventsIds] = useState([]);
  const [events, setEvents] = useState([]);
  const [checkboxChoreo, setCheckboxChoreo] = useState("");
  const [checkboxHos, setCheckboxHos] = useState("");
  const [popup, setPopup] = useState(false);
  const [message, setMessage] = useState("");

  const [collegeList, setCollegeList] = useState([]);
  const [eventsList, setEventsList] = useState([]);
  const yearList = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
  ];

  const getElems = async () => {
    try {
      let collegeRes = await fetch(`${OASIS_END_POINT}/get_college`, {
        method: "GET",
      });
      let eventsRes = await fetch(`${OASIS_END_POINT}/events_details`, {
        method: "GET",
      });

      let collegeListJson = await collegeRes.json();
      availColleges = collegeListJson.data;

      let eventsListJson = await eventsRes.json();
      availEvents = [];
      availEvents.push(...eventsListJson[0].events);
      availEvents.push(...eventsListJson[1].events);
      setEventsList([...availEvents]);
      setCollegeList([...availColleges]);
    } catch (e) {
      alert("Failure in getting Data");
      console.log(e);
    }
  };

  useEffect(() => {
    getElems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (events_ids.length === 0) {
      alert("fill in atleast one event");

      return;
    }

    try {
      const data = {
        captcha: 123,
        email_id: email_id,
        events: events_ids,
        phone: phone,
        year: year_of_study,
        choreographer: choreographer,
        head_of_society: head_of_society,
        name: name,
        gender: gender,
        city: location,
        college_id: college_id,
      };
      if (data.college_id == null) {
        alert("please select a valid college from the dropdown.");
      }

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      let res = await fetch(`${OASIS_END_POINT_POST}`, options);
      let res_json = await res.json();
      setMessage(res_json.message);
      setPopup(true);
    } catch (e) {}
  };

  const choreoChange = (e) => {
    setChoreo((prev) => !prev);
    setCheckboxChoreo((prev) => {
      if (prev === "") {
        setCheckboxChoreo(RegFormCSS.checked);
      } else {
        setCheckboxChoreo("");
      }
    });
  };
  const hosChange = (e) => {
    setHeadOfSociety((prev) => !prev);
    setCheckboxHos((prev) => {
      if (prev === "") {
        setCheckboxHos(RegFormCSS.checked);
      } else {
        setCheckboxHos("");
      }
    });
  };
  function handleClose() {
    setPopup(false);
    props.resetPage();
  }

  const { ref, inView, entry } = useInView(OPTIONS);
  const [promptClass, setPromptClass] = useState(RegFormCSS.hidePrompt);

  useEffect(() => {
    scrollPromptToggle();
  }, [inView]);

  function scrollPromptToggle() {
    if (inView) {
      setPromptClass(RegFormCSS.hidePrompt);
    } else {
      setPromptClass(RegFormCSS.showPrompt);
    }
  }

  return (
    <div className={RegFormCSS.regFormBox} id="regFormBox">
      <Alert message={message} show={popup} handleClose={handleClose} />
      <div className={RegFormCSS.heading}>REGISTRATION</div>
      <form
        className={RegFormCSS.regForm}
        onSubmit={handleSubmit}
        method="post"
        id="reg-form"
      >
        <div className={RegFormCSS.regFormFields}>
          <div className={RegFormCSS.leftSide}>
            <div className={RegFormCSS.textInputContainer}>
              <TextInputControl
                label={"Name *"}
                type={"text"}
                setValue={setName}
                info={"name"}
              />
              <TextInputControl
                label={"Email Id *"}
                type={"email"}
                setValue={setEmail}
                info={"email"}
              />
              <TextInputControl
                label={"Phone No. *"}
                type={"text"}
                setValue={setPhone}
                info={"phone"}
                pattern={"[1-9]{1}[0-9]{9}"}
              />
            </div>

            <div className={RegFormCSS.genderInputContainer}>
              <GenderInputControl setValue={setGender} />
            </div>
            <div className={RegFormCSS.checkboxKePapa}>
              <div
                className={RegFormCSS.checkboxContainer}
                onClick={choreoChange}
              >
                <div
                  className={`${RegFormCSS.checkbox} ${checkboxChoreo}`}
                ></div>
                <label>Are you a Choreographer/Mentor? (Optional)</label>
              </div>
              <div className={RegFormCSS.checkboxContainer} onClick={hosChange}>
                <div className={`${RegFormCSS.checkbox} ${checkboxHos}`}></div>

                <label>Are you the Head of a Society? (Optional)</label>
              </div>
            </div>
          </div>

          <div className={RegFormCSS.rightSide}>
            <div className={RegFormCSS.sportsContainer}>
              <EventsControl
                setValue={setEvents}
                label={"Events *"}
                listData={eventsList}
                info={"events"}
                setEventsIds={setEventsIds}
              />
            </div>

            <DropdownControl
              setValue={setCollege}
              label={"College *"}
              listData={collegeList}
              pattern=""
              info={"college"}
            />
            <DropdownControl
              setValue={setYear}
              label={"Year Of Study *"}
              listData={yearList}
              info={"year"}
            />
            <TextInputControl
              label={"City *"}
              type={"text"}
              info={"name"}
              setValue={setLocation}
            />
          </div>
        </div>

        <div className={RegFormCSS.regFormBtns} ref={ref}>
          <div className={RegFormCSS.promptCaret}>
            <i className={`fa-solid fa-caret-down ${promptClass}`}></i>
          </div>
          <Button type="submit" form="reg-form" btn_title="Register Now" />
          <div className={RegFormCSS.compulsoryText}>
            All fields marked * are compulsory.
          </div>
          <a
            href={InstrucBook}
            rel="noreferrer"
            target="_blank"
            className={RegFormCSS.Instruc}
          >
            How to Register?
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegForm;
