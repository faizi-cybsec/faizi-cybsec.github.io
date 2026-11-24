<div align="center">

<img src="favicon.svg" alt="Faizan Ahmed Cyber Shield Logo" width="72" height="72" />

# Faizan Ahmed — Cybersecurity Portfolio (`faizi-cybsec.github.io`)

[![Site Integrity & SEO CI](https://github.com/faizi-cybsec/faizi-cybsec.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/faizi-cybsec/faizi-cybsec.github.io/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Live Site](https://img.shields.io/badge/Live-faizi--cybsec.github.io-00f0ff.svg)](https://faizi-cybsec.github.io/)

</div>

Personal cybersecurity and SOC L1 portfolio website built with semantic HTML5, CSS3 (Cyber-Cyan & Emerald dark theme), and vanilla JavaScript.

**Live Site:** [https://faizi-cybsec.github.io/](https://faizi-cybsec.github.io/)

## Features
- **Multi-page architecture:** `index.html`, `about.html`, `skills.html`, `projects.html`, `experience.html`, `certifications.html`, and `contact.html`.
- **Interactive SOC Terminal:** Built-in terminal emulator (`js/terminal.js`) supporting `help`, `whoami`, `education`, `skills`, `projects`, `experience`, `certs`, `neofetch`, `contact`, and `clear`.
- **Filterable Projects Showcase:** Highlights `LogSentinel`, `PasswordGuardian`, `file-hash-checker`, and `Secure Password Vault`.
- **SEO & AI Citation Ready:** Includes `favicon.svg`, `sitemap.xml`, `robots.txt`, `llms.txt`, Open Graph/Twitter meta tags, and Schema.org `Person` JSON-LD.

## Local Preview & Testing

```bash
git clone https://github.com/faizi-cybsec/faizi-cybsec.github.io.git
cd faizi-cybsec.github.io

# Preview locally
python -m http.server 8000

# Run automated HTML, link, JSON-LD, and sitemap tests
python -m unittest discover -s tests -v
```

## Contributing & License

- Contributions welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).
- Released under the [MIT License](LICENSE).
