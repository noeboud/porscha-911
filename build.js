// Static build for Vercel: writes the wrapped page to dist/index.html.
const fs = require('fs'), path = require('path');
const out = path.join(__dirname, 'dist');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'index.html'), require('./wrap')());
console.log('built dist/index.html');
