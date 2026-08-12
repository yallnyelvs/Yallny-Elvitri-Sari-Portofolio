const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content h3", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 2500,
});

ScrollReveal().reveal(".intro__image", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".intro__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".intro__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".intro__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".intro__grid", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".intro__content h4", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".intro__flex div", {
  ...scrollRevealOption,
  delay: 3000,
  interval: 500,
});

ScrollReveal().reveal(".journey__grid > div > div", {
  ...scrollRevealOption,
  interval: 500,
});

const documentationMixer = mixitup(".documentation__grid", {
  selectors: {
    target: ".documentation__card"
  },
  animation: {
    duration: 500,
    effects: "fade scale(0.8)",
    easing: "ease"
  }
});

const swiper = new Swiper(".contactSwiper", {
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay:{
    delay: 3000,
  }
  
});

document.getElementById("downloadCV").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "assets/CV_Yallny_Elvitri_Sari.pdf";
  link.download = "CV_Yallny_Elvitri_Sari.pdf";
  link.click();
});

let images = [];
let current = 0;
const popup = document.getElementById("galleryPopup");
const image = document.getElementById("galleryImage");
const video = document.getElementById("galleryVideo");

// Menampilkan gambar atau video
function showGalleryItem() {
  const file = images[current];
  if (file.toLowerCase().endsWith(".mp4")) {
    // Sembunyikan gambar
    image.style.display = "none";
    // Tampilkan video
    video.style.display = "block";
    video.src = file;
    video.load();
  } else {
    // Hentikan video
    video.pause();
    video.removeAttribute("src");
    video.style.display = "none";
    // Tampilkan gambar
    image.style.display = "block";
    image.src = file;
  }
}
// Open gallery
function openGallery(list) {
  images = list;
  current = 0;
  showGalleryItem();
  popup.classList.add("active");
}
window.openGallery = openGallery;
// Close button
document.querySelector(".gallery__close").onclick = () => {
  popup.classList.remove("active");
  video.pause();
  video.removeAttribute("src");
};
// Next button
document.querySelector(".gallery__next").onclick = () => {
  current++;
  if (current >= images.length) {
    current = 0;
  }
  showGalleryItem();
};
// Previous button
document.querySelector(".gallery__prev").onclick = () => {
  current--;
  if (current < 0) {
    current = images.length - 1;
  }
  showGalleryItem();
};
// Klik background untuk menutup popup
popup.onclick = (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
    video.pause();
    video.removeAttribute("src");
  }
};

const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", () => {
  window.open(
    "https://wa.me/6283181902188?text=Hello%20Yallny,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
    "_blank"
  );
});