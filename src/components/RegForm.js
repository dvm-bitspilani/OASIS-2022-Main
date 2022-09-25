import React, { useRef } from "react";
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
  const textLabelRef=useRef([])

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

 
  

  const handleCollegeClick=(e)=>{
    const label = e.target.parentNode.parentNode.querySelector('label')
    const collegeList = e.target.parentNode.parentNode.querySelector('ul')
    const icon =e.target

    if(icon.hasAttribute('rotateUp')){
      icon.removeAttribute('rotateUp')
      icon.setAttribute('rotateDown','')
    }
    else{
      icon.removeAttribute('rotateDown')
      icon.setAttribute('rotateUp','')
    }
   
    
    // collegeList.style.display='block'
    if(collegeList.style.display==='block'){
      collegeList.style.display=`none`
    }
    else{
      collegeList.style.display=`block`
    }
    
    console.log(collegeList)
    label.toggleAttribute('shiftUp')

    console.log(icon)


  }
  const handleLocationClick=(e)=>{
    const label = e.target.parentNode.parentNode.querySelector('label')
    const locationList = e.target.parentNode.parentNode.querySelector('ul')
    const icon =e.target

    if(icon.hasAttribute('rotateUp')){
      icon.removeAttribute('rotateUp')
      icon.setAttribute('rotateDown','')
    }
    else{
      icon.removeAttribute('rotateDown')
      icon.setAttribute('rotateUp','')
    }
   
    
    // collegeList.style.display='block'
    if(locationList.style.display==='block'){
      locationList.style.display=`none`
    }
    else{
      locationList.style.display=`block`
    }
    
    // console.log(collegeList)
    label.toggleAttribute('shiftUp')

    console.log(icon)


  }

  const handleBoxClick =()=>{

  }

  return (
    <div className={RegFormCSS.regFormBox} onClick={handleBoxClick}>
      <form className={RegFormCSS.regForm}>
        <div
          className={RegFormCSS.formControl}
          onClick={handleInputClick}
        >
          <label >Name</label>
          <input type="text" className={RegFormCSS.textInput} onChange={nameChangeHandler} value={userInfo.name}/>
        </div>
        <div className={RegFormCSS.formControl} onClick={handleInputClick}>
          <label >Email ID</label>
          <input type="text" className={RegFormCSS.textInput} onChange={emailChangeHandler} value={userInfo.email}/>
        </div>
        <div
          className={`${RegFormCSS.formControl} ${RegFormCSS.phoneControl}`}
          onClick={handleInputClick}
        >
          <label >Phone No.</label>
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
          className={`${RegFormCSS.formControl} ${RegFormCSS.collegeControl}` } 
        >
          <label className={RegFormCSS.collegeLabel}>College</label>
          <div><i className={`fa-solid fa-caret-down ${RegFormCSS.caretDown}`} onClick={handleCollegeClick} rotateDown=''
          ></i></div>
          <ul className={RegFormCSS.collegeList}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            
          </ul>

          {/* <input className={RegFormCSS.dropDownInput} /> */}
        </div>


        <div
          className={`${RegFormCSS.formControl} ${RegFormCSS.locationControl}`}
          
        >
          <label>City/Town</label>
          <div><i className={`fa-solid fa-caret-down ${RegFormCSS.caretDown}`} onClick={handleLocationClick}></i></div>
          <ul className={RegFormCSS.locationList}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            
          </ul>
          {/* <input className={RegFormCSS.dropDownInput} /> */}
        </div>



        <button type="submit" className={RegFormCSS.submitForm}>Register</button>
      </form>
    </div>
  );
};

export default RegForm;
