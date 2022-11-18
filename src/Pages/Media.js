import React from "react";
import MediaCard from "../Components/MediaCard";
import SponzCSS from "../styles/Sponz.module.css";
import {partners} from "../MediaPartners.js"

function Partners() {
  const cards = partners.map(partner =>{
    return <MediaCard name={partner.Name} link={partner.Link} img={partner.Logo}/>
  })
  return (
    <div className={SponzCSS.container}>
      <div className={SponzCSS.title}>MEDIA PARTNERS</div>
      {cards}
    </div>
  );
}

export default Partners;
