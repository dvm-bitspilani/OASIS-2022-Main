import React from 'react'
import CardCSS from "../styles/Card.module.css";
import dummy from "../Assets/dummyImage.png"
function VideoCard(props) {
  return (
    <div className={CardCSS.card}>
        <img src={dummy} className={CardCSS.image}/>
    </div>
  )
}

export default VideoCard