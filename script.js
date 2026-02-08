// 🎆 Confetti Effect
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

// 🖼️ Image Modal + Swipe
const images = document.querySelectorAll(".zoomable");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const leftBtn = document.querySelector(".nav.left");
const rightBtn = document.querySelector(".nav.right");

let currentIndex = 0;

// Open modal on image click
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    currentIndex = index;
    showImage();
  });
});

function showImage() {
  modalImg.src = images[currentIndex].src;
  caption.innerText = images[currentIndex].dataset.caption || "";
}

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// Arrow navigation
leftBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
};

rightBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
};

// 📱 Swipe support (mobile)
let startX = 0;

modal.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

modal.addEventListener("touchend", (e) => {
  const diff = startX - e.changedTouches[0].clientX;
  if (diff > 50) rightBtn.click();   // swipe left
  if (diff < -50) leftBtn.click();   // swipe right
});

// 🎂 Birthday Alert
setTimeout(() => {
  alert("Happy Birthday 🎉 Hope this made you smile 💕");
}, 3000);


