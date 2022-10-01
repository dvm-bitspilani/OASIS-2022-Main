import React, { useEffect, useState } from "react";
import GicCSS from "../styles/Gic.module.css";

const GenderInputControl = (props) => {
  const [selected, setSelected] = useState("m");

  useEffect(() => {
    props.setValue(selected);
    console.log("set");
  }, [selected]);

  return (
    <div className={GicCSS.formControl}>
      <div className={GicCSS.genderLabel}>Gender</div>
      <div className={GicCSS.genderOptions}>
        <div
          className={GicCSS.genderContent}
          onClick={() => {
            setSelected("m");
          }}
        >
          <span
            className={`${GicCSS.genderIcon} ${
              selected === "m" ? GicCSS.selected : null
            }`}
          ></span>
          <span>Male</span>
        </div>
        <div
          className={GicCSS.genderContent}
          onClick={() => {
            setSelected("f");
          }}
        >
          <span
            className={`${GicCSS.genderIcon} ${
              selected === "f" ? GicCSS.selected : null
            }`}
          ></span>
          <span>Female</span>
        </div>
        <div
          className={GicCSS.genderContent}
          onClick={() => {
            setSelected("o");
          }}
        >
          <span
            className={`${GicCSS.genderIcon} ${
              selected === "o" ? GicCSS.selected : null
            }`}
          >
            {" "}
          </span>
          <span>Others</span>
        </div>
      </div>
    </div>
  );
};

export default GenderInputControl;
