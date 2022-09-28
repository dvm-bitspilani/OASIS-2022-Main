import React, { useEffect, useRef } from "react";
import RegFormCSS from "../styles/RegForm.module.css";
import { useState } from "react";
import TextInputControl from './TextInputControl'
import GenderInputControl from './GenderInputControl'
import DropdownControl from "./DropdownControl";
import EventsControl  from "./EventsControl";




const RegForm = () => {
  const BOSM_END_POINT = "https://www.bitsbosm.org/2022/registrations";
const OASIS_END_POINT = "https://bits-oasis.org/registrations/";
// let collegeList=[]
let yearList=[{name:'1'},{name:'2'},{name:'3'},{name:'4'},{name:'5'}];
let eventsList=[{name:'Atheltics(boys)'},
{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},]

let availColleges=[];


  const [name,setName]=useState('')
  const [email_id,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [gender,setGender]=useState('')
  const [college,setCollege]=useState('')
  const [location,setLocation]=useState('')
  const [head_of_society,setHeadOfSociety]=useState('')
  const [choreographer,setChoreo]=useState('')
  const [year,setYear]=useState('')
  const [events,setEvents]=useState([])

  const [collegeList,setCollegeList]=useState([])


  const getElems = async () => {
    try{
      let collegeRes = await fetch(`${BOSM_END_POINT}/get_colleges`,{method:"GET"});
      // let eventsRes = await fetch(`${OASIS_END_POINT}/events_details`,{method:"GET"});

      let collegeListJson= await collegeRes.json()
      availColleges = collegeListJson.data;
      // collegeList=[...availColleges]
      setCollegeList([...availColleges])



      // console.log(collegeList)
    }
    catch(e){
      alert("Failure in getting Data")
    }
  }

  useEffect(()=>{
     getElems()
  },[])
  // const [userInfo, setUserInfo] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   gender: "",
  //   college: "",
  //   location: "",
  // });

  

  const handleSubmit=()=>{

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

          <DropdownControl setValue={setEvents} label={'Events'} listData={eventsList} info={'events'}/>
          <ul className={RegFormCSS.sportsListContainer}></ul>
        </div>
        
        <DropdownControl setValue={setCollege} label={'College'} listData={collegeList}/>
        <DropdownControl setValue={setYear} label={'Year Of Study'} listData={yearList}/>
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
