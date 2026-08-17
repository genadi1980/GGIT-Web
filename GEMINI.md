# GGIT.AI Project Instructions

## General Project Conventions
- **Maximum File Size:** No file in this codebase (including `index.html`, `App.jsx`, `style.css`, etc.) should exceed **2000 lines (rows)**. Keep code modular, splitting into smaller components if approaching this limit.
- **Visual Aesthetic:** Premium Clean (Medical Light Mode) using white, light off-white slate (`#F8FAFC`), deep slate text (`#0F172A`), trust blue (`#2563eb`), and medical teal/indigo (`#6366f1`).
- **Branding Guidelines:** 
  - Always pair the enlarged circular brand logo (`logo.png`) next to the bold capital brand name text: **GGIT**.
- **Company Information:**
  - **Company Name:** GLOBAL GROUP INTELLIGENCE TECHNOLOGIES LTD
  - **Registered Address:** 41 Rowan Court Peter Street, Folkestone, England CT20 1JE

## Technical Stack
- **Backend:** FastAPI (Python) serving static assets and async lead registration form handlers.
- **Frontend (Legacy):** Vanilla HTML5/CSS/JS served directly via Jinja templates under `/templates/index.html`.
- **Frontend (Premium):** React 19 + Vite + Tailwind CSS + GSAP served from the `/ggit-premium-site` directory.

## Section Guidelines
- **Home Hero:** Features a state-controlled background image carousel looping through 6 pictures (`1.jpg` to `6.jpg`) from `Images/` with a smooth 5-second crossfade.
- **Feature Cards Section:** Ensure cards are fully visible immediately on mount by staggering transitions on load instead of delayed scroll-triggers to guarantee maximum viewport compatibility.
- **Lost Revenue Calculator:** Real-time calculation based on missed calls input. Formula: `Missed Calls * 20% Booking Rate * $500 Patient LTV = Revenue Loss`.
- **Direct Schedulers:** Provide a dual-choice container (tabbed interface) allowing dental clinic owners to choose between direct Google Calendar schedule booking (pointing to `https://calendar.app.google/jShLVgGnrGSahVDn7`) and the callback form.
