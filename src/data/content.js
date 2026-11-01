// All site text lives here. Edit this file to change content — no JSX needed.

export const profile = {
  name: 'Ahmed',
  fullName: 'Ahmed Alluqmani',
  title: 'AI ENGINEER',
  email: 'ahmedalluqmani0@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ahmed-alluqmani-8242b7350/',
  github: 'https://github.com/Ahmed-log11',
  cv: '/Ahmed_Alluqmani_CV.pdf',
  heroImage: '/media/hero.jpg',
  stats: [
    { value: '4.64', suffix: '/5', label: 'GPA · KAU' },
    { value: 'Top 20', label: 'of 1,888 · Aramco' },
    { value: 'NVIDIA', label: 'Certified · Gen AI LLMs' },
  ],
}

export const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
]

// image.kind: 'logo' (contained, centered) or 'photo' (fills the frame)
export const experience = [
  {
    when: 'Sep — Dec 2026',
    org: 'Tuwaiq Academy · Riyadh',
    role: 'Data Science & AI Bootcamp',
    desc: 'Full-time, on-site program. Recognized by the academy as one of its standout students.',
    image: { src: '/media/tuwaiq-logo.png', kind: 'logo', width: '74%' },
    caption: 'Tuwaiq Academy',
  },
  {
    when: 'Jun — Sep 2025',
    org: 'The Chairman Group · Jeddah',
    role: 'AI & IT Intern',
    desc: 'Analyzed prospective clients to find business gaps behind the agency’s branding and marketing proposals, started a machine learning prototype to automate that analysis, and was the office’s main technical point of contact.',
    image: { src: '/media/chairman-logo.png', kind: 'logo', width: '62%' },
    caption: 'The Chairman Group',
  },
  {
    when: '2024 — 2026',
    org: 'Hajj Seasons · Makkah',
    role: 'Hajj Operations',
    desc: 'Different roles across different Hajj seasons — on the ground during the busiest weeks of the year.',
    roles: [
      {
        role: 'Indicators & Metrics Team',
        org: 'Qafilat Al-Itmam',
        when: 'May 2026',
        desc: 'Responsible for tracking a set of the operation’s performance indicators throughout the season.',
      },
      {
        role: 'Field Auditor',
        org: 'NUSUK',
        when: 'May — Jun 2024',
        desc: 'On-site audits across 100+ hotels and Hajj organizations during peak season, checking compliance with NUSUK service guidelines.',
      },
    ],
    image: { src: '/media/hajj.jpg', kind: 'photo', tall: true, position: 'center 20%' },
    caption: 'Hajj 2026 · Makkah',
  },
  {
    when: 'Aug 2021 — Jun 2026',
    org: 'King Abdulaziz University · Jeddah',
    role: 'BSc Information Technology',
    desc: 'Graduated with a 4.64 / 5 GPA. Graduation project: SpokenMap.',
    image: { src: '/media/kau-logo.png', kind: 'logo', width: '40%' },
    caption: 'King Abdulaziz University',
  },
]

// media.type: 'video' (plays only when the card is active and in view) or 'image'
export const projects = [
  {
    title: 'SpokenMap',
    meta: 'Graduation · 2026',
    media: { type: 'video', src: '/media/spokenmap.mp4', poster: '/media/spokenmap-poster.jpg' },
    hook: 'Ask a map a question — in Arabic or English.',
    desc: 'A bilingual conversational map. A LangGraph agent turns a spoken or typed question into geospatial queries over PostGIS and OpenStreetMap, then answers in the user’s language. Graduation project, built over a year in a team of three.',
    tags: ['LangGraph', 'FastAPI', 'PostGIS', 'React', 'Docker'],
    links: [
      { label: 'Watch demo', href: '/media/spokenmap.mp4' },
      { label: 'LinkedIn post', href: 'https://lnkd.in/p/d6GV7KgK' },
    ],
  },
  {
    title: 'Insyab — انسياب',
    meta: 'Expo 2030 hackathon · 2026',
    media: { type: 'image', src: '/media/insyab.jpg', alt: 'Three Insyab app screens' },
    hook: 'Different routes for different visitors — shorter queues for all.',
    desc: 'Crowd-aware routing for Expo 2030 that plans each visitor’s pavilion route from their interests and live crowd data. Team of four; my part was the wait-time prediction model and the crowd simulation.',
    tags: ['Machine Learning', 'Simulation', 'React Native'],
    links: [{ label: 'See screens', href: '/media/insyab.jpg' }],
  },
  {
    title: 'Face to Morse',
    meta: 'Project lead · 2026',
    media: { type: 'image', src: '/media/face-to-morse.jpg', alt: 'Face to Morse title screen' },
    hook: 'Wink, and the screen reads Morse.',
    desc: 'Led a team building a real-time computer-vision game for a university tech exhibition. A left wink is a dash, a right wink a dot. It calibrates to each player’s eyes during the countdown and rejects natural blinks, no ML model needed.',
    tags: ['MediaPipe', 'OpenCV', 'FastAPI', 'React'],
    links: [{ label: 'Code', href: 'https://github.com/Ahmed-log11/face-to-morse-game' }],
  },
  {
    title: 'Data Science Club',
    meta: 'Project lead · 2026',
    media: { type: 'image', src: '/media/ds-club.jpg', alt: 'KAU Data Science Club website' },
    hook: 'A home for KAU’s data science club.',
    desc: 'Led the build of the King Abdulaziz University Data Science Club’s website.',
    tags: ['React', 'JavaScript', 'HTML/CSS'],
    links: [
      { label: 'Watch demo', href: 'https://x.com/dsc_kau/status/2078510092119355818' },
      { label: 'Visit site', href: 'https://kau-data-science-club.vercel.app' },
    ],
  },
  {
    title: 'Home Advantage',
    meta: 'Tuwaiq · 2026',
    media: { type: 'video', src: '/media/home-advantage.mp4', poster: '/media/home-advantage-poster.jpg' },
    hook: 'Do fans win matches?',
    desc: 'A data story across 16,109 matches in Europe’s top five leagues. When COVID emptied the stadiums, the home team’s edge shrank from 15 points to 5 — and came back with the fans. Published as an interactive React site.',
    tags: ['EDA', 'Python', 'Data Storytelling', 'React'],
    links: [
      { label: 'Open the story', href: 'https://football-crowd-analysis.vercel.app' },
      { label: 'Code', href: 'https://github.com/Ahmed-log11/football_crowd_analysis' },
    ],
  },
]

// wide: spans two columns on desktop
export const awards = [
  {
    type: 'Competition',
    year: '2026',
    big: 'Top 20 of 1,888',
    title: 'Aramco Consulting Championship',
    by: 'Finalist · in partnership with EY, Deloitte & Roland Berger',
    wide: true,
  },
  {
    type: 'Certification',
    year: 'Oct 2026',
    big: 'NCA-GENL',
    title: 'NVIDIA-Certified Associate: Generative AI LLMs',
    by: 'NVIDIA',
  },
  { type: 'Scholarship', year: 'Jan 2026', big: 'ML Scholar', title: 'MenaML Winter School', by: 'KAUST' },
  { type: 'Certificate', year: '2025', big: 'Adv. AI', title: 'Advanced Artificial Intelligence', by: 'KAUST' },
  { type: 'Language', year: '2026', big: '7.0', title: 'Academic IELTS', by: 'Band 7.0 · CEFR C1' },
]
