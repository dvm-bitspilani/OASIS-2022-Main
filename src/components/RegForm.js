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
    let label = e.target.parentNode.querySelector("label");
    let input = e.target.parentNode.querySelector("input");


    // labelList.forEach((label)=>{
    //   if(label.hasAttribute('shiftUp'))
    //     label.removeAttribute('shiftUp')

    // })
    // console.log(labelList)
    if (input.hasAttribute("activeInput")) {
      input.blur();
    } else {
      input.focus();
    }
    if (input.value.trim() === "") {
      label.toggleAttribute("shiftUp");
      input.toggleAttribute("activeInput")
    }
    // console.log(input,label)
  };

  return (
    <div className={RegFormCSS.regFormBox}>
      <form className={RegFormCSS.regForm}>
        <div
          className={`${RegFormCSS.formControl} ${RegFormCSS.nameControl}`}
          onClick={handleInputClick}
        >
          <label>Name</label>
          <input type="text" className={RegFormCSS.textInput} />
        </div>
        <div className={RegFormCSS.formControl} onClick={handleInputClick}>
          <label>Email ID</label>
          <input type="text" className={RegFormCSS.textInput} />
        </div>
        <div
          className={`${RegFormCSS.formControl} ${RegFormCSS.phoneControl}`}
          onClick={handleInputClick}
        >
          <label>Phone No.</label>
          <input type="text" className={RegFormCSS.textInput} />
        </div>
        <div
          className={`${RegFormCSS.formControl} ${RegFormCSS.genderControl} `}
        >
          <label>Gender</label>
          <div className={RegFormCSS.genderOptions}>
            <div className={RegFormCSS.male}>
              <input type="radio" className={RegFormCSS.genderInput} />
              <span>Male</span>
            </div>
            <div className={RegFormCSS.female}>
              <input type="radio" className={RegFormCSS.genderInput} />
              <span>Female</span>
            </div>
            <div className={RegFormCSS.others}>
              <input type="radio" className={RegFormCSS.genderInput} />
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
      </form>
    </div>
  );
};

export default RegForm;
