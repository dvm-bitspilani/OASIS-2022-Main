import React from "react";
import Lander from "../Components/Lander";
import Registration from "./Registration";
import { useState } from "react";
import Contact from "../Components/Contact";
import Events from "../Components/Events";

export default function Home() {
  window.scrollTo(0, 0);
  const [regState, setRegState] = useState({ open: false });

  const changeRegState = () => {
    setRegState((prevState) => ({ open: !prevState.open }));
  };

  return (
    <main>
      <Registration
        class={"RegistrationCSS.regPage"}
        regState={regState.open}
        changeRegState={changeRegState}
      />
      <Lander changeRegState={changeRegState} />
      <Events />
      <Contact />
    </main>
  );
}
