# NoteClip 2.0

A standalone prototype for generating customer-ready pest control service notes from technician inputs.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server.

## Host on GitHub Pages

This project is static: `index.html`, `styles.css`, and `script.js` are all that GitHub Pages needs. Put the `NoteClip-2.0` folder in a GitHub repository, then enable GitHub Pages from the repository settings and publish from the branch/folder that contains these files.

## What this version does

- Lets a tech select multiple pest issues.
- Shows ant species options when ants are selected.
- Shows spider activity options when spiders are selected.
- Captures conducive conditions, gate status, and house-specific observations.
- Generates one professional paragraph that includes what was seen, what was done, and what to expect.
- Creates a manual AI polish prompt that can be copied into ChatGPT, Gemini, or another model when desired.
- Runs as a static web app, so it can be hosted on GitHub Pages and used from an iPhone browser.

## LLM integration direction

The current prototype uses a stronger local rule-based generator so it works immediately without an API key. The manual AI prompt is kept as an optional polish step. For a future direct AI button on iPhone, the safest hosted path is a small backend/API proxy so the LLM key is never exposed in the browser.
