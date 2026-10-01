import "../styles/CarouselVendor.css";
import { useState } from "react";
import ReactSlick from "react-slick";
// react-slick exposes a nested default when consumed through native ESM.
const Slider = ReactSlick.default ?? ReactSlick;
import VideoCSS from "../styles/Video.module.css";
import rightArrow from "../Assets/arrowRight.webp";
import leftArrow from "../Assets/arrowLeft.webp";
const videos = [
  { id: "53_VKUrM5HY", text: "50 Years of Oasis" },
  { id: "u-Z00aGn5ro", text: "Oasis'22: Theme Reveal" },
];
function Video({ video }) {
  const [playing, setPlaying] = useState(false);
  return <div className="card"><div className="container">
    {playing ? <iframe src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`} title={video.text} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <button className="video-play" onClick={() => setPlaying(true)} aria-label={`Play ${video.text}`}>▶<span>Play video</span></button>}
  </div><div className="text">{video.text}</div></div>;
}
export default function Carousel() {
  const NextArrow = ({ onClick }) => <button type="button" className="arrow next" aria-label="Next video" onClick={onClick}><img src={rightArrow} alt="" /></button>;
  const PrevArrow = ({ onClick }) => <button type="button" className="arrow prev" aria-label="Previous video" onClick={onClick}><img src={leftArrow} alt="" /></button>;
  return <div className="Carousel"><div className={VideoCSS.title}><h2 className={VideoCSS.heading}>VIDEOS</h2></div>
    <Slider infinite lazyLoad="ondemand" speed={300} slidesToShow={2} centerMode centerPadding="0" nextArrow={<NextArrow />} prevArrow={<PrevArrow />} responsive={[{ breakpoint: 800, settings: { slidesToShow: 1 } }]}>
      {[...videos, ...videos].map((video, index) => <Video key={index} video={video} />)}
    </Slider>
  </div>;
}
