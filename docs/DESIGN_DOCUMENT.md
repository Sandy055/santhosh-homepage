# Design Document — Santhosh Malarvannan Personal Homepage

## Project Description

This project is a personal homepage for Santhosh Malarvannan, a graduate student pursuing an MS in Computer Science at Northeastern University (Sep 2025 – Present) with a focus on AI and Machine Learning. Previously, I completed my B.Tech in CSE at Vellore Institute of Technology, Chennai (Sep 2021 – May 2025).

The website serves as a portfolio to showcase projects, research publications, work experience, skills, and contact information to potential employers, research collaborators, and peers.

The site is built entirely with vanilla HTML5, CSS3, and ES6+ modules — no frameworks or component libraries. It consists of three pages:

1. **index.html** — Main homepage with hero, about, projects, publications, resume, and contact sections.
2. **projects.html** — Detailed listing of work experience, research projects, and GitHub repositories.
3. **ai.html** — An AI-generated insights page with a dark themed timeline and stats (clearly labeled as AI-generated).

The original creative component is the **Projects section** on the homepage: project cards are dynamically rendered from a JavaScript data array using ES6 modules, appear with staggered fade-in animations triggered by IntersectionObserver, and the section background has floating particle dots animated with CSS keyframes and spawned by JS — only when the section is visible in the viewport.

---

## User Personas

### Persona 1: Hiring Manager — Sarah, 38

Sarah is a senior engineering manager at a mid-size tech company in Boston. She reviews dozens of candidate portfolios each week when hiring for ML engineer and SDE positions. She spends about 30 seconds on a page before deciding whether to dig deeper. She wants to quickly see: who is this person, what have they built, do they have real industry experience, and are they credible (publications, real projects, clean code).

### Persona 2: Fellow Student — Ravi, 24

Ravi is a classmate at Northeastern who wants to see what Santhosh has been working on. He is curious about the tech stack of various projects and wants GitHub links so he can explore the code. He browses primarily on his phone between classes.

### Persona 3: Research Collaborator — Dr. Chen, 45

Dr. Chen is an assistant professor interested in AI for healthcare. She found Santhosh through Google Scholar and wants to learn more about his background, other publications, and overall research trajectory. She values a clean, distraction-free reading experience and wants to find contact information easily.

---

## User Stories

### Story 1: Quick First Impression

As Sarah (hiring manager), I land on the homepage and immediately see Santhosh's name, title, and a one-line summary. Within 5 seconds I understand he is an MS CS student at NEU focused on AI/ML with industry experience. The hero section gives me "View Projects" and "GitHub" buttons.

### Story 2: Exploring Projects

As Sarah, I scroll down and see the Projects section. Six cards appear with a subtle fade-in animation. Each card shows a title, short description, tech tags, and a link. I can hover to see a gentle lift effect. I click through to GitHub to check code quality.

### Story 3: Checking Publications

As Dr. Chen, I scroll to the Publications section and see three research papers with titles, full co-author lists, and direct arXiv links. I can evaluate whether Santhosh's research interests overlap with mine.

### Story 4: Reviewing Resume

As Sarah, I scroll further to see a Resume section with education, experience (Medialogic Solutions and Bastian Solutions with dates and descriptions), and a full technical skills breakdown — all on one page without needing to download a PDF.

### Story 5: Mobile Browsing

As Ravi, I open the site on my phone. The hamburger menu works, the layout stacks into a single column, and I can tap through to the "All Projects" page to see full details, research projects, and GitHub links.

### Story 6: Finding Contact Info

As Dr. Chen, I scroll to the Contact section and find LinkedIn, GitHub, Google Scholar, and an email link — all in one place, clearly visible on a dark background.

### Story 7: Learning the Journey

As Ravi, I click on "AI Page" in the nav and see a dark-themed timeline of Santhosh's academic and professional milestones (2021–2026), plus quick stats. It is clearly labeled as AI-generated.

---

## Design Mockups

### Homepage Layout (Desktop)

```
+--------------------------------------------------+
| [SM]  About Projects Pubs Contact AllProj AIPage  |
+--------------------------------------------------+
|                                                    |
|                  Hello, I am                       |
|           Santhosh Malarvannan                     |
|     AI & ML Enthusiast · MS CS @ NEU Boston        |
|           [View Projects]  [GitHub]                |
|                                                    |
+--------------------------------------------------+
|                  About Me                          |
|  +---------------------------+  +---------------+  |
|  | Bio paragraph 1           |  | Quick Facts   |  |
|  | Bio paragraph 2           |  | Location      |  |
|  | Bio paragraph 3           |  | Education     |  |
|  +---------------------------+  | Skills: chips |  |
|                                 +---------------+  |
+--------------------------------------------------+
|  ░░░░░░░ Projects (light gray bg) ░░░░░░░░░░░░░░  |
|  ┌────────┐ ┌────────┐ ┌────────┐                  |
|  │ Card 1 │ │ Card 2 │ │ Card 3 │  (hover lift)   |
|  │ 🚦     │ │ 🔬     │ │ 🎭     │                  |
|  └────────┘ └────────┘ └────────┘                  |
|  ┌────────┐ ┌────────┐ ┌────────┐                  |
|  │ Card 4 │ │ Card 5 │ │ Card 6 │                  |
|  └────────┘ └────────┘ └────────┘                  |
|  ░░░░░░░░░░░░ floating particles ░░░░░░░░░░░░░░░  |
+--------------------------------------------------+
|              Research Publications                 |
|  [ Paper 1 — 2024, title, authors, arXiv link ]   |
|  [ Paper 2 ]                                       |
|  [ Paper 3 ]                                       |
+--------------------------------------------------+
|  ░░░░░░░░░░ Resume (alt gray bg) ░░░░░░░░░░░░░░░  |
|  Experience col      |  Education col              |
|  Medialogic 2024     |  MS CS @ NEU               |
|  Bastian 2023        |  BTech @ VIT               |
|                      |  Technical Skills           |
+--------------------------------------------------+
|  ████████ Contact (dark bg) █████████████████████  |
|      [LinkedIn] [GitHub] [Scholar] [Email]         |
+--------------------------------------------------+
|            © 2026 Santhosh Malarvannan             |
+--------------------------------------------------+
```

### Mobile Layout

```
+----------------------+
| [SM]           [≡]   |
+----------------------+
|    Hello, I am       |
|    Santhosh          |
|    Malarvannan       |
|  [Projects] [GitHub] |
+----------------------+
|    About Me          |
|  Bio text            |
|  Quick Facts         |
|  Skills chips        |
+----------------------+
|  Projects (1 col)    |
|  [Card 1]            |
|  [Card 2] ...        |
+----------------------+
|  Publications        |
+----------------------+
|  Resume              |
+----------------------+
|  Contact [links]     |
+----------------------+
```

### AI Page Layout (Dark)

```
+--------------------------------------------------+
| [SM]  About Projects Pubs Contact AllProj AIPage  |
| (dark navbar)                                      |
+--------------------------------------------------+
|  ✨ This page was generated with the help of AI   |
|  AI-Generated Insights                             |
|  Intro text                                        |
|                                                    |
|  My Journey                                        |
|        2021 ● B.Tech at VIT                        |
|  Bastian  ● 2023                                   |
|        2024 ● Medialogic                           |
|  Papers   ● 2024                                   |
|        2024 ● ItinerEase SIH                       |
|  NEU MS   ● 2025                                   |
|        2026 ● Future                               |
|                                                    |
|  Quick Stats                                       |
|  [4+] [11] [2] [99.7%]                            |
+--------------------------------------------------+
```
