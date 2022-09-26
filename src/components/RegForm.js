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
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [gender,setGender]=useState('')

  

 
  
return (
    <div className={RegFormCSS.regFormBox}>
      <form className={RegFormCSS.regForm}>
        <div className={RegFormCSS.textInputContainer}>
          <TextInputControl  label={'Name'} type={'text'}  setValue={setName} info={'name'}/>
          <TextInputControl label={'Email Id'} type={'email'} setValue={setEmail} info={'email'} />
          <TextInputControl label={'Phone No.'} type={'number'} setValue={setPhone} info={'phone'}/>
        </div>
        <div className={RegFormCSS.genderInputContainer} >
          <GenderInputControl setValue={setGender}/>
        </div>
        <div className={RegFormCSS.dropdownInputContainer}>
        <TextInputControl  label={'College'} type={'text'}   info={'name'}/>
        <TextInputControl  label={'City/Town'} type={'text'}  info={'name'}/>

          {/* <DropdownControl/> */}
          <DropdownControl/>
        </div>

        
        <button type="submit" className={RegFormCSS.submitForm}>Register</button>
      </form>
    </div>
  );
};

export default RegForm;
