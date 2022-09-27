import React, { useEffect, useState } from 'react'
import GicCSS from '../styles/Gic.module.css'

const GenderInputControl = (props) => {

  const [selected,setSelected]=useState('male')

  useEffect(()=>{
    props.setValue(selected)
    console.log('set')

  },[selected])

  return (
    <div className={GicCSS.formControl}>
        <div className={GicCSS.genderLabel}>Gender</div>
        <div className={GicCSS.genderOptions}>
          <div className={GicCSS.genderContent} onClick={()=>{setSelected('male')}}>
             <span className={`${GicCSS.genderIcon} ${selected==='male' ? GicCSS.selected : null}`}></span>
              <span >Male</span>
          </div>
          <div className={GicCSS.genderContent} onClick={()=>{setSelected('female')}}>
            <span className={`${GicCSS.genderIcon} ${selected==='female' ? GicCSS.selected : null}`}></span>
              <span >Female</span>
          </div>
          <div className={GicCSS.genderContent} onClick={()=>{setSelected('others')}}>
            <span className={`${GicCSS.genderIcon} ${selected==='others' ? GicCSS.selected : null}`}> </span>
              <span >Others</span>
          </div>
        </div>
    </div>
  )
}

export default GenderInputControl