import React from "react";
import SponzCSS from "../styles/Sponz.module.css";

function SponsCard(props) {
  return (
    <div className={SponzCSS.card}>
      <a className={SponzCSS.brand} target="_blank" rel="noopener noreferrer" href={props.link}>
        <div className={SponzCSS.brandImage}>
          <img loading="lazy" decoding="async" src={props.img} />
        </div>
        <div className={SponzCSS.brandName}>{props.name}</div>
      </a>
    </div>
  );
}

export default SponsCard;
