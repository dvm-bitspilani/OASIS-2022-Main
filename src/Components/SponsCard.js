import React from "react";
import SponzCSS from "../styles/Sponz.module.css";

function SponsCard(props) {
  return (
    <div className={SponzCSS.card}>
      <div className={SponzCSS.cardTitle}>{props.title}</div>
      <div className={SponzCSS.brand}>
        <div className={SponzCSS.brandImage}>
          <img src={props.img} />
        </div>
        <div className={SponzCSS.brandName}>{props.name}</div>
      </div>
    </div>
  );
}

export default SponsCard;
