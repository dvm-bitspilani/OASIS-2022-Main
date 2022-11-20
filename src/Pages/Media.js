import React from "react";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import MediaCard from "../Components/MediaCard";
import SponzCSS from "../styles/Sponz.module.css";
import { partners } from "../MediaPartners.js";
import { useNavigate } from "react-router-dom";

function Partners() {
  const navigate = useNavigate();
  const navigateBack = () => navigate("/");
  const cards = partners.map((partner) => {
    return (
      <MediaCard name={partner.Name} link={partner.Link} img={partner.Logo} />
    );
  });

  const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#EBB935",
    lag: 0,
  };
  return (
    <div className={SponzCSS.container}>
      <div className="backBtn">
        <svg
          onClick={navigateBack}
          version="1.1"
          id="Capa_1"
          viewBox="0 0 486.975 486.975"
          width="40"
          height="35"
        >
          <g>
            <path
              d="M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1
		l139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5
		S480.975,230.025,473.475,230.025z"
            />
          </g>
        </svg>
      </div>
      <div style={{ zIndex: 1000 }}>
        <MouseTrail {...trailProps} />
      </div>
      <div className={SponzCSS.title}>MEDIA PARTNERS</div>
      {cards}
    </div>
  );
}

export default Partners;
