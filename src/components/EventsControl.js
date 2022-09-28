import React from 'react'
import EcCSS from '../styles/Ec.module.css'

const EventsControl = () => {
  return (
    <div className={EcCSS.formControl}>
        <span className={EcCSS.label}></span>
        <span className={EcCSS.caretDown}></span>
        <input type='text'/>

    </div>
  )
}

export default EventsControl