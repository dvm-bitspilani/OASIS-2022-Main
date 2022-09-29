import React, { useEffect, useRef, useState } from 'react'
import { act } from 'react-dom/test-utils'
import EcCSS from '../styles/Ec.module.css'



const EventsControl = (props) => {

  const inputRef=useRef()
  const isMounted=useRef(false)
  const [active,setActive]=useState(null)
  const [labelClass,setLabelClass]=useState(null)
  const [dropDownClass,setDropDownClass]=useState(null)
  const [searchTerm,setSearchTerm]=useState('')
  const [events_ids,setEventsIds]=useState([])

  const [eventsList,setEventList]=useState([])
  const [selectedEvents,setSelectedEvents]=useState([])

  function inputContainerClick(e){
    setActive(true)
    // console.log(e.target)
  }

  function inputBlur(e){
    setTimeout(()=>{

      setSearchTerm('')
    },200)
    
    setActive(false)
    // handleEventSelection()
  }

  function handleInputChange(e){
    setSearchTerm(e.target.value)
  }
  
  function handleEventSelection(e){
   let eventSelected=e.target
   let eventId=e.target.getAttribute('idno')

   let updatedList=eventsList.filter((event)=>{
      if(event.id!==eventId){
        // console.log('success')
        return event
      }
   })
   let selectedEventList=eventsList.filter((event)=>{
    if(event.id===eventId){
      return event
    }
   })
   setEventList([...updatedList])
   setSelectedEvents((prevList)=>[...prevList,...selectedEventList])
  //  console.log(selectedEventList)

   

  }

  function handleEventDeselect(e){
    let eventSelected=e.target.parentNode;
    let eventId=eventSelected.getAttribute('idno')

    let updatedList= selectedEvents.filter((event)=>{
      if(event.id!==eventId){
        return event;
      }
    })

    let removedEvent=selectedEvents.filter((event)=>{
      if(event.id===eventId){
        return event
      }
    })
    setSelectedEvents([...updatedList])
    setEventList((prevList)=>[...prevList,...removedEvent])
    // console.log(updatedList)
    // console.log(eventId)
  }
  // if(!isMounted){
  //   isMounted.current=true
  // }
  // else{
  //   setInterval(()=>{
  //     if(document.activeElement===inputRef.current){
  //       inputContainerClick()
  //     }
  //   },50)
  // }

  useEffect(()=>{
    let eventsIds=[]
    selectedEvents.forEach((event)=>{
      let id =event.id
      eventsIds.push(id)
    })
    props.setEventsIds([...eventsIds])
  },[selectedEvents])

  useEffect(()=>{
    if(active){
      setLabelClass(EcCSS.shiftLabelUp)
      setDropDownClass(EcCSS.showList)
      inputRef.current.focus()
    }
    else{
      inputRef.current.value=''
      setLabelClass(EcCSS.shiftLabelDown)
      setDropDownClass(EcCSS.hideList)
      inputRef.current.blur()
    }
  },[active])

  useEffect(()=>{
    setEventList([...props.listData])
    // let pattern=props.listData.map((data)=>data.name).join('|')
      
    // inputRef.current.pattern=pattern
  },[props.listData])


  return (
    <div className={EcCSS.formControl}>
         <div className={EcCSS.inputContainer} >

          <span className={`${EcCSS.label} ${labelClass}`}>Events</span>
          <span className={EcCSS.caretClass}>
            <i className={`fa-solid fa-caret-down fa-xl ${EcCSS.caretDown}`}></i>
          </span>
          <input type='text' ref={inputRef}  onChange={handleInputChange} onClick={inputContainerClick} onBlur={inputBlur}/>

          <ul className={`${EcCSS.dropDown} ${dropDownClass}`} >
          {eventsList.filter((data)=>{
          if(searchTerm===''){
            return data
          }
          else if(data.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return data
          }
        }).map((data)=>(<li key={data.id} idno={data.id} onMouseDown={handleEventSelection}>{data.name}</li>))}
          </ul>
         </div>

          <ul className={EcCSS.eventsContainer}>
            {selectedEvents.map((data)=>(<li key={data.id} idno={data.id}>{data.name}<i class="fa-solid fa-xmark" onClick={handleEventDeselect}></i></li>))}
          </ul>

{/* {dynamicEventsList.map((eventData)=>( <li>{eventData.name}<div className={RegFormCSS.eventCrossIcon} onClick={handleEventCross}><i class="fa-solid fa-xmark"></i></div></li>))} */}
{/* <li>lkj<div className={RegFormCSS.eventCrossIcon} onClick={handleEventCross}><i class="fa-solid fa-xmark"></i></div></li>
<li>lkj<div className={RegFormCSS.eventCrossIcon}><i class="fa-solid fa-xmark"></i></div></li>
<li>l;kj<div className={RegFormCSS.eventCrossIcon}><i class="fa-solid fa-xmark"></i></div></li> */}



    </div>
  )
}

export default EventsControl