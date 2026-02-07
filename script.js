// 🎆 Confetti Blast
function fireConfetti() {
  confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 }
  });
}

setTimeout(fireConfetti, 1000);
setInterval(fireConfetti, 8000);

// ⌨️ Typewriter Effect
const text =
  "You make my life brighter every single day 💖 Always keep smiling and be funny and keep wasting your money on me hehe >_< ";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}

typeWriter();

// 🎥 Play Video With Sound
function playWithSound() {
  const video = document.getElementById("myVideo");
  video.muted = false;
  video.play();
}

// 🎵 Play Background Music
function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
}

// 🎂 Sweet alert
setTimeout(() => {
  alert("Happy Birthday 🎉 Hope this made you smile 💕");
}, 3000);

