import React from "react";
import Lander from "../components/Lander";
import Registration from "./Registration";
import { useState } from "react";
import Contact from "../components/Contact";

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
      <Contact />
    </main>
  );
}
