import React from 'react'
import RegWelcomeCSS from '../styles/RegWelcome.module.css'
import flower1 from '../Assets/flower1.png'
import flower2 from '../Assets/flower2.png'
import flower3 from '../Assets/flower3.png'
import title from '../Assets/title_welcome.png'
import line from '../Assets/Line.png'

const RegWelcome = () => {
  return (
    <div className={RegWelcomeCSS.welcome}>
      <img src={flower1} alt="" className={RegWelcomeCSS.flower} id={RegWelcomeCSS.flower1} />
      <img src={flower2} alt="" className={RegWelcomeCSS.flower} id={RegWelcomeCSS.flower2} />
      <img src={flower3} alt="" className={RegWelcomeCSS.flower} id={RegWelcomeCSS.flower3} />
      <img src={line} alt="" className={RegWelcomeCSS.line} />

      <div className={RegWelcomeCSS.content}>
        <span className={RegWelcomeCSS.welc}>Welcome to the</span>
        <span className={RegWelcomeCSS.fifty}>
          50<span className={RegWelcomeCSS.th}>th</span>
        </span>

        <img src={title} alt="" className={RegWelcomeCSS.title} />
        <span className={RegWelcomeCSS.theme}>DEMESNE OF THE</span>
        <span className={RegWelcomeCSS.theme}>LOST GOLD</span>
      </div>
    </div>
  )
}

export default RegWelcome