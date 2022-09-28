import React from 'react'
import DdcCSS from '../styles/Ddc.module.css'
import { useState,useRef,useEffect } from 'react'

const DropdownControl = (props) => {
  const [active,setActive]=useState(false)
  const [empty,setEmpty]=useState(true)
  const [listClass,setListClass]=useState('')
  const [labelClass,setLabelClass]=useState('')
  const [caretClass,setCaretClass]=useState(null)
  const isMounted = useRef(false)
  const inputRef = useRef()
  const [searchTerm,setSearchTerm]=useState('')

  // const fetchedData=props.listData
  

  const handleControlClick=()=>{
    console.log('roll')
    if(!active){
      setListClass(DdcCSS.openList)
      setActive(true)
      setLabelClass(DdcCSS.shiftLabelUp)
      setCaretClass(DdcCSS.rotateUp)

      inputRef.current.focus()
    }
 
    
    
  }

  const handleBlur=()=>{
    setTimeout(()=>{

      setListClass(DdcCSS.closeList);
       setActive(false);
       setCaretClass(DdcCSS.rotateDown);
        if(inputRef.current.value.trim()==='')
        {setLabelClass()}
    },200)
    }

  const handleCollegeSelection=(e)=>{
    inputRef.current.value=e.target.textContent
    props.setValue(e.target.textContent)
  }

  
  

  // useEffect(()=>{
  //   if(isMounted.current){
  //      isMounted.current=true
  //   }
  //   else{
        
       
       
  //     }},[active])

  return (
    <div className={DdcCSS.formControl} onClick={handleControlClick}>
      <span className={`${DdcCSS.collegeLabel} ${labelClass}`}>{props.label}</span>
      <span onClick={handleBlur}><i className={`fa-solid fa-caret-down caretDown ${caretClass}`}></i></span>
      <input type='text' className={DdcCSS.collegeInput} onBlur={handleBlur} ref={inputRef} onChange={(e)=>{props.setValue(e.target.value); setSearchTerm(e.target.value)}}/>
      <ul className={`${DdcCSS.collegeList} ${listClass}`} onClick={handleCollegeSelection}>
          
        {props.listData.filter((data)=>{
          if(searchTerm===''){
            return data
          }
          else if(data.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return data
          }
        }).map((data,index)=>(<li key={index}>{data.name}</li>))}
      </ul>
      
    </div>
  )
}

export default DropdownControl