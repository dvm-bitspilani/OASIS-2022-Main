import eventArtwork from "../Assets/Events/Event.webp";
import { validateRegistration } from "./validation.js";

// Representative examples, not recovered historical 2022 event records.
export const demoEvents = [
  { id: "demo-dance", name: "Dance Showcase", img: eventArtwork, desc: "Demo content: explore the restored event carousel and details. The original 2022 event records are unavailable.", guidelines: "Demo guidelines: this is a representative dance event. No registrations are accepted.", contact: "Portfolio demo — no event organisers are contacted." },
  { id: "demo-music", name: "Music Showcase", img: eventArtwork, desc: "Demo content: a representative musical performance for exploring the original frontend design.", guidelines: "Demo guidelines: select this event in the sample registration form to preview validation.", contact: "Portfolio demo — no event organisers are contacted." },
  { id: "demo-theatre", name: "Theatre Showcase", img: eventArtwork, desc: "Demo content: a representative theatre event, provided to keep the archived interface interactive.", guidelines: "Demo guidelines: the confirmation stays in memory and disappears when you close or refresh the page.", contact: "Portfolio demo — no event organisers are contacted." },
  { id: "demo-arts", name: "Creative Arts", img: eventArtwork, desc: "Demo content: a representative creative arts event. This is not an active festival listing.", guidelines: "Demo guidelines: use fictional details only. No information is submitted or saved.", contact: "Portfolio demo — no event organisers are contacted." },
];
export const demoColleges = [
  { id: "demo-arts", name: "Demo Arts College" },
  { id: "demo-tech", name: "Demo Technical Institute" },
  { id: "demo-university", name: "Demo University" },
];
export function submitDemoRegistration(data) {
  const errors = validateRegistration(data, demoEvents, demoColleges);
  if (errors.length) return { ok: false, message: errors.join(" ") };
  return { ok: true, message: `Demo complete: ${data.events.length} event${data.events.length === 1 ? "" : "s"} selected. Nothing was submitted or saved. This is not a festival registration.` };
}
