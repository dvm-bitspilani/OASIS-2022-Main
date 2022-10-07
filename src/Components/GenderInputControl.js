import React, { useEffect, useState } from "react";
import GicCSS from "../styles/Gic.module.css";

const GenderInputControl = (props) => {
  const [selected, setSelected] = useState("M");

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
            setSelected("M");
          }}
        >
          <span
            className={`${GicCSS.genderIcon} ${
              selected === "M" ? GicCSS.selected : null
            }`}
          ></span>
          <span>Male</span>
        </div>
        <div
          className={GicCSS.genderContent}
          onClick={() => {
            setSelected("F");
          }}
        >
          <span
            className={`${GicCSS.genderIcon} ${
              selected === "F" ? GicCSS.selected : null
            }`}
          ></span>
          <span>Female</span>
        </div>
        <div
          className={GicCSS.genderContent}
          onClick={() => {
            setSelected("O");
          }}
        >
          <span
            className={`${GicCSS.genderIcon} ${
              selected === "O" ? GicCSS.selected : null
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
