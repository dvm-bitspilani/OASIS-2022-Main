import test, { after } from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import { gunzipSync } from "node:zlib";

const server = await createServer({ server: { middlewareMode: true, hmr: false, watch: null }, appType: "custom" });
after(() => server.close());

test("registration renders the accessible closed notice with no signup controls", async () => {
  const { default: Registration, REGISTRATION_CLOSED_MESSAGE } = await server.ssrLoadModule("/src/Pages/Registration.jsx");
  const markup = renderToStaticMarkup(createElement(Registration, { onClose() {} }));
  assert.equal(REGISTRATION_CLOSED_MESSAGE, "Registration is closed for this edition");
  assert.match(markup, /<dialog[^>]*aria-labelledby="registration-title"[^>]*aria-describedby="registration-message"/);
  assert.match(markup, /Registration is closed for this edition/);
  assert.match(markup, /<button[^>]*type="button"[^>]*>Close<\/button>/);
  assert.doesNotMatch(markup, /<(?:form|input|select)\b|demo|portfolio|archive/i);
});
test("hero and all three original Eclipse controls use the same closed notice", async () => {
  const home = await readFile(new URL("../src/Pages/Home.jsx", import.meta.url), "utf8");
  const eclipse = await readFile(new URL("../src/Pages/Eclipse.jsx", import.meta.url), "utf8");
  assert.match(home, /<Registration onClose=/);
  assert.match(eclipse, /<Registration onClose=/);
  assert.equal((eclipse.match(/btn_title=\{"REGISTER"\} onClick_fun=\{\(\) => setRegistrationOpen\(true\)\}/g) || []).length, 3);
  for (const title of ["COD Mobile", "Valorant", "Clash Royale"]) assert.ok(eclipse.includes(title));
});
test("route intent and navigation share the cached destination module", async () => {
  const { loadRoute, routeLoader } = await server.ssrLoadModule("/src/routeModules.js");
  assert.equal(loadRoute("/sponsors"), loadRoute("/sponsors/"));
  assert.equal(typeof (await routeLoader("/sponsors")()).Component, "function");
  for (const route of ["/developers", "/mediaPartners", "/eclipse", "/wallmag"]) {
    assert.equal(typeof (await routeLoader(route)()).Component, "function");
  }
});
test("missing backend records produce no invented event details", async () => {
  const { default: Events } = await server.ssrLoadModule("/src/Components/Events.jsx");
  const markup = renderToStaticMarkup(createElement(Events));
  assert.match(markup, /KERNEL EVENTS/);
  assert.match(markup, /Event details are unavailable for this edition/);
  assert.doesNotMatch(markup, /Showcase|Creative Arts|demo|guidelines|register/i);
  assert.ok((await readdir(new URL("../src/", import.meta.url))).every(name => name !== "demo"));
});
test("mobile navigation retains its original about text and map", async () => {
  const source = await readFile(new URL("../src/Components/Hamburger.jsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../src/styles/Hamburger.module.css", import.meta.url), "utf8");
  assert.match(source, /The 50th Oasis/);
  assert.match(source, /19th to 23rd November, 2022/);
  assert.match(source, /showMenu && <CampusMap/);
  assert.doesNotMatch(css, /\.(?:left|about|map)\s*\{[^}]*display:\s*none/);
});
test("campus map displays local artwork with an accessible map link and attribution", async () => {
  const { default: CampusMap } = await server.ssrLoadModule("/src/Components/CampusMap.jsx");
  const markup = renderToStaticMarkup(createElement(CampusMap));
  assert.match(markup, /aria-label="Open BITS Pilani on Google Maps"/);
  assert.match(markup, /query=28\.3585942%2C75\.5884245/);
  assert.match(markup, /alt="Map of BITS Pilani in Pilani, Rajasthan"/);
  assert.match(markup, /src="\/src\/Assets\/Map\/pilani-map\.svg"/);
  assert.match(markup, /srcSet="\/src\/Assets\/Map\/pilani-map-mobile\.svg"/);
  assert.match(markup, /href="https:\/\/www\.openstreetmap\.org\/copyright"/);
  assert.match(markup, /© OpenStreetMap contributors/);
  assert.doesNotMatch(markup, /<iframe|src="https?:\/\//);
});
test("the map marker is inside the real attributed university boundary", async () => {
  const data = JSON.parse(gunzipSync(await readFile(new URL("../docs/pilani-map-data.json.gz", import.meta.url))));
  const campus = data.features.find(feature => feature.id === "31121508");
  assert.equal(campus.tags.amenity, "university");
  assert.equal(campus.tags.name, "Birla Institute of Technology and Science - BITS");
  assert.equal(data.license, "https://opendatacommons.org/licenses/odbl/1-0/");
  const { default: CampusMap } = await server.ssrLoadModule("/src/Components/CampusMap.jsx");
  const markup = renderToStaticMarkup(createElement(CampusMap));
  const match = markup.match(/query=([\d.]+)%2C([\d.]+)/);
  const [x, y] = [Number(match[2]), Number(match[1])];
  let inside = false;
  const polygon = campus.coordinates;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i], [xj, yj] = polygon[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  assert.ok(inside, "The displayed map destination must be within the actual BITS Pilani campus");
  for (const name of ["pilani-map", "pilani-map-mobile"]) {
    const svg = await readFile(new URL(`../src/Assets/Map/${name}.svg`, import.meta.url), "utf8");
    assert.match(svg, /© OpenStreetMap contributors/);
    assert.doesNotMatch(svg, /<script|<image|<foreignObject|href=/i);
  }
});
