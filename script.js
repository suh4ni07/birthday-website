// 🎆 Confetti
function fireConfetti() {
  confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 }
  });
}

// ⌨️ Typewriter
const text =
  "You make my life brighter every single day 💖 keep smiling and being funny >_<";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// 📂 Open Gallery
function openGallery() {
  document.getElementById("homeSection").style.display = "none";
  document.getElementById("gallerySection").style.display = "block";
  fireConfetti();
}

// 🏠 Back to Home
function goHome() {
  document.getElementById("gallerySection").style.display = "none";
  document.getElementById("homeSection").style.display = "block";
}

// 🖼️ Modal logic
const images = document.querySelectorAll(".zoomable");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const leftBtn = document.querySelector(".nav.left");
const rightBtn = document.querySelector(".nav.right");

let currentIndex = 0;

images.forEach((img, i) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    currentIndex = i;
    showImage();
  });
});

function showImage() {
  modalImg.src = images[currentIndex].src;
  caption.innerText = images[currentIndex].dataset.caption || "";
}

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

leftBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
};

rightBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
};

// 📱 Swipe
let startX = 0;
modal.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
modal.addEventListener("touchend", e => {
  const diff = startX - e.changedTouches[0].clientX;
  if (diff > 50) rightBtn.click();
  if (diff < -50) leftBtn.click();
});



