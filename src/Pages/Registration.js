import RegistrationCSS from "../styles/Registration.module.css";
import RegForm from "../components/RegForm";
import RegWelcome from "../components/RegWelcome";

import React from "react";

const Registration = (props) => {
  const backdropClickHandler=()=>{
    props.changeRegState()
  }

  const innerClickHandler=(e)=>{
    e.stopPropagation()
  }

  if(props.regState){

    return (
    <div className={RegistrationCSS.regPage} onClick={backdropClickHandler}>
      <div className={RegistrationCSS.formContainer} onClick={innerClickHandler}>
        <RegWelcome />
        <RegForm />
      </div>
    </div>
    
    
    );
  }
  };

export default Registration;
