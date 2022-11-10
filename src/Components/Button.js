import React from "react";
import ButtonCSS from "../styles/Button.module.css";

const Button = (props) => {
  return (
    <div className={ButtonCSS.btnWrapper}>
      <button
        type={props.type}
        form={props.form}
        className={ButtonCSS.btn}
        onClick={props.onClick_fun}
      >
        {props.btn_title}
      </button>
    </div>
  );
};

export default Button;
