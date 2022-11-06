import React from "react";
import PopupCSS from "../styles/Popup.module.css";

function Alert(props) {
  let message = props.message;
  let show = props.show;
  return show ? (
    <div className={PopupCSS.popup}>
      <div className={PopupCSS.exit}>
        <i onClick={props.handleClose} class="fa-solid fa-xmark"></i>
      </div>
      <div className={PopupCSS.message}>{message}</div>
    </div>
  ) : (
    ""
  );
}

export default Alert;
