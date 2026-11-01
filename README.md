# Ahmed Alluqmani — Portfolio

One-page portfolio built with React, Vite and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

All text, links and media paths live in `src/data/content.js`.
Images and videos go in `public/media/`; the CV is `public/Ahmed_Alluqmani_CV.pdf`.

- Add a project: add an object to `projects` (`media.type` is `'video'` or `'image'`).
- Add an experience entry: add an object to `experience` (`image.kind` is `'logo'` or `'photo'`).
- Add an award: add an object to `awards` (`wide: true` makes it span two columns).

## Structure

```
src/
├── data/content.js          all site content
├── hooks/useActiveSection.js which section is in view
└── components/
    ├── Navbar, ScrollRail, Hero
    ├── SectionHeader         "01 — EXPERIENCE" + title, reused
    ├── Experience, ExperienceItem
    ├── Projects, ProjectCard, ProjectDetails
    ├── Awards, AwardCard
    └── Contact
```

## Deploy

Push to GitHub, then import the repo on Vercel. It detects Vite automatically
(build: `npm run build`, output: `dist`).
