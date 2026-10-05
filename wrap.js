// Wraps index.html (page content, as the artifact host expects) in the document shell the host would add.
const fs = require('fs'), path = require('path');
module.exports = () => '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="description" content="Tableau de bord embarqué avec une Porsche 911 Targa en 3D."><style>body{margin:0}</style></head><body>'
  + fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8') + '</body></html>';
