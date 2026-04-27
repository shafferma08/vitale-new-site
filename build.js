// Tiny static-site builder for Vitale Bros.
// Expands <!--#include name--> markers with _partials/name.html and
// copies HTML + static folders into dist/. No Vite, no bundling.
//
// Usage:
//   node build.js          # one-shot build
//   node build.js --watch  # rebuild on file changes

import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, rmSync, cpSync, watch } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = __dirname;
const OUT = resolve(__dirname, 'dist');
const PARTIALS_DIR = resolve(__dirname, '_partials');
const STATIC_DIRS = ['assets', 'styles', 'js'];
const IGNORED_DIRS = new Set(['node_modules', 'dist', '_partials', '.git']);

const INCLUDE_RE = /<!--\s*#include\s+([\w-]+)\s*-->/g;

function expandIncludes(html) {
  return html.replace(INCLUDE_RE, (_, name) => {
    try {
      return readFileSync(join(PARTIALS_DIR, `${name}.html`), 'utf-8');
    } catch {
      return `<!-- include error: partial "${name}" not found -->`;
    }
  });
}

function walkHtml(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (IGNORED_DIRS.has(entry) || entry.startsWith('.') || entry.startsWith('_')) continue;
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) walkHtml(full, acc);
    else if (entry.endsWith('.html')) acc.push(full);
  }
  return acc;
}

function build() {
  const start = Date.now();
  rmSync(OUT, { recursive: true, force: true });
  mkdirSync(OUT, { recursive: true });

  // Copy static directories as-is.
  for (const d of STATIC_DIRS) {
    const from = resolve(SRC, d);
    try {
      statSync(from);
      cpSync(from, resolve(OUT, d), { recursive: true });
    } catch { /* directory doesn't exist, skip */ }
  }

  // Process HTML files.
  const files = walkHtml(SRC);
  for (const file of files) {
    const rel = relative(SRC, file);
    const out = resolve(OUT, rel);
    mkdirSync(dirname(out), { recursive: true });
    const html = readFileSync(file, 'utf-8');
    writeFileSync(out, expandIncludes(html));
  }

  console.log(`built ${files.length} pages to dist/ in ${Date.now() - start}ms`);
}

build();

if (process.argv.includes('--watch')) {
  console.log('watching for changes...');
  let pending = null;
  const schedule = () => {
    clearTimeout(pending);
    pending = setTimeout(() => {
      try { build(); } catch (e) { console.error(e); }
    }, 100);
  };
  watch(SRC, { recursive: true }, (_event, filename) => {
    if (!filename) return;
    const top = filename.split(/[\\/]/)[0];
    if (IGNORED_DIRS.has(top)) return;
    schedule();
  });
}
