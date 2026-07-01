setInterval(()=>{

document.getElementById(
"threats"
).innerText=
1400+
Math.floor(
Math.random()*100
);

document.getElementById(
"ports"
).innerText=
65000+
Math.floor(
Math.random()*500
);

document.getElementById(
"logs"
).innerText=
4800+
Math.floor(
Math.random()*300
);

},1000);
