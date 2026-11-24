/* Interactive SOC / Kali Terminal (no auto-focus scroll hijack) */

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("terminal-output");
  const input = document.getElementById("terminal-input");
  const terminalBox = document.getElementById("interactive-terminal");

  if (!output || !input) return;

  const COMMANDS = {
    help: () => [
      { text: "Available commands:", cls: "term-cyan" },
      { text: "  whoami       - Analyst identity & current focus" },
      { text: "  education    - Academic background" },
      { text: "  skills       - SIEM, SOC, and programming stack" },
      { text: "  projects     - Featured cybersecurity repositories" },
      { text: "  experience   - Prior & security-aligned experience" },
      { text: "  certs        - Certifications & learning roadmap" },
      { text: "  neofetch     - System & environment summary" },
      { text: "  contact      - Reach out via email or socials" },
      { text: "  clear        - Clear terminal output" },
    ],
    whoami: () => [
      { text: "Faizan Ahmed (@faizi-cybsec)", cls: "term-emerald" },
      { text: "Role     : Aspiring SOC Level 1 Analyst | BS Cyber Security Student" },
      { text: "Location : Faisalabad, Punjab, Pakistan" },
      { text: "Focus    : Alert Triage, SIEM, Linux, Network Security, Python/C++ Tooling" },
    ],
    education: () => [
      { text: "BS Cyber Security — The Superior University (Sep 2025 – 2029)", cls: "term-cyan" },
      { text: "Intermediate, Computer Science — Superior College (May 2023 – Jun 2025)" },
    ],
    skills: () => [
      { text: "[SIEM & SOC]     Splunk, Wazuh, Microsoft Sentinel, IBM QRadar", cls: "term-cyan" },
      { text: "[Sec Tools]      Kali Linux, Wireshark, Nmap, Burp Suite, Metasploit" },
      { text: "[Languages]      Python, C++17, Bash, JavaScript, HTML/CSS, SQL" },
    ],
    projects: () => [
      { text: "1. LogSentinel          - Python SOC Log Analyzer & MITRE ATT&CK Triage CLI", cls: "term-emerald" },
      { text: "2. PasswordGuardian     - C++17 Password Entropy & HIBP k-Anonymity Toolkit" },
      { text: "3. file-hash-checker    - Python MD5/SHA-1/SHA-256 Forensics Integrity Tool" },
      { text: "4. secure-password-vault- Offline Android Password Manager (Capacitor)" },
      { text: "-> Visit projects.html or github.com/faizi-cybsec for source code.", cls: "term-muted" },
    ],
    experience: () => [
      { text: "• SEO Specialist — Nextware Technologies Pvt Ltd (Jun – Aug 2025)", cls: "term-cyan" },
      { text: "• SEO Consultant — Fiverr (Mar 2023 – May 2025 | 30–40 clients)" },
      { text: "• Lead Generation Intern — Cyborg Solutions Pvt. Ltd. (May – Jul 2024)" },
      { text: "• Internships — Wapexp Institute of IT (Sep 2023 – Apr 2024)" },
    ],
    certs: () => [
      { text: "Completed   : Introduction to Cybersecurity, Diploma in English, Digital Marketing", cls: "term-emerald" },
      { text: "In Progress : Google Cybersecurity Certificate, CompTIA Security+", cls: "term-amber" },
    ],
    neofetch: () => [
      { text: "faizan@soc-workstation", cls: "term-emerald" },
      { text: "----------------------" },
      { text: "OS      : Kali Linux / Windows 11" },
      { text: "Shell   : bash / zsh" },
      { text: "SIEM    : Splunk • Wazuh • Sentinel • QRadar" },
      { text: "Code    : Python • C++17 • Bash" },
      { text: "Status  : Open to SOC L1 & Cybersecurity Internships" },
    ],
    contact: () => [
      { text: "Email    : work.fayzan@gmail.com", cls: "term-cyan" },
      { text: "GitHub   : https://github.com/faizi-cybsec" },
      { text: "LinkedIn : https://www.linkedin.com/in/faizi-cybsec/" },
      { text: "YouTube  : https://www.youtube.com/@Faizi.CybSec" },
      { text: "X        : https://x.com/faizicybsec" },
    ],
  };

  function appendLine(text, cls = "") {
    const div = document.createElement("div");
    div.className = `term-line ${cls}`.trim();
    div.textContent = text;
    output.appendChild(div);
  }

  // Click anywhere inside terminal to focus input (never on initial page load)
  if (terminalBox) {
    terminalBox.addEventListener("click", () => {
      input.focus();
    });
  }

  input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const raw = input.value.trim();
    const cmd = raw.toLowerCase();
    input.value = "";

    if (!raw) return;
    appendLine(`faizan@soc:~$ ${raw}`, "term-emerald");

    if (cmd === "clear") {
      output.innerHTML = "";
      return;
    }

    if (COMMANDS[cmd]) {
      COMMANDS[cmd]().forEach((line) => appendLine(line.text, line.cls || ""));
    } else {
      appendLine(`Command not found: '${raw}'. Type 'help' for available commands.`, "term-amber");
    }

    output.scrollTop = output.scrollHeight;
  });
});
