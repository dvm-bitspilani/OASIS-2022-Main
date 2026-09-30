import React from "react";
import PopupCSS from "../styles/Popup.module.css";

function Alert(props) {
  let message = props.message;
  let show = props.show;
  return show ? (
    <div className={PopupCSS.popup} role="alertdialog" aria-label="Demo registration result">
      <div className={PopupCSS.exit}>
        <button type="button" onClick={props.handleClose} aria-label="Close result"><i className="fa-solid fa-xmark" aria-hidden="true" /></button>
      </div>
      <div className={PopupCSS.message}>{message}</div>
    </div>
  ) : (
    ""
  );
}

export default Alert;
