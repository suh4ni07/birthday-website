// Typewriter
const text =
  "You make life brighter every single day 💖 keep smiling and being fun >_<";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// Password
const CORRECT_PASSWORD = "dosa"; // 🔑 change here

function openPasswordModal() {
  document.getElementById("passwordModal").style.display = "block";
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("passwordError");

  if (input === CORRECT_PASSWORD) {
    document.getElementById("passwordModal").style.display = "none";
    openGallery();
  } else {
    error.innerText = "Wrong password 💔 Try again";
  }
}

// Gallery
function openGallery() {
  document.getElementById("homeSection").style.display = "none";
  document.getElementById("gallerySection").style.display = "block";
  confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
}

function goHome() {
  document.getElementById("gallerySection").style.display = "none";
  document.getElementById("homeSection").style.display = "block";
}

// Image modal
const images = document.querySelectorAll(".zoomable");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const leftBtn = document.querySelector(".nav.left");
const rightBtn = document.querySelector(".nav.right");

let currentIndex = 0;

images.forEach((img, idx) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    currentIndex = idx;
    showImage();
  });
});

function showImage() {
  modalImg.src = images[currentIndex].src;
  caption.innerText = images[currentIndex].dataset.caption || "";
}

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

leftBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
};

rightBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
};

// Swipe
let startX = 0;
modal.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
modal.addEventListener("touchend", e => {
  const diff = startX - e.changedTouches[0].clientX;
  if (diff > 50) rightBtn.click();
  if (diff < -50) leftBtn.click();
});


