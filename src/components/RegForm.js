import React, { useRef } from "react";
import RegFormCSS from "../styles/RegForm.module.css";
import { useState } from "react";
import TextInputControl from './TextInputControl'
import GenderInputControl from './GenderInputControl'
import DropdownControl from "./DropdownControl";

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

  const collegeList={}
  const yearList={}

  

 
  
return (
    <div className={RegFormCSS.regFormBox}>
      <form className={RegFormCSS.regForm} onSubmit={(e)=>{e.preventDefault()}}>
        <div className={RegFormCSS.textInputContainer}>
          <TextInputControl  label={'Name'} type={'text'}  setValue={setName} info={'name'}/>
          <TextInputControl label={'Email Id'} type={'email'} setValue={setEmail} info={'email'} />
          <TextInputControl label={'Phone No.'} type={'number'} setValue={setPhone} info={'phone'}/>
        </div>
        <div className={RegFormCSS.genderInputContainer} >
          <GenderInputControl setValue={setGender}/>
        </div>
        
        <DropdownControl setValue={setCollege} label={'College'} listData={collegeList}/>
        <DropdownControl setValue={setYear} label={'Year Of Study'} listData={yearList}/>
        <TextInputControl label={'Head Of Society'} type={'text'} setValue={setHeadOfSociety} />
        <TextInputControl label={'Choreographer'} type={'text'} setValue={setChoreo} />
        
        <TextInputControl label={'City'} type={'text'}  info={'name'} setValue={setLocation}/>

        

        
        <button type="submit" className={RegFormCSS.submitForm}>Register</button>
      </form>
    </div>
  );
};

export default RegForm;
