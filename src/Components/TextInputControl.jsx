import { useId, useState } from "react";
import TicCSS from "../styles/Tic.module.css";
export default function TextInputControl(props) {
  const id = useId();
  const [active, setActive] = useState(false), [value, setValue] = useState("");
  return <div className={TicCSS.formControl}>
    <label htmlFor={id} className={`${active || value ? TicCSS.shiftLabelUp : TicCSS.shiftLabelDown} ${TicCSS.formLabel}`}>{props.label}</label>
    <input id={id} value={value} type={props.type} onFocus={() => setActive(true)} onBlur={() => setActive(false)} onChange={(event) => { setValue(event.target.value); props.setValue(event.target.value); }} pattern={props.pattern || undefined} required autoComplete="off" />
  </div>;
}
