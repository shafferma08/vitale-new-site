// Minimal static server for the dist/ folder.
// Run with: npm run serve  (then open http://localhost:5173)

import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, resolve } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, 'dist');
const PORT = 5173;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function resolvePath(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  let p = join(ROOT, clean);
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  if (!existsSync(p) && !clean.endsWith('.html')) {
    const withExt = join(ROOT, clean.replace(/\/$/, '') + '.html');
    if (existsSync(withExt)) p = withExt;
  }
  return p;
}

createServer((req, res) => {
  const p = resolvePath(req.url);
  if (!existsSync(p) || statSync(p).isDirectory()) {
    res.statusCode = 404;
    res.end('Not found');
    return;
  }
  res.setHeader('content-type', MIME[extname(p)] || 'application/octet-stream');
  res.end(readFileSync(p));
}).listen(PORT, () => console.log(`serving dist/ at http://localhost:${PORT}`));
