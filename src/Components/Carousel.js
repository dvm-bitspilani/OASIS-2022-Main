import "../App.css";
import { useEffect, useState } from "react";
import { initialState } from "../vidData";
import Slider from "react-slick";
import VideoCSS from "../styles/Video.module.css";
import rightArrow from "../Assets/arrowRight.png";
import CardCSS from "../styles/Card.module.css";
import leftArrow from "../Assets/arrowLeft.png";
import dummyImage from "../Assets/dummyImage.png";

export default function Carousel() {
  const small = window.matchMedia("(max-width:800px)");
  console.log(small);
  const [cards, setCards] = useState(initialState);
  const slides = cards.map((card, index) => {
    return (
      <div className="card">
        <div className="container">{card.src}</div>
        <div className="text">{card.text}</div>
      </div>
    );
  });

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={rightArrow} />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={leftArrow} />
      </div>
    );
  };

  let settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    // responsive: [{
    //     breakpoint: 800,
    //     settings: {
    //         slidesToShow: 1
    //     }

    // }]
    // beforeChange: (current, next) => setImageIndex([next, next+1])
  };
  if (small.matches) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="Carousel">
      <div className={VideoCSS.title}>
        <h2 className={VideoCSS.heading}>VIDEOS</h2>
      </div>

      <Slider {...settings}>{slides}</Slider>
    </div>
  );
}
