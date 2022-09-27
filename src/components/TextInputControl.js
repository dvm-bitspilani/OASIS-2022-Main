import React, { useEffect, useState,useRef } from 'react'
import TicCSS from '../styles/Tic.module.css'

const TextInputControl = (props) => {

    const isMounted = useRef(false)
    const inputRef = useRef()
    

    const [active,setActive]=useState(false)
    const [labelClass,setLabelClass]=useState(`${TicCSS.shiftLabelDown}`)
    const [inputClass,setInputClass]=useState('')

   useEffect(()=>{
 if(isMounted.current){
    isMounted.current=true
 }
 else{
     
     if(labelClass===`${TicCSS.shiftLabelDown}` && active===true){
         setLabelClass(`${TicCSS.shiftLabelUp}`)
         inputRef.current.focus()
        }
       
        else if(inputRef.current.value.trim()===''){
            setLabelClass(`${TicCSS.shiftLabelDown}`)
            inputRef.current.blur()
        }
        
    }
    
   },[active])


    const handleControlClick =(e)=>{
        setActive((prev)=>!prev)
        // e.stopPropagation()
    }
    const handleBlur=()=>{
        // handleControlClick()
        setActive(false)


    }
    const inputChangeHandler=(e)=>{
        props.setValue(e.target.value)
    }


  return (
    <div className={TicCSS.formControl} onClick={handleControlClick} >
        <label className={`${labelClass} ${TicCSS.formLabel}`}>{props.label}</label>
        <input className={inputClass} ref={inputRef} type={props.type} onBlur={handleBlur} onChange={(e)=>{props.setValue(e.target.value)}} />
    </div>
  )
}

export default TextInputControl