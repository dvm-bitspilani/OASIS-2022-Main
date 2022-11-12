import React from 'react'
import EclipseCSS from '../styles/Eclipse.module.css'
import wlbl from '../Assets/Registration/wavylinesBottomLeft.png'
import wlbr from '../Assets/Registration/wavylinesBottomRight.png'
import wltl from '../Assets/Registration/wavylinesTopLeft.png'
import EclipseHeading from '../Assets/Eclipse/eclipseHeading.png'
import codMobile from '../Assets/Eclipse/codmobile.png'
import valo from '../Assets/Eclipse/valo.png'
import cr from '../Assets/Eclipse/clashroyale.png'

import { useNavigate } from 'react-router-dom'

const Eclipse = () => {

  const navigate = useNavigate()
  const closeClickHandler = () => {
    navigate('/')
  }

  return (
    <div className={EclipseCSS.eclipseBackdrop}>
      <div className={EclipseCSS.eclipsePage}>
        <button className={EclipseCSS.closePage} onClick={closeClickHandler}>

          <i className='fa-solid fa-xmark fa-xl'></i>
        </button>
        <div className={EclipseCSS.heading}>
          <img src={EclipseHeading} ></img>

        </div>
        <div className={EclipseCSS.games}>

          <div className={EclipseCSS.container1}>
            <div>COD Mobile</div>
            <div className={EclipseCSS.imgContainer}><img src={codMobile}></img></div>
            <button className={EclipseCSS.registerBtn}>REGISTER</button>
          </div>
          <div className={EclipseCSS.container2}>
            <div>Valorant</div>
            <div className={EclipseCSS.imgContainer}><img src={valo}></img></div>
            <button className={EclipseCSS.registerBtn}>REGISTER</button>

          </div>
          <div className={EclipseCSS.container3}>
            <div>Clash Royale</div>
            <div className={EclipseCSS.imgContainer}><img src={cr}></img></div>
            <button className={EclipseCSS.registerBtn}>REGISTER</button>

          </div>
        </div>
        <img src={wlbl} className={EclipseCSS.wlbl}></img>
        <img src={wltl} className={EclipseCSS.wltl}></img>
        <img src={wlbr} className={EclipseCSS.wlbr}></img>
      </div>
    </div>
  )
}

export default Eclipse
