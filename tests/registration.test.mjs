import test from "node:test";
import assert from "node:assert/strict";
import { validateRegistration } from "../src/demo/validation.js";
const events = [{ id: "demo-dance" }];
const colleges = [{ id: "demo-arts" }];
const complete = { name: "Demo Visitor", email_id: "visitor@example.com", phone: "9876543210", year: "2", city: "Demo City", college_id: "demo-arts", events: ["demo-dance"] };
test("complete demo form passes without persisting or modifying input", () => {
  const before = structuredClone(complete);
  assert.deepEqual(validateRegistration(complete, events, colleges), []);
  assert.deepEqual(complete, before);
});
test("empty form provides all actionable validation messages", () => {
  assert.equal(validateRegistration({}, events, colleges).length, 7);
});
test("free-text college and unknown event IDs cannot become valid selections", () => {
  const errors = validateRegistration({ ...complete, college_id: "not-a-college", events: ["unknown"] }, events, colleges);
  assert.equal(errors.length, 2);
});
test("malformed phone, email and year are rejected", () => {
  assert.equal(validateRegistration({ ...complete, phone: "123", email_id: "missing-at", year: "6" }, events, colleges).length, 3);
});
