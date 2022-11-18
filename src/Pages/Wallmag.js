import React from "react";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import "../styles/Wallmag.css";
import WallMagArticle from "../Components/WallmagArticle";

export default function MyComponent() {
  const articles = require("../JSON/artcles.json");

  const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#EBB935",
    lag: 0,
  };

  return (
    <div className="root-wallmag">
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