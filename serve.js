// Minimal static server for previewing index.html (wraps it in a doctype like the artifact host does).
const http = require('http'), fs = require('fs'), path = require('path');
http.createServer((req, res) => {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
  res.end('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>body{margin:0}</style></head><body>' + html + '</body></html>');
}).listen(5173, () => console.log('preview on http://localhost:5173'));
