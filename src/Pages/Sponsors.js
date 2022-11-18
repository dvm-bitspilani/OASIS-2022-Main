import React from "react";
import SponsCard from "../Components/SponsCard";
import SponzCSS from "../styles/Sponz.module.css";
import {sponsors} from "../SponsorList"

function Sponsors() {
  const cards = sponsors.map(sponsor =>{
    return <SponsCard name={sponsor.name} title={sponsor.title} img={sponsor.Logo}/>
  })
  return (
    <div className={SponzCSS.container}>
      <div className={SponzCSS.title}>SPONSORS</div>
      {cards}
    </div>
  );
}

export default Sponsors;
