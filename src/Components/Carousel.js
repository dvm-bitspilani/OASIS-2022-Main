// import React, { useEffect, useRef, useState } from 'react'
// import { initialState } from '../vidData'
// import CaroCSS from "../styles/Carousel.module.css"
// import VideoCard from './VideoCard';

// function Carousel() {

//   const [cards, setCards] = useState(initialState);
//   let container = useRef(null)
  

//   function panLeft() {
//     container.style.transform = `translateX(40rem)`
//     let idx = 0;
//     cards.forEach(card => {
//       if (card.active) {
//         idx = card.idx;
//       }
//     });
//   }
//   function panRight() {
//     container.style.transform = `translateX(-52rem)`
//   }

//   return (
//     <div>
//       <div ref={(el) => (container = el)} className={CaroCSS.container}>
//         {slides}
//       </div>
//       <div className={CaroCSS.controls}>
//         <div onClick={panLeft}>&lt;</div>
//         <div onClick={panRight}>&gt;</div>
//       </div>
//     </div>
//   )
// }

// export default Carousel