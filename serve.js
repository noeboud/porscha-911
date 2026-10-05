// Minimal static server for previewing index.html (wrapped in a doctype like the artifact host does).
const http = require('http'), wrap = require('./wrap');
http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
  res.end(wrap());
}).listen(5173, () => console.log('preview on http://localhost:5173'));
