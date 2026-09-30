export function validateRegistration(data, events, colleges) {
  const errors = [];
  if (!data.name?.trim()) errors.push("Enter a name for the demo.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email_id ?? "")) errors.push("Enter a valid email address.");
  if (!/^[1-9][0-9]{9}$/.test(data.phone ?? "")) errors.push("Enter a 10-digit phone number.");
  if (!colleges.some((college) => college.id === data.college_id)) errors.push("Select a demo college from the list.");
  if (!/^[1-5]$/.test(data.year ?? "")) errors.push("Select a year of study from 1 to 5.");
  if (!data.city?.trim()) errors.push("Enter a city.");
  if (!Array.isArray(data.events) || !data.events.length || data.events.some((id) => !events.some((event) => event.id === id))) errors.push("Select at least one demo event from the list.");
  return errors;
}
