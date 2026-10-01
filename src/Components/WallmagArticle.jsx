import React, { useState } from "react";
import DOMPurify from "dompurify";
import quote from "../Assets/quote.svg";
import profilePlaceholder from "../Assets/profile-placeholder.svg";

export default function WallMagArticle(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className="c-item"
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      <div className="c-header">
        <div
          className="c-button"
          style={{ transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)" }}
          onClick={() => setOpen(!isOpen)}
        />
        <h3>{props.depName}</h3>
      </div>
      <div
        className="c-content"
        style={{
          display: isOpen ? "flex" : "none",
        }}
      >
        <div className="header">
          <img
            className="square-img"
            src={profilePlaceholder}
            alt="Historical profile photograph unavailable"
            loading="lazy"
          />
          <div>
            <h1>{props.coord}</h1>
            <p>{props.depName2}</p>
          </div>
        </div>
        <div className="main">
          <img className="quote" src={quote} />
          <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.article, { ALLOWED_TAGS: ["b", "strong", "i", "em", "br", "p", "ul", "ol", "li"], ALLOWED_ATTR: [] }) }} />
        </div>
      </div>
    </div>
  );
}
