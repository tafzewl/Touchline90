// Touchline 90 local development server (Node.js, no dependencies).
// Serves the modular frontend and provides a health endpoint.
// Career data remains in browser localStorage in this version; this server does not
// pretend to provide cloud accounts, multiplayer, or database-backed saves.
const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const PORT = Number(process.env.PORT || 8080);
const TYPES = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.json':'application/json; charset=utf-8', '.txt':'text/plain; charset=utf-8' };
http.createServer((req, res) => {
  if (req.url === '/api/health') {
    res.writeHead(200, {'Content-Type':'application/json; charset=utf-8'});
    return res.end(JSON.stringify({ok:true, app:'Touchline 90', mode:'local-static'}));
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); return res.end('Bad request'); }
  if (pathname === '/') pathname = '/index.html';
  const file = path.resolve(ROOT, '.' + pathname);
  if (!file.startsWith(ROOT + path.sep) && file !== ROOT) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(err.code === 'ENOENT' ? 404 : 500); return res.end('Not found'); }
    res.writeHead(200, {'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream', 'X-Content-Type-Options':'nosniff'});
    res.end(data);
  });
}).listen(PORT, () => process.stdout.write(`Touchline 90 running at http://localhost:${PORT}\n`));
