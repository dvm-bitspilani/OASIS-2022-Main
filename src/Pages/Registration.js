import RegistrationCSS from "../styles/Registration.module.css";
import RegForm from "../components/RegForm";
import RegWelcome from "../components/RegWelcome";
import React, { useState } from "react";

const Registration = (props) => {
  const [regClassName, setRegClassName] = useState(
    `${RegistrationCSS.regPage}`
  );

  const backdropClickHandler = () => {
    setRegClassName(
      (prevClass) => `${prevClass} ${RegistrationCSS.removePage}`
    );

    setTimeout(() => {
      props.changeRegState();
      setRegClassName(RegistrationCSS.regPage);
    }, 300);
  };

  const innerClickHandler = (e) => {
    e.stopPropagation();
  };

  let regPageContent = (
    <div className={regClassName} onClick={backdropClickHandler}>
      <div
        className={RegistrationCSS.formContainer}
        onClick={innerClickHandler}
      >
        <svg
          onClick={backdropClickHandler}
          className={RegistrationCSS.close}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.75 2.90343C31.75 2.38591 31.5485 1.89916 31.1824 1.53356C30.4501 0.801315 29.1749 0.801315 28.4426 1.53356L16.25 13.7262L4.05737 1.53356C3.32513 0.801315 2.04986 0.801315 1.31762 1.53356C0.95154 1.89916 0.75 2.38592 0.75 2.90343C0.75 3.42089 0.95154 3.90763 1.31763 4.27329L13.5103 16.4659L1.31763 28.6586C0.95154 29.0242 0.75 29.5109 0.75 30.0284C0.75 30.5459 0.95154 31.0326 1.31763 31.3983C2.04987 32.1305 3.32514 32.1305 4.05738 31.3983L16.25 19.2057L28.4426 31.3983C28.8088 31.7644 29.295 31.9659 29.8125 31.9659C30.33 31.9659 30.8163 31.7644 31.1824 31.3983C31.5485 31.0326 31.75 30.5459 31.75 30.0284C31.75 29.5109 31.5485 29.0242 31.1824 28.6586L18.9897 16.4659L31.1824 4.2733C31.5485 3.90764 31.75 3.42089 31.75 2.90343Z"
            fill="white"
          />
        </svg>

        <RegWelcome />
        <RegForm />
      </div>
    </div>
  );

  return props.regState && regPageContent;
};

export default Registration;
