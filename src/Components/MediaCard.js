import React from "react";
import SponzCSS from "../styles/Sponz.module.css";

function SponsCard(props) {
  return (
    <div className={SponzCSS.card}>
      <a className={SponzCSS.brand} target="_blank" href={props.link}>
        <div className={SponzCSS.brandImage}>
          <img src={props.img} />
        </div>
        <div className={SponzCSS.brandName}>{props.name}</div>
      </a>
    </div>
  );
}

export default SponsCard;
