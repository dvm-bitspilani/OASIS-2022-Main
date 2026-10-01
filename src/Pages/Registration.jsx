import { useEffect, useRef } from "react";
import CSS from "../styles/RegistrationNotice.module.css";

export const REGISTRATION_CLOSED_MESSAGE = "Registration is closed for this edition";

export default function Registration({ onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialogRef.current.open) dialogRef.current.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  return <dialog ref={dialogRef} className={CSS.notice} aria-labelledby="registration-title" aria-describedby="registration-message" onClose={onClose}>
    <h2 id="registration-title">Registration</h2>
    <p id="registration-message">{REGISTRATION_CLOSED_MESSAGE}</p>
    <button type="button" autoFocus onClick={() => dialogRef.current.close()}>Close</button>
  </dialog>;
}
