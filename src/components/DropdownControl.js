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
  const listRef=useRef()
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

  if(!isMounted){
    isMounted.current=true
  }
  else{
    setInterval(()=>{
      if(inputRef.current===document.activeElement){
          handleControlClick()
          
      }
  },50)
  }
  

  const handleBlur=()=>{
    if(props.info==='sports'){
      inputRef.current.textContent=''
    }
    setTimeout(()=>{

      setListClass(DdcCSS.closeList);
       setActive(false);
       setCaretClass(DdcCSS.rotateDown);
        if(inputRef.current.value.trim()==='')
        {setLabelClass()}
    },250)
    }

  const handleCollegeSelection=(e)=>{
    inputRef.current.value=e.target.textContent
    props.setValue(e.target.textContent)
  }

  // const setListHeight=()=>{
  //   let length=listRef.current.childElementCount
  //   if(length<4){
  //     listRef.current.style.height=`${length*35}px`
  //   }
  //   else{
  //     listRef.current.style.height=`${4*35}px`
  //   }
  // }
  
  

  // useEffect(()=>{
  //   if(isMounted.current){
  //      isMounted.current=true
  //   }
  //   else{
        
       
       
  //     }},[active])

  return (
    <div className={DdcCSS.formControl} onClick={handleControlClick}>
      <span className={`${DdcCSS.collegeLabel} ${labelClass}`}>{props.label}</span>
      <span className={DdcCSS.caretDown}><i className={`fa-solid fa-caret-down  ${caretClass}`}
      onClick={handleControlClick}></i></span>
      <input type='text' className={DdcCSS.collegeInput} onBlur={handleBlur} ref={inputRef} onChange={(e)=>{props.setValue(e.target.value); setSearchTerm(e.target.value);}} required/>
      <ul className={`${DdcCSS.collegeList} ${listClass}`} onMouseDown={handleCollegeSelection} ref={listRef}>
          
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