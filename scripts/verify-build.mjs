import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import assert from 'node:assert/strict';
import path from 'node:path';

const dist = path.resolve('dist');
let files = 0, bytes = 0;
const references = new Set();
async function verify(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { await verify(file); continue; }
    files++;
    bytes += (await stat(file)).size;
    if (!/\.(?:html|css|js)$/.test(file)) continue;
    const source = await readFile(file, 'utf8');
    assert.doesNotMatch(source, /DVM portfolio|Opening archive|Opening demo|Preview Registration|Dance Showcase|Music Showcase|Demo Arts College/i);
    for (const match of source.matchAll(/["'`(]((?:\/assets\/|assets\/|\.\/)[^"'`)\s]+\.(?:js|css|webp|svg|png|jpe?g|woff2))/g)) {
      const ref = match[1];
      const resolved = ref.startsWith('/assets/') || ref.startsWith('assets/') ? path.join(dist, ref) : path.resolve(path.dirname(file), ref);
      assert.ok(existsSync(resolved), `Missing ${ref} referenced by ${file}`);
      references.add(resolved);
    }
  }
}
await verify(dist);
const assets = await readdir(path.join(dist, 'assets'));
for (const asset of assets) assert.match(asset, /-[A-Za-z0-9_-]{8,}\.[a-z0-9]+$/i, `Unhashed asset: ${asset}`);
const headers = await readFile(path.join(dist, '_headers'), 'utf8');
assert.match(headers, /\/assets\/\*\n  Cache-Control: public, max-age=31536000, immutable/);
for (const route of ['/', '/index.html', '/sponsors', '/developers', '/mediaPartners', '/eclipse', '/wallmag']) {
  assert.ok(headers.includes(`${route}\n  Cache-Control: public, max-age=0, must-revalidate`), `Missing HTML revalidation: ${route}`);
}
for (const [pkg, face] of [['allura', 'allura-latin-400-normal'], ['mulish', 'mulish-latin-400-normal'], ['mulish', 'mulish-latin-700-normal'], ['montserrat', 'montserrat-latin-400-normal'], ['montserrat', 'montserrat-latin-500-normal']]) {
  const built = assets.find(file => file.startsWith(`${face}-`) && file.endsWith('.woff2'));
  assert.ok(built, `Missing original font: ${face}`);
  assert.deepEqual(await readFile(path.join(dist, 'assets', built)), await readFile(`node_modules/@fontsource/${pkg}/files/${face}.woff2`), `Changed original font: ${face}`);
}
const initial = async extension => {
  const name = assets.find(file => file.startsWith('index-') && file.endsWith(extension));
  const data = await readFile(path.join(dist, 'assets', name));
  return { bytes: data.length, gzipBytes: gzipSync(data).length };
};
console.log(JSON.stringify({ files, bytes, verifiedReferences: references.size, initialCSS: await initial('.css'), initialJS: await initial('.js') }, null, 2));
