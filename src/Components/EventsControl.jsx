import { useId, useState } from "react";
import CSS from "../styles/Ec.module.css";
export default function EventsControl(props) {
  const id = useId();
  const [active, setActive] = useState(false), [search, setSearch] = useState(""), [selected, setSelected] = useState([]);
  const available = props.listData.filter((item) => !selected.includes(item.id) && item.name.toLowerCase().includes(search.toLowerCase()));
  const update = (next) => { setSelected(next); props.setEventsIds(next); };
  const select = (item) => { update([...selected, item.id]); setSearch(""); };
  return <div className={CSS.formControl}>
    <div className={CSS.inputContainer}>
      <label htmlFor={id} className={`${CSS.label} ${active || selected.length ? CSS.shiftLabelUp : CSS.shiftLabelDown}`}>Events *</label>
      <input id={id} value={search} aria-label="Search demo events" role="combobox" aria-expanded={active} aria-controls={`${id}-list`} autoComplete="off" onFocus={() => setActive(true)} onBlur={() => setActive(false)} onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => { if (event.key === "Escape") setActive(false); if (event.key === "ArrowDown" || event.key === "Enter") { event.preventDefault(); if (available[0]) select(available[0]); } }} />
      <ul id={`${id}-list`} role="listbox" className={`${CSS.dropDown} ${active ? CSS.showList : CSS.hideList}`} style={{ "--dropDownHeight": "120px" }}>
        {available.map((item) => <li key={item.id} role="option" aria-selected="false" onMouseDown={(event) => { event.preventDefault(); select(item); }}>{item.name}</li>)}
      </ul>
    </div>
    <ul className={CSS.eventsContainer} aria-label="Selected demo events">
      {selected.map((eventId) => <li key={eventId}>{props.listData.find((item) => item.id === eventId)?.name}<button type="button" aria-label={`Remove ${props.listData.find((item) => item.id === eventId)?.name}`} onClick={() => update(selected.filter((id) => id !== eventId))}>×</button></li>)}
    </ul>
  </div>;
}
