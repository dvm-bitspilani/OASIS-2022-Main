import React from 'react'
import CloudsCSS from '../styles/Clouds.module.css'
import cloudR from '../Assets/clouds-r.png'
import cloudL from '../Assets/clouds-l.png'

export default function Clouds() {
  return (
    <div className={CloudsCSS.cloudsWrapper}>
        <img className={`${CloudsCSS.cloudR} ${CloudsCSS.cloud}`} src={cloudR} alt="" />
        <img className={`${CloudsCSS.cloudL} ${CloudsCSS.cloud}`} src={cloudL} alt="" />
    </div>
  )
}
