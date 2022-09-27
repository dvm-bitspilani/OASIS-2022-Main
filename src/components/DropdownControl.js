import React from 'react'
import DdcCSS from '../styles/Ddc.module.css'
import { useState,useRef,useEffect } from 'react'

const DropdownControl = () => {
  const [active,setActive]=useState(false)
  const [empty,setEmpty]=useState(true)
  const [listClass,setListClass]=useState('')
  const [labelClass,setLabelClass]=useState('')
  const isMounted = useRef(false)
  const inputRef = useRef()
  

  const handleControlClick=()=>{
    console.log('roll')
    if(!active){
      setListClass(DdcCSS.openList)
      setActive(true)
      setLabelClass(DdcCSS.shiftLabelUp)

      inputRef.focus()
    }
    
  }

  

  // useEffect(()=>{
  //   if(isMounted.current){
  //      isMounted.current=true
  //   }
  //   else{
        
       
       
  //     }},[active])

  return (
    <div className={DdcCSS.formControl} onClick={handleControlClick}>
      <span className={`${DdcCSS.collegeLabel} ${labelClass}`}>College</span>
      <span><i className="fa-solid fa-caret-down"></i></span>
      <input type='text' className={DdcCSS.collegeInput} onBlur={()=>{setListClass(DdcCSS.closeList); setActive(false);
      if(inputRef.current.value.trim()===''){setLabelClass()}}} ref={inputRef}/>
      <ul className={`${DdcCSS.collegeList} ${listClass}`}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
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
      
    </div>
  )
}

export default DropdownControl