import React from "react";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import "../styles/Wallmag.css";
import WallMagArticle from "../Components/WallmagArticle";
import { useNavigate } from "react-router-dom";

export default function MyComponent() {
  const articles = require("../JSON/artcles.json");

  const navigate = useNavigate()
  const navigateBack = () => navigate('/');

  const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#EBB935",
    lag: 0,
  };

  return (
    <div className="root-wallmag">
      <div className="backBtn">
      <svg onClick={navigateBack}
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
      <div className="hpc-heading">
        <h1>WallMag </h1>
        <h3>OASIS 2022</h3>
      </div>
      <div className="c-section">
        {articles.map((article, idx) => {
          return (
            <WallMagArticle
              depName={article.depName}
              coord={article.coord}
              depName2={article.depName2}
              article={article.article}
              imgLink={article.imgLink}
            />
          );
        })}
      </div>
    </div>
  );
}