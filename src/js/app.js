// Selecting Elements
const slidePictrue = [
  { image: "./assets/images/picture-1.jpg", description: "sunset" },
  { image: "./assets/images/picture-2.jpg", description: "mountains" },
  { image: "./assets/images/picture-3.jpg", description: "sunrise" },
  { image: "./assets/images/picture-4.jpg", description: "beach" },
  { image: "./assets/images/picture-5.jpg", description: "forest" },
];


const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

const slideContainer = document.querySelector(".slideshow__container");
const bulletsContainer = document.querySelector(".bullets__container");

slidePictrue.forEach((slide, index) => {
  const slideElement = document.createElement("div");
  slideElement.classList.add("slide");

  if (index === 0) slideElement.classList.add("active");

  const imageElement = document.createElement("img");
  imageElement.src = slide.image;
  imageElement.alt = `lysbilde ${index + 1}`;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = slide.description;

  slideElement.appendChild(imageElement);
  slideElement.appendChild(descriptionElement);

  slideContainer.appendChild(slideElement);

  const bulletElement = document.createElement("span");
  bulletElement.classList.add("dot");

  if (index === 0) bulletElement.classList.add("active");

  bulletElement.addEventListener("click", () => goToSlide(index));
  bulletsContainer.appendChild(bulletElement);
});

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = Array.from(slides).findIndex((slide) =>
    slide.classList.contains("active")
  );

  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  currentSlide += direction;
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");

  updateCounter(currentSlide, slides.length);
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  updateCounter(index, slides.length);
}

function updateCounter(current, total) {
  const counter = document.querySelector(".counter");
  counter.textContent = `Bilde ${current + 1} av ${total}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (slides.length > 0) {
    slides[0].classList.add("active");
    dots[0].classList.add("active");
    updateCounter(0, slides.length);
  }
});

previousButton.addEventListener("click", () => changeSlide(-1));

nextButton.addEventListener("click", () => changeSlide(1));

nextButton.addEventListener("click", () => changeSlide(+1))
