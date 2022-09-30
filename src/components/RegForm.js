import React, { useEffect, useRef } from "react";
import RegFormCSS from "../styles/RegForm.module.css";
import { useState } from "react";
import TextInputControl from "./TextInputControl";
import GenderInputControl from "./GenderInputControl";
import DropdownControl from "./DropdownControl";
import EventsControl from "./EventsControl";
import ReCAPTCHA from "react-google-recaptcha";

const RegForm = () => {
  const BOSM_END_POINT = "https://www.bitsbosm.org/2022/registrations";
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
  const [validate, setValidate] = useState(false);

  const recaptchaRef = useRef(null);

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
      availEvents = eventsListJson[0].events;
      // console.log([...availEvents]);

      // collegeList=[...availColleges]
      setEventsList([...availEvents]);
      setCollegeList([...availColleges]);

      // setDynamicEventsList([...availEvents])
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

    const captchaToken = recaptchaRef.current.executeAsync();

    try {
      const data = {
        captcha: captchaToken,
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

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      let res = await fetch(`${OASIS_END_POINT_POST}`, options);
      let res_json = await res.json();
      alert(res_json.message);
    } catch (e) {}
  };

  const handleEventCross = (e) => {
    //  console.log(e.target)
    if (e.target.tagName.toLowerCase() === "i") {
      // console.log('i')
      let item = e.target.parentNode.parentNode.textContent;
      // console.log(item)
    }
    if (e.target.tagName.toLowerCase() === "div") {
      // console.log('div')
    }
  };
  // console.log(collegeList)

  const choreoChange=(e)=>{
    if(e.target.checked){
      setChoreo(true)
    }
    else{
      setChoreo(false)
    }
  }
  const hosChange=(e)=>{
    if(e.target.checked){
      setHeadOfSociety(true)
    }
    else{
      setHeadOfSociety(false)
    }
  }

  return (
    <div className={RegFormCSS.regFormBox}>
      <form
        className={RegFormCSS.regForm}
        onSubmit={handleSubmit}
        method="post"
      >
        <div className={RegFormCSS.textInputContainer}>
          <TextInputControl
            label={"Name"}
            type={"text"}
            setValue={setName}
            info={"name"}
          />
          <TextInputControl
            label={"Email Id"}
            type={"email"}
            setValue={setEmail}
            info={"email"}
          />
          <TextInputControl
            label={"Phone No."}
            type={"text"}
            setValue={setPhone}
            info={"phone"}
            pattern={"[1-9]{1}[0-9]{9}"}
          />
        </div>
        <div className={RegFormCSS.genderInputContainer}>
          <GenderInputControl setValue={setGender} />
        </div>

        <div className={RegFormCSS.sportsContainer}>
          <EventsControl
            setValue={setEvents}
            label={"Events"}
            listData={eventsList}
            info={"events"}
            setEventsIds={setEventsIds}
          />
        </div>

        <DropdownControl
          setValue={setCollege}
          label={"College"}
          listData={collegeList}
          pattern=""
          info={"college"}
        />
        <DropdownControl
          setValue={setYear}
          label={"Year Of Study"}
          listData={yearList}
          info={"year"}
        />
        <TextInputControl
          label={"City"}
          type={"text"}
          info={"name"}
          setValue={setLocation}
        />
        <div className={RegFormCSS.checkboxContainer}>
          <input type="checkbox" onChange={choreoChange}/>
          <label>Are you the Choreographer?</label>
        </div>
        <div className={RegFormCSS.checkboxContainer}>
          <input type="checkbox" onChange={hosChange}/>

          <label>Are you the Head of Society?</label>
        </div>

        {/* <TextInputControl
          label={"Head Of Society"}
          type={"text"}
          setValue={setHeadOfSociety}
        />
        <TextInputControl
          label={"Choreographer"}
          type={"text"}
          setValue={setChoreo}
        /> */}

        <button type="submit" className={RegFormCSS.submitForm}>
          Register
        </button>

        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={`${process.env.REACT_APP_SITE_KEY}`}
        />
        <div className={RegFormCSS.bottomPadding}></div>
      </form>
    </div>
  );
};

export default RegForm;
