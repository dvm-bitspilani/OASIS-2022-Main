import React from "react";
import RegFormCSS from "../styles/RegForm.module.css";
import { useState } from "react";

const RegForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    college: "",
    location: "",
  });

  const handleInputClick = (e) => {
    const label = e.target.parentNode.querySelector("label");
    const input = e.target.parentNode.querySelector("input");
  
    if (input.hasAttribute("activeInput")) {
      input.blur();
    } else {
      input.focus();
    }
    if (input.value.trim() === "") {
      label.toggleAttribute("shiftUp");
      input.toggleAttribute("activeInput")
    }
    else{
      input.focus()
    }
    // console.log(input,label)
  };

  const nameChangeHandler=(e)=>{
    setUserInfo((prevInfo)=>({...prevInfo,name:e.target.value}))
  }
  const emailChangeHandler=(e)=>{
    setUserInfo((prevInfo)=>({...prevInfo,email:e.target.value}))
  }
  const phoneChangeHandler=(e)=>{
    setUserInfo((prevInfo)=>({...prevInfo,phone:e.target.value}))
  }
  const genderChangeHandler=(e)=>{
    setUserInfo((prevInfo)=>{
      if(e.target.checked){
        
        return({...prevInfo,gender:e.target.dataset.gender})
      }
    })
  }

  return (
    <div className={RegFormCSS.regFormBox}>
      <form className={RegFormCSS.regForm}>
        <div
          className={RegFormCSS.formControl}
          onClick={handleInputClick}
        >
          <label>Name</label>
          <input type="text" className={RegFormCSS.textInput} onChange={nameChangeHandler} value={userInfo.name}/>
        </div>
        <div className={RegFormCSS.formControl} onClick={handleInputClick}>
          <label>Email ID</label>
          <input type="text" className={RegFormCSS.textInput} onChange={emailChangeHandler} value={userInfo.email}/>
        </div>
        <div
          className={`${RegFormCSS.formControl} ${RegFormCSS.phoneControl}`}
          onClick={handleInputClick}
        >
          <label>Phone No.</label>
          <input type="text" className={RegFormCSS.textInput} onChange={phoneChangeHandler} value={userInfo.phone}/>
        </div>
        <div
          className={`${RegFormCSS.formControl} ${RegFormCSS.genderControl} `}
        >
          <label>Gender</label>
          <div className={RegFormCSS.genderOptions}>
            <div className={RegFormCSS.male}>
              <input type="radio" data-gender="male" className={RegFormCSS.genderInput} name="gender" onChange={genderChangeHandler}/>
              <span>Male</span>
            </div>
            <div className={RegFormCSS.female}>
              <input type="radio" data-gender="female" className={RegFormCSS.genderInput} name="gender" onChange={genderChangeHandler}/>
              <span>Female</span>
            </div>
            <div className={RegFormCSS.others}>
              <input type="radio" data-gender="others" className={RegFormCSS.genderInput} name="gender" onChange={genderChangeHandler}/>
              <span>Others</span>
            </div>
          </div>
        </div>


        <div
          className={`${RegFormCSS.formControl} ${RegFormCSS.collegeControl}`}
          onClick={handleInputClick}
        >
          <label>College</label>
          <input className={RegFormCSS.dropDownInput} />
        </div>


        <div
          className={`${RegFormCSS.formControl} ${RegFormCSS.locationControl}`}
          onClick={handleInputClick}
        >
          <label>City/Town</label>
          <input className={RegFormCSS.dropDownInput} />
        </div>



        <button type="submit" className={RegFormCSS.submitForm}>Register Now</button>
      </form>
    </div>
  );
};

export default RegForm;
