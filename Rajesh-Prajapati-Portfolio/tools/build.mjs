import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const output = fileURLToPath(new URL('../dist/', import.meta.url));
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of ['index.html', 'styles.css', 'script.js', 'assets', '.nojekyll']) {
  await cp(root + entry, output + entry, { recursive: true });
}
console.log('Static portfolio prepared in dist/.');
