import React, { useEffect, useRef } from 'react'
import CardCSS from "../styles/Card.module.css";
import dummy from "../Assets/dummyImage.png"
function VideoCard(props) {
  const { idx, src, text, pos } = props;
  let card = useRef(null)

  // useEffect(() => {
  //   if (!active) {
  //     card.style.width = "20rem"
  //     card.style.height = "15rem"
  //   }
  // }, [])

  return (
    <div ref={el => card = el} className={CardCSS.card}>
      <div className={CardCSS.container}>
        {src}
      </div>
      <div className={CardCSS.text}>{text}</div>
    </div>
  )
}

export default VideoCard