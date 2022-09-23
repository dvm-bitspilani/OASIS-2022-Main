import RegistrationCSS from "../styles/Registration.module.css";
import RegForm from "../components/RegForm";
import RegWelcome from "../components/RegWelcome";

import React from "react";

const Registration = () => {
  return (
    <div className={RegistrationCSS.regPage}>
      <div className={RegistrationCSS.formContainer}>
        <RegWelcome />
        <RegForm />
      </div>
    </div>
  );
};

export default Registration;
