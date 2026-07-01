const output =
document.getElementById(
    "terminal-output"
);

const input =
document.getElementById(
    "command-input"
);

const commands = {

help:`
Available Commands

whoami
skills
projects
education
experience
certs
contact
neofetch
hack
clear
`,

whoami:`
Faizan Ahmad

Cybersecurity Student
Security Research
Cyber Defense
`,

skills:`
• Network Security
• Information Security
• Linux Fundamentals
• Security Research
• Cyber Defense
`,

projects:`
• Network Reconnaissance Lab
• Web Security Lab
• SOC Monitoring Lab
`,

education:`
BS Cyber Security
2nd Semester
`,

experience:`
SEO Specialist
Lead Generation Specialist
`,

certs:`
Digital Marketing
HP Business Email Writer
Office Management
`,

contact:`
Email:
work.fayzan@gmail.com

Github:
faizi-cybsec
`,

neofetch:`
██████╗
║ Kali Linux
║ User: faizan
║ Shell: bash
║ Role: Cybersecurity Student
`,

hack:`
Connecting...
Scanning...
Bypassing firewall...
Access denied.
Nice try :)
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

            const div =
            document.createElement(
                "div"
            );

            div.innerHTML=
            `
            <br>
            <span style="color:#00ff41">
            faizan@kali:~$
            </span>
            ${cmd}
            <br><br>
            ${
                commands[cmd]
                ||
                "Command not found"
            }
            `;

            output.appendChild(
                div
            );

            if(cmd==="clear"){
                output.innerHTML="";
            }

            output.scrollTop=
            output.scrollHeight;

            input.value="";
        }
});
