import React, { useState } from "react";
// import Carousel from "./Carousel";
import { initialState } from '../vidData'
import VideoCard from './VideoCard';
import VideoCSS from "../styles/Video.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Videos() {
  const [cards, setCards] = useState(initialState);

  const slides = cards.map(card => {
    return <VideoCard idx={card.idx} src={card.src} text={card.text} />
  })
  return (
    <div>
      <div className={VideoCSS.title}>
        <h2 className = {VideoCSS.heading}>VIDEOS</h2>
      </div>
      <Carousel autoPlay="true" showStatus={false} showArrows={false} infiniteLoop>
        {slides}
      </Carousel>
    </div>
  );
}

export default Videos;
