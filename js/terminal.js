const output =
    document.getElementById(
        "terminal-output"
    );

const input =
    document.getElementById(
        "command-input"
    );

if(output && input){

const commands = {

help: `
Available Commands

help
whoami
skills
projects
education
experience
certs
contact
neofetch
scan
hack
sudo
pwd
ls
date
clear
`,

whoami: `
Faizan Ahmad

Cybersecurity Student
Security Research
Cyber Defense
Information Security
`,

skills: `
• Network Security
• Information Security
• Linux Fundamentals
• Security Research
• Cyber Defense
`,

projects: `
• Network Reconnaissance Lab
• Web Security Lab
• SOC Monitoring Lab
`,

education: `
BS Cyber Security
2nd Semester
`,

experience: `
SEO Specialist
Lead Generation Specialist
`,

certs: `
• Digital Marketing
• HP Business Email Writer
• Office Management
`,

contact: `
Email:
work.fayzan@gmail.com

Github:
faizi-cybsec

LinkedIn:
fayzn-ahmed
`,

neofetch: `
██████╗
Kali Linux

User:
faizan

Role:
Cybersecurity Student

Shell:
bash
`,

scan: `
Scanning target...

22/tcp open ssh
80/tcp open http
443/tcp open https

Scan complete.
`,

hack: `
Connecting...

Scanning...

Bypassing firewall...

Access denied.

Nice try :)
`,

sudo: `
Permission denied.

You are not in the sudoers file.
`,

pwd: `
/home/faizan
`,

ls: `
projects
skills
certifications
contact
resume.pdf
`,

date: `
${new Date().toString()}
`
};

input.addEventListener(
    "keydown",
    function(e){

        if(e.key==="Enter"){

            const cmd =
                input.value
                    .trim()
                    .toLowerCase();

            if(cmd==="clear"){

                output.innerHTML = "";

                input.value = "";

                return;
            }

            const div =
                document.createElement(
                    "div"
                );

            div.innerHTML = `
                <br>
                <span style="color:#00ff41">
                faizan@kali:~$
                </span>
                ${cmd}
                <br><br>
                ${
                    commands[cmd] ||
                    "Command not found. Type 'help'."
                }
            `;

            output.appendChild(
                div
            );

            output.scrollTop =
                output.scrollHeight;

            input.value = "";
        }
    });

input.focus();

}
