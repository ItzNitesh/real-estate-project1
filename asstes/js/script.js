const galleryImg = [
  { img: "./images/gallery/gallery1.webp" },
  { img: "./images/gallery/gallery2.webp" },
  { img: "./images/gallery/gallery3.webp" },
  { img: "./images/gallery/gallery3.webp" },
  { img: "./images/gallery/gallery4.webp" },
  { img: "./images/gallery/gallery5.webp" },
  { img: "./images/gallery/gallery6.webp" },
  { img: "./images/gallery/gallery7.webp" },
  { img: "./images/gallery/gallery8.webp" },
  { img: "./images/gallery/gallery9.webp" }
];

const clickImg = document.querySelectorAll('.clickImg');
const mainImg = document.getElementById("main-img");

clickImg.forEach((img) => {
  img.addEventListener("click", () => {

    // fade out
    mainImg.style.opacity = "0";

    setTimeout(() => {
      mainImg.src = img.src;

      // fade in
      mainImg.style.opacity = "1";
    }, 200);

  });
});



const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

// open
images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// close button
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// close on outside click
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});