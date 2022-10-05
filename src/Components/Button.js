import React, { Component } from "react";
// import ButtonCSS from "../styles/Button.module.css";

const Button = (props) => {
  return (
    <div type={props.type} onClick={props.onClick_fun}>
      {props.btn_title}
    </div>
  );
};

export default Button;
