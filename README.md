# 911 Porscha

In-car head-unit dashboard with a procedural 3D Porsche 911 Targa (964 proportions), built with three.js r128.

- **Live page:** https://claude.ai/artifact/UbQraNffy5QALfUUkCYZE9 (private to the owner's claude.ai account)
- **Source:** `index.html` — the whole app (markup, styles, scene). It is page *content*: the artifact host wraps it in `<!doctype html><head>…<body>` when published.

## Preview locally

```bash
node serve.js
```

Then open http://localhost:5173. `serve.js` adds the document wrapper the artifact host would.

## Continue with Claude

Open this folder in Claude Code and ask for changes. To publish, ask Claude to update the artifact at the link above from `index.html` (it keeps the same URL).

## Structure of `index.html`

- **Tokens & layout CSS** — fonts: Michroma (logo), Inria Sans (UI), Space Mono (date, time, values).
- **Scene** — studio environment map, lofted body built from side/plan tables (`T`, `G`), details raycast onto the body (bumpers, shut-lines, lights), Fuchs wheels, headlights, rear wing.
- **UI** — tabs (Commandes, Caméra, CarPlay, Paramètres), detail modes (Eclairage, Ventilation, Aileron) with leader lines, volume popover, hazard lights with tick sound.
