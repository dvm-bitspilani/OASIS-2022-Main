// Offline, deterministic render of the attributed OpenStreetMap geometry snapshot.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { gunzipSync } from "node:zlib";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const data = JSON.parse(gunzipSync(await readFile(new URL("docs/pilani-map-data.json.gz", root))));
const campus = data.features.find(feature => feature.id === "31121508");
if (!campus) throw new Error("The original BITS Pilani university boundary is missing");
const center = [75.5884245, 28.3585942]; // Area centroid of the actual university boundary.
const mercatorY = latitude => Math.log(Math.tan(Math.PI / 4 + latitude * Math.PI / 360));
const rad = longitude => longitude * Math.PI / 180;
const latitudeSpan = 0.020;
const top = mercatorY(center[1] + latitudeSpan / 2);
const bottom = mercatorY(center[1] - latitudeSpan / 2);
const escape = text => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

// Remove detail below half a drawing pixel; source coordinates stay in the snapshot.
function simplify(points) {
  if (points.length < 3) return points;
  const [startX, startY] = points[0];
  const [endX, endY] = points.at(-1);
  const dx = endX - startX, dy = endY - startY;
  const length = dx * dx + dy * dy;
  let furthest = 0, largest = 0.25;
  for (let index = 1; index < points.length - 1; index++) {
    const [x, y] = points[index];
    const t = length ? Math.max(0, Math.min(1, ((x - startX) * dx + (y - startY) * dy) / length)) : 0;
    const distance = (x - startX - t * dx) ** 2 + (y - startY - t * dy) ** 2;
    if (distance > largest) { largest = distance; furthest = index; }
  }
  return furthest ? [...simplify(points.slice(0, furthest + 1)).slice(0, -1), ...simplify(points.slice(furthest))] : [points[0], points.at(-1)];
}

function render(width, height) {
  const scale = height / (top - bottom);
  const project = ([longitude, latitude]) => [width / 2 + (rad(longitude) - rad(center[0])) * scale, (top - mercatorY(latitude)) * scale];
  const coord = value => String(Math.round(value * 10) / 10);
  const paths = features => features.map(feature => {
    const points = feature.coordinates.map(project);
    if (points.every(([x, y]) => x < -20) || points.every(([x, y]) => x > width + 20)
      || points.every(([x, y]) => y < -20) || points.every(([x, y]) => y > height + 20)) return "";
    const unique = simplify(points).filter((point, index, simplified) => index === 0 || coord(point[0]) !== coord(simplified[index - 1][0]) || coord(point[1]) !== coord(simplified[index - 1][1]));
    return unique.map(([x, y], index) => `${index === 0 ? "M" : index === 1 ? "L" : " "}${coord(x)} ${coord(y)}`).join("")
      + (feature.coordinates[0].join() === feature.coordinates.at(-1).join() ? "Z" : "");
  }).join("");
  const layer = (features, attributes) => `<path d="${paths(features)}" ${attributes}/>`;
  const areas = data.features.filter(feature => feature.tags.landuse || feature.tags.leisure || feature.tags.natural);
  const roads = data.features.filter(feature => feature.tags.highway);
  const mainRoads = roads.filter(feature => ["primary", "secondary", "tertiary"].includes(feature.tags.highway));
  const localRoads = roads.filter(feature => ["residential", "unclassified", "service", "living_street"].includes(feature.tags.highway));
  const walking = roads.filter(feature => ["footway", "path", "track", "steps"].includes(feature.tags.highway));
  const [x, y] = project(center);
  const labels = ["31175279", "311886583"].map(id => {
    const feature = data.features.find(item => item.id === id);
    const [lx, ly] = project(feature.coordinates[Math.floor(feature.coordinates.length / 2)]);
    return `<text x="${coord(lx)}" y="${coord(ly - 5)}" font-size="12" fill="#6a6b64" stroke="#f2f0e7" stroke-width="3" paint-order="stroke" text-anchor="middle">${escape(feature.tags.name)}</text>`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
<title>BITS Pilani campus map</title><desc>Geographically projected OpenStreetMap roads, buildings, green spaces and the BITS Pilani campus boundary. North is up. © OpenStreetMap contributors.</desc>
<defs><clipPath id="bounds"><rect width="${width}" height="${height}"/></clipPath></defs>
<rect width="${width}" height="${height}" fill="#f2f0e7"/>
<g clip-path="url(#bounds)" stroke-linejoin="round" stroke-linecap="round">
${layer([campus], 'fill="#e7ead7" stroke="#bcc29e" stroke-width="1.5"')}
${layer(areas.filter(feature => ["grass", "forest"].includes(feature.tags.landuse) || feature.tags.natural === "wood" || ["pitch", "playground", "garden", "common", "park", "nature_reserve"].includes(feature.tags.leisure)), 'fill="#d5e3c3" stroke="#c0d3aa" stroke-width="0.8"')}
${layer(areas.filter(feature => feature.tags.natural === "water" || feature.tags.leisure === "swimming_pool"), 'fill="#b8d8e2" stroke="#9fc6d3" stroke-width="0.8"')}
${layer(data.features.filter(feature => feature.tags.building), 'fill="#d6d2c5" stroke="#c6c1b3" stroke-width="0.8"')}
${layer(mainRoads, 'fill="none" stroke="#d5c9a6" stroke-width="8"')}
${layer(mainRoads, 'fill="none" stroke="#fff6d1" stroke-width="5.5"')}
${layer(localRoads, 'fill="none" stroke="#d1cdc0" stroke-width="4.5"')}
${layer(localRoads, 'fill="none" stroke="#ffffff" stroke-width="3"')}
${layer(walking, 'fill="none" stroke="#b6b7a3" stroke-width="1.2" stroke-dasharray="2 3"')}
<g font-family="Arial, sans-serif">${labels}
<g transform="translate(${coord(x)} ${coord(y)})"><path d="M0 0C-6-9-17-20-17-31a17 17 0 1 1 34 0C17-20 6-9 0 0Z" fill="#ac453a" stroke="#fff" stroke-width="2"/><circle cx="0" cy="-31" r="6" fill="#fff"/><text x="0" y="29" text-anchor="middle" font-size="28" font-weight="700" fill="#292d29" stroke="#fff" stroke-width="4" paint-order="stroke">BITS Pilani</text></g>
<g transform="translate(${width - 28} 32)" fill="#5e6657"><path d="M0-14L-5 4L0 1L5 4Z"/><text y="21" text-anchor="middle" font-size="12">N</text></g>
</g></g></svg>`.replace(/\n/g, "");
}

await mkdir(new URL("src/Assets/Map/", root), { recursive: true });
for (const [name, width, height] of [["pilani-map", 640, 760], ["pilani-map-mobile", 720, 480]]) {
  const target = new URL(`src/Assets/Map/${name}.svg`, root);
  const svg = render(width, height);
  await writeFile(target, svg);
  console.log(`${fileURLToPath(target)}: ${Buffer.byteLength(svg)} bytes`);
}
