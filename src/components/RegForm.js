import React, { useRef } from "react";
import RegFormCSS from "../styles/RegForm.module.css";
import { useState } from "react";
import TextInputControl from './TextInputControl'
import GenderInputControl from './GenderInputControl'
import DropdownControl from "./DropdownControl";
import EventsControl  from "./EventsControl";

const RegForm = () => {
  // const [userInfo, setUserInfo] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   gender: "",
  //   college: "",
  //   location: "",
  // });

  const [name,setName]=useState('')
  const [email_id,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [gender,setGender]=useState('')
  const [college,setCollege]=useState('')
  const [location,setLocation]=useState('')
  const [headOfSociety,setHeadOfSociety]=useState('')
  const [choreographer,setChoreo]=useState('')
  const [year,setYear]=useState('')
  const [events,setEvents]=useState()

  const collegeList=[{name:'xkjgkjyz'},
                     {name:'jkgsdf'},
                     {name:'sdfgdf'},
                     {name:'sodcz'},
                     {name:'hdfytdggs'},
                     {name:'werqwqwe'}]
  const yearList=[{name:'1'},{name:'2'},{name:'3'},{name:'4'},{name:'5'}];
  const sportsList=[{name:'Atheltics(boys)'},
  {name:'Atheltics(boys)'},{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},{name:'Atheltics(boys)'},]

  

 
  
return (
    <div className={RegFormCSS.regFormBox}>
      <form className={RegFormCSS.regForm} onSubmit={(e)=>{}}>
        <div className={RegFormCSS.textInputContainer}>
          <TextInputControl  label={'Name'} type={'text'}  setValue={setName} info={'name'} />
          <TextInputControl label={'Email Id'} type={'email'} setValue={setEmail} info={'email'} />
          <TextInputControl label={'Phone No.'} type={'text'} setValue={setPhone} info={'phone'} pattern={'[1-9]{1}[0-9]{9}'}/>
        </div>
        <div className={RegFormCSS.genderInputContainer} >
          <GenderInputControl setValue={setGender}/>
        </div>
        <div className={RegFormCSS.sportsContainer}>

          <DropdownControl setValue={setEvents} label={'Sports'} listData={sportsList}/>
          <ul className={RegFormCSS.sportsListContainer}></ul>
        </div>
        
        <DropdownControl setValue={setCollege} label={'College'} listData={collegeList}/>
        <DropdownControl setValue={setYear} label={'Year Of Study'} listData={yearList} info={'sports'}/>
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
