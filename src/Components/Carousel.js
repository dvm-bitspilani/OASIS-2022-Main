import React, { useState } from 'react'
import { initialState } from '../vidData'
import CaroCSS from "../styles/Carousel.module.css"
import VideoCard from './VideoCard';

function Carousel() {

    const [cards, setCards] = useState(initialState);

  return (
    <div className={CaroCSS.container}>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
    </div>
  )
}

export default Carousel