import React, { useEffect, useRef } from "react";
import RegFormCSS from "../styles/RegForm.module.css";
import { useState } from "react";
import TextInputControl from './TextInputControl'
import GenderInputControl from './GenderInputControl'
import DropdownControl from "./DropdownControl";
import EventsControl  from "./EventsControl";




const RegForm = () => {


const BOSM_END_POINT = "https://www.bitsbosm.org/2022/registrations";
const OASIS_END_POINT = "https://bits-oasis.org/2022/main/registrations";

let yearList=[{name:'1'},{name:'2'},{name:'3'},{name:'4'},{name:'5'}];



  let availColleges=[];
  let availEvents=[];


  const [name,setName]=useState('')
  const [email_id,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [gender,setGender]=useState('')
  const [college_id,setCollege]=useState(null)
  const [location,setLocation]=useState('')
  const [head_of_society,setHeadOfSociety]=useState('')
  const [choreographer,setChoreo]=useState('')
  const [year_of_study,setYear]=useState('')
  const [events_ids,setEventsIds]=useState([])
  const [events,setEvents]=useState([])


const [collegeList,setCollegeList]=useState([])
  const [eventsList,setEventsList]=useState([{name:'Dance',id:'12'},{name:'Music',id:'32'},{name:'Astro',id:'3'},{name:'Coding',id:'2'}])

  const [eventsListCopy,setEventsListCopy]=useState([])
  const [unselectedEventsList,setUnselectedEventsList]=useState([])
  const unselectedEventsListRef=useRef([])

  const data={
    name:name,
    email_id:email_id,
    phone:phone,
    gender:gender,
    college_id:college_id,
    city:location,
    head_of_society:head_of_society,
    choreographer:choreographer,
    year_of_study:year_of_study,
    events_ids:events_ids,


  }

 


  const getElems = async () => {
    try{
      let collegeRes = await fetch(`${BOSM_END_POINT}/get_colleges`,{method:"GET"});
      let eventsRes = await fetch(`${OASIS_END_POINT}/events_details`,{method:"GET"});

      let collegeListJson= await collegeRes.json()
      availColleges = collegeListJson.data;

      let eventsListJson = await eventsRes.json()
      // availEvents=eventsListJson.data
      // console.log(eventsListJson.data)
      // collegeList=[...availColleges]
      setCollegeList([...availColleges])
      // setEventsList([...availEvents])

      // setDynamicEventsList([...availEvents])



      // console.log(collegeList)
    }
    catch(e){
      alert("Failure in getting Data")
      // console.log(e)
    }
  }

  
  useEffect(()=>{
     getElems()
  },[])

  useEffect(()=>{
   
  },[eventsList])
  

  

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(events_ids.length===0){
      alert('fill in atleast one event')
    }
    const data={
      name:name,
      email_id:email_id,
      phone:phone,
      gender:gender,
      college_id:college_id,
      city:location,
      head_of_society:head_of_society,
      choreographer:choreographer,
      year_of_study:year_of_study,
      events_ids:events_ids,


    }
    console.log(data)
  }

  const handleEventCross=(e)=>{
    //  console.log(e.target)
     if(e.target.tagName.toLowerCase()==='i'){
      // console.log('i')
      let item=e.target.parentNode.parentNode.textContent
      // console.log(item)
     }
     if(e.target.tagName.toLowerCase()==='div'){
      console.log('div')
     }
  }
  // console.log(collegeList)
 
  
return (
    <div className={RegFormCSS.regFormBox}>
      <form className={RegFormCSS.regForm} onSubmit={handleSubmit}>
        <div className={RegFormCSS.textInputContainer}>
          <TextInputControl  label={'Name'} type={'text'}  setValue={setName} info={'name'} />
          <TextInputControl label={'Email Id'} type={'email'} setValue={setEmail} info={'email'} />
          <TextInputControl label={'Phone No.'} type={'text'} setValue={setPhone} info={'phone'} pattern={'[1-9]{1}[0-9]{9}'}/>
        </div>
        <div className={RegFormCSS.genderInputContainer} >
          <GenderInputControl setValue={setGender}/>
        </div>


        <div className={RegFormCSS.sportsContainer}>

          <EventsControl setValue={setEvents} label={'Events'} listData={eventsList} info={'events'} setUnselectedEventsList={setUnselectedEventsList} setEventsIds={setEventsIds}/>
         
        </div>
        
        <DropdownControl setValue={setCollege} label={'College'} listData={collegeList} pattern='' info={'college'}/>
        <DropdownControl setValue={setYear} label={'Year Of Study'} listData={yearList} info={'year'}/>
        <TextInputControl label={'Head Of Society'} type={'text'} setValue={setHeadOfSociety} />
        <TextInputControl label={'Choreographer'} type={'text'} setValue={setChoreo} />
        
        <TextInputControl label={'City'} type={'text'}  info={'name'} setValue={setLocation}/>

        

        
        <button type="submit" className={RegFormCSS.submitForm}>Register</button>
        <div className={RegFormCSS.bottomPadding}></div>
      </form>
    </div>
  );
};

export default RegForm;
