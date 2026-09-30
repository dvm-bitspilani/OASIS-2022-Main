import { useId, useState } from "react";
import CSS from "../styles/Dropdown.module.css";
export default function DropdownControl(props) {
  const id = useId();
  const [active, setActive] = useState(false), [value, setValue] = useState("");
  const filtered = props.listData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
  const select = (item) => { setValue(item.name); props.setValue(props.info === "college" ? item.id : item.name); setActive(false); };
  return <div className={CSS.formControl}>
    <label htmlFor={id} className={`${CSS.collegeLabel} ${active || value ? CSS.shiftLabelUp : ""}`}>{props.label}</label>
    <input id={id} className={CSS.collegeInput} value={value} required autoComplete="off" role="combobox" aria-expanded={active} aria-controls={`${id}-list`} onFocus={() => setActive(true)} onBlur={() => setActive(false)} onChange={(event) => { setValue(event.target.value); props.setValue(null); setActive(true); }} onKeyDown={(event) => { if (event.key === "Escape") setActive(false); if (event.key === "ArrowDown" || (event.key === "Enter" && active)) { event.preventDefault(); if (filtered[0]) select(filtered[0]); } }} />
    <span className={CSS.caretDown} aria-hidden="true"><i className={`fa-solid fa-caret-down ${CSS.caretClass} ${active ? CSS.rotateUp : CSS.rotateDown}`} /></span>
    <ul id={`${id}-list`} role="listbox" className={`${CSS.collegeList} ${active ? CSS.openList : CSS.closeList}`} style={{ "--collegeDropdownHeight": "120px" }}>
      {filtered.map((item) => <li key={item.id ?? item.name} role="option" aria-selected={value === item.name} onMouseDown={(event) => { event.preventDefault(); select(item); }}>{item.name}</li>)}
    </ul>
  </div>;
}
