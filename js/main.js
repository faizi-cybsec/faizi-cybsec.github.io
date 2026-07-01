const threats = document.getElementById("threats");
const ports = document.getElementById("ports");
const logs = document.getElementById("logs");

if (threats && ports && logs) {

    setInterval(() => {

        threats.innerText =
            1400 + Math.floor(Math.random() * 100);

        ports.innerText =
            65000 + Math.floor(Math.random() * 500);

        logs.innerText =
            4800 + Math.floor(Math.random() * 300);

    }, 1000);

}
