## What this is
Code Store & Commission Hub is a static, client-side demo of a student-friendly code marketplace and commission workflow. It provides a single-page UI for browsing prebuilt scripts, submitting custom commissions, placing orders, and simulating staff/IT handoffs — all stored in the browser (localStorage) for demo purposes.

### Stack
- **Language(s):** HTML, CSS, JavaScript (ES6)
- **Framework / runtime:** Vanilla static frontend (no build system; runs in any modern browser)
- **Notable APIs / patterns:** localStorage-based demo accounts and persistence, Intl.NumberFormat for currency, Blob download API for starter packs, client-side routing/tabs and UI state in scripts.js

## How it's organized
```
index.html         # Main single-page store + commission UI (loads styles.css and scripts.js)
languages.html     # Standalone "Programming Languages Library" page (static)
scripts.js         # All application logic: state, demo data, UI rendering, localStorage persistence
styles.css         # Design system, layout, and animations (night-sky, panels, buttons)
```

How it fits together:
- index.html is the single-page entry; it includes styles.css and scripts.js.
- scripts.js contains the static catalog, language packs, commission options, and the full UI state machine (tabs, cart, checkout, commission submission, staff/IT workflow).
- All user data (accounts, orders, workflow) is persisted to localStorage so you can try flows without a server. languages.html offers a simple separate page for downloading starter packs via the Blob API.

## How to run it
There is no build step — this is a static demo. The quickest ways to run:

- Open locally:
  - Double-click index.html (or open it with your browser).
- Serve from a simple local HTTP server (recommended for full behavior and downloads):
  - Python 3:
    ```
    python3 -m http.server 8000
    ```
    then open http://localhost:8000/index.html
  - Node (serve):
    ```
    npx serve .
    ```
  - Or use live-server / your preferred static server.

Notes:
- No environment variables or secrets are required.
- Data is stored in your browser localStorage. Demo accounts are seeded automatically:
  - staff@codestore.com / staff123 (role: staff)
  - it@codestore.com / it123 (role: it)
- Demo promo codes:
  - STU20 (20% discount)
  - CTRL+ALT+STU50 (50% discount)
- Downloads for language starter packs are generated client-side; no server needed.

## Try asking
- "Can you add a minimal PHP backend to persist accounts and orders? If yes, do you prefer plain PHP endpoints or a small framework (Slim / Laravel)?"
- "Would you like me to convert this into a small npm-driven project (package.json + dev server + bundler like Vite) so we can add automated builds and CI?"
- "Should I add a LICENSE, CONTRIBUTING.md, and a GitHub Pages workflow to publish the demo site (and if so, which license do you want)?"

---

What I did: I inspected the repository's top-level files (index.html, languages.html, scripts.js, styles.css), read the UI structure and client-side logic, and used that evidence to produce this README describing the purpose, structure, run instructions, and targeted follow-ups.

Next I can:
- create README.md in the repository for you (commit), or
- extend the README with usage examples, contributing guidelines, or a suggested file layout for adding a PHP backend or build tooling — tell me which you'd like and I’ll make the changes.