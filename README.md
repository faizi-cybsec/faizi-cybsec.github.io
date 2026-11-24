<div align="center">

# 🛡️ Faizan Ahmed — Cybersecurity Portfolio

**Aspiring SOC L1 Analyst · BS Cyber Security student · Security tool developer**

*A fast, dependency-free portfolio site with a built-in interactive SOC terminal.*

### 🌐 [faizi-cybsec.github.io](https://faizi-cybsec.github.io/)

[![Live Site](https://img.shields.io/badge/live-faizi--cybsec.github.io-00f0ff.svg)](https://faizi-cybsec.github.io/)
[![Hosted on GitHub Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-181717.svg?logo=github)](https://pages.github.com/)
[![HTML5](https://img.shields.io/badge/HTML5-semantic-E34F26.svg?logo=html5&logoColor=white)](index.html)
[![CSS3](https://img.shields.io/badge/CSS3-custom%20theme-1572B6.svg?logo=css3&logoColor=white)](css/style.css)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E.svg?logo=javascript&logoColor=black)](js/main.js)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg)](#tech-stack)
[![Last Commit](https://img.shields.io/github/last-commit/faizi-cybsec/faizi-cybsec.github.io)](https://github.com/faizi-cybsec/faizi-cybsec.github.io/commits/main)

</div>

---

## What is this?

This is the source code of my personal portfolio website. It shows who I am, what I have built, and the skills I am developing for a career in **Security Operations (SOC)** and blue-team cybersecurity.

It is built with plain HTML, CSS, and JavaScript. There are no frameworks, no build step, and no external libraries, so it loads fast and anyone can read the whole codebase in a few minutes.

---

## What's on the site

| Page | What you'll find |
| :--- | :--- |
| 🏠 [Home](https://faizi-cybsec.github.io/) | Introduction, interactive SOC terminal, key stats, and featured projects |
| 👤 [About](https://faizi-cybsec.github.io/about.html) | Background, education, and a "system profile" summary |
| 🧰 [Skills](https://faizi-cybsec.github.io/skills.html) | SIEM and SOC tools, network and web security, programming, forensics, operating systems |
| 🚀 [Projects](https://faizi-cybsec.github.io/projects.html) | Filterable showcase of my open-source security projects |
| 💼 [Experience](https://faizi-cybsec.github.io/experience.html) | Work history and how those skills transfer to SOC work |
| 🎓 [Certifications](https://faizi-cybsec.github.io/certifications.html) | Completed credentials and my certification roadmap |
| ✉️ [Contact](https://faizi-cybsec.github.io/contact.html) | Email, social profiles, and a pre-filled email form |

---

## Highlights

- **Interactive SOC terminal.** On the home page you can type commands like a real analyst. Try `help` first, then `whoami`, `education`, `skills`, `projects`, `experience`, `certs`, `neofetch`, `contact`, and `clear`.
- **Filterable projects.** Filter by SOC & Detection, Python, C++17, or Mobile / AppSec.
- **Responsive design.** A mobile navigation drawer and layouts that adapt to phones, tablets, and desktops.
- **Dark "Cyber-Cyan & Emerald" theme.** High-contrast colors on a near-black background (`#0a0e17`).
- **Contact form without a backend.** The form builds a pre-filled email in your mail app, and there is a one-click "Copy Email" button, so no data is stored on any server.
- **Search- and AI-friendly.** Per-page titles and descriptions, canonical URLs, Open Graph tags, structured data (JSON-LD), `sitemap.xml`, `robots.txt`, and an `llms.txt` summary for AI assistants.

---

## Featured projects

| Project | What it is |
| :--- | :--- |
| [**LogSentinel**](https://github.com/faizi-cybsec/LogSentinel) | Python SOC log analyzer with a Sigma-style rule engine, MITRE ATT&CK mapping, and incident triage reports |
| [**PasswordGuardian**](https://github.com/faizi-cybsec/PasswordGuardian) | C++17 toolkit for password strength analysis, entropy and crack-time estimation, and privacy-preserving breach checks |
| **file-hash-checker** | Python utility that computes MD5, SHA-1, and SHA-256 hashes to verify file integrity |
| [**Secure Password Vault**](https://github.com/faizi-cybsec/secure-password-vault) | Fully offline Android password manager |

---

## Tech stack

| Layer | Technology |
| :--- | :--- |
| Markup | Semantic HTML5 |
| Styling | CSS3 with custom properties (`css/style.css`) |
| Behavior | Vanilla JavaScript (`js/main.js`, `js/terminal.js`) |
| Hosting | GitHub Pages |
| Dependencies | None |

---

## Run it on your computer

You only need [Python](https://www.python.org/downloads/) installed (any recent version).

```bash
git clone https://github.com/faizi-cybsec/faizi-cybsec.github.io.git
cd faizi-cybsec.github.io
python -m http.server 8000
```

Then open **http://localhost:8000** in your browser. Press `Ctrl + C` in the terminal to stop the server.

---

## Project structure

```text
faizi-cybsec.github.io/
├── index.html            # Home page and interactive terminal
├── about.html            # About me
├── skills.html           # Skills
├── projects.html         # Projects showcase
├── experience.html       # Experience
├── certifications.html   # Certifications and roadmap
├── contact.html          # Contact
├── css/
│   └── style.css         # Theme and responsive layout
├── js/
│   ├── main.js           # Navigation, project filters, contact form
│   └── terminal.js       # Interactive SOC terminal
├── favicon.svg           # Site icon
├── sitemap.xml           # For search engines
├── robots.txt            # Crawler rules
└── llms.txt              # Plain-text summary for AI assistants
```

---

## Deployment

This repository is named `faizi-cybsec.github.io`, so GitHub Pages publishes it automatically. Every push to the `main` branch updates the live site within a minute or two.

---

## Connect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/faizi-cybsec/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/faizi-cybsec)
[![YouTube](https://img.shields.io/badge/YouTube-Subscribe-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/@Faizi.CybSec)
[![X](https://img.shields.io/badge/X-Follow-black?style=for-the-badge&logo=x)](https://x.com/faizicybsec)

© 2026 Faizan Ahmed ([`@faizi-cybsec`](https://github.com/faizi-cybsec)). Open to SOC L1 and cybersecurity internship opportunities.
