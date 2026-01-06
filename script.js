let step = 0;
const text = document.getElementById("text");
const btn = document.getElementById("btn");

setTimeout(() => {
  text.innerText = "KAMU TAU GA?";
}, 1500);

setTimeout(() => {
  document.body.style.background = "#ffd6e8";
  text.style.color = "#ff4d88";
  text.innerText = "Kau itu sadar ga si babb...\n kau itu kicikkk lo babb";
  btn.style.display = "inline-block";
}, 3500);

function next() {
  text.innerText = "Terlambat.\nTapii ga boleh nangis2 lagi yaa babbbb";
  btn.style.display = "none";
  hati();
}

function hati() {
  for (let i = 0; i < 20; i++) {
    const h = document.createElement("div");
    h.innerText = "💗";
    h.style.position = "absolute";
    h.style.left = Math.random() * 100 + "vw";
    h.style.top = "100vh";
    h.style.fontSize = "20px";
    h.style.animation = "naik 3s linear";
    document.body.appendChild(h);

    setTimeout(() => h.remove(), 3000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes naik {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
