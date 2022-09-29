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
  const [requiredInp,setRequired]=useState()

  const [eventList,setEventList]=useState()
 
  let pattern = new RegExp()
  let patterns = []

  
 

  useEffect(()=>{
    if(props.info!=='events'){
      setRequired(`required`)
    }
  },[props.info])
  useEffect(()=>{
    
    if(props.info==='college'){

      patterns=props.listData.map((data)=>data.name).join('|')
      
      inputRef.current.pattern=patterns
    }
    if(props.info==='year'){
      patterns=`${1}|${2}|${3}|${4}|${5}`
      inputRef.current.pattern=patterns
    }
    setEventList([...props.listData])
    

  },[props.listData])

  const handleControlClick=()=>{
    // console.log('roll')
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

    if(props.info==='events'){
      inputRef.current.value=''
      
    }
    setSearchTerm('')
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
    // console.log(props.listData)
    let idNo=e.target.getAttribute('idno')
    
    if(props.info==='events'){
      // let selectedEvent=[]
      
    //  props.listData
      
      e.target.remove()
   

    }
    if(props.info==='college'){
      // console.log(idNo)
      props.setValue(idNo)
    }
    if(props.info==='year'){
      props.setValue(e.target.textContent)
      // console.log(e.target)
    }
    
  }

  const handleInputChange=(e)=>{
    
  
       setSearchTerm(e.target.value);
  }


  return (
    <div className={DdcCSS.formControl} onClick={handleControlClick}>
      <span className={`${DdcCSS.collegeLabel} ${labelClass}`}>{props.label}</span>
      <span className={DdcCSS.caretDown}><i className={`fa-solid fa-caret-down  ${caretClass}`}
      onClick={handleControlClick}></i></span>
      <input type='text' className={DdcCSS.collegeInput} onBlur={handleBlur} ref={inputRef} onChange={handleInputChange} required={requiredInp}/>
      <ul className={`${DdcCSS.collegeList} ${listClass}`} onMouseDown={handleCollegeSelection} ref={listRef}>
          
        {props.listData.filter((data)=>{
          if(searchTerm===''){
            return data
          }
          else if(data.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return data
          }
        }).map((data)=>(<li key={data.id} idno={data.id}>{data.name}</li>))}
      </ul>
      
    </div>
  )
}

export default DropdownControl