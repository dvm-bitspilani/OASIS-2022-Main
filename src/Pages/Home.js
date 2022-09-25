import React from "react";
import Lander from "../components/Lander";
import Registration from "./Registration";
import { useState } from "react";

export default function Home() {

  const [regState,setRegState]=useState({open:false})

  const changeRegState=()=>{
    setRegState((prevState)=>({open:!prevState.open}))
  }


  return (
    <div>
      <Registration class={'RegistrationCSS.regPage'} regState={regState.open} changeRegState={changeRegState}/>
      <Lander changeRegState={changeRegState}/>
    </div>
  );
}
