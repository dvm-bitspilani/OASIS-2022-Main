import RegistrationCSS from "../styles/Registration.module.css";
import RegForm from "../components/RegForm";
import RegWelcome from "../components/RegWelcome";

import React, { useEffect, useState } from "react";

const Registration = (props) => {

  // useEffect(()=>{},[regPageContent])
  const [regClassName,setRegClassName]=useState(`${RegistrationCSS.regPage}`)


  const backdropClickHandler=()=>{

    
    setRegClassName((prevClass)=>`${prevClass} ${RegistrationCSS.removePage}`)

    setTimeout(()=>{
      props.changeRegState();
      setRegClassName(RegistrationCSS.regPage)
    },300)
    }

  const innerClickHandler=(e)=>{
   
    e.stopPropagation()
  }

  let regPageContent=(<div className={regClassName} onClick={backdropClickHandler}>
    <div className={RegistrationCSS.formContainer} onClick={innerClickHandler}>
      <RegWelcome />
      <RegForm />
    </div>
  </div>)

  if(props.regState){

    return regPageContent;
  }
  };

export default Registration;
