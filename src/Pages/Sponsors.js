import React from "react";
import SponsCard from "../Components/SponsCard";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import SponzCSS from "../styles/Sponz.module.css";
import {sponsors} from "../SponsorList"

function Sponsors() {
  const cards = sponsors.map(sponsor =>{
    return <SponsCard name={sponsor.name} title={sponsor.title} img={sponsor.Logo}/>
  })
  const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#EBB935",
    lag: 0,
  };

  return (
    <div className={SponzCSS.container}>
    <div>
      <div style={{ zIndex: 1000 }}>
        <MouseTrail {...trailProps} />
      </div>
      <div className={SponzCSS.title}>SPONSORS</div>
      {cards}
    </div>
  );
}

export default Sponsors;
