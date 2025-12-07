# The Gradient Blueprint Event Page

## Overview
A full-stack event page built with Next.js (frontend) and Express.js (backend), styled with Tailwind CSS, and designed to match a provided Figma design. All event content is dynamically fetched from the backend API. The project is fully responsive and accessible.

---

## Project Structure

```
TheGradientGroup/
├── backend/           # Express.js API server
│   ├── index.js       # Main server file with mock event data
│   └── package.json   # Backend dependencies and scripts
├── frontend/          # Next.js 14+ app (App Router)
│   ├── src/app/events/[slug]/page.jsx  # Dynamic event page
│   └── public/assets/ # All referenced images
└── Full Stack Dev Assessment Hi-Fi.fig # Figma design reference
```

---

## Backend (Express.js)
- **Location:** `backend/`
- **How to run:**
  ```sh
  cd backend
  npm install
  npm run dev
  # or: node index.js
  ```
- **Endpoints:**
  - `GET /api/events` – List all events
  - `GET /api/events/:slug` – Get a single event by slug
- **Data:**
  - Mock event data is hardcoded in `index.js`.
  - All fields (title, date, location, images, agenda, speakers, previous events, FAQ) are provided.
  - CORS is enabled for local development.

---

## Frontend (Next.js + Tailwind CSS)
- **Location:** `frontend/`
- **How to run:**
  ```sh
  cd frontend
  npm install
  npm run dev
  # Visit http://localhost:3000/events/[slug]
  ```
- **Features:**
  - Uses the App Router (`src/app/events/[slug]/page.jsx`)
  - Fetches event data from the backend API at build/runtime
  - Fully matches the provided Figma design
  - Responsive and accessible
  - All images are loaded from `public/assets/`

---

## Troubleshooting
- **Hydration Errors:**
  - Ensure the backend is running before starting the frontend.
  - All event data must be static and deterministic (no random or time-based values).
  - If you see a hydration error, clear the Next.js cache:
    ```sh
    cd frontend
    rm -rf .next
    npm run dev
    ```
- **API Errors:**
  - Make sure the backend is running on port 4000.
  - Check CORS settings if accessing from a different origin.

---

## Development Notes
- All code is written in JavaScript (no TypeScript).
- No database is used; all data is static in the backend for demo purposes.
- The project is version-controlled with Git. Large files and history have been cleaned for GitHub compatibility.
- If you need to add new events, edit the `events` array in `backend/index.js`.

---

## Credits
- **Design:** Provided Figma file
- **Development:** The Gradient Group Full Stack Assessment

---
