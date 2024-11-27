// Selecting Elements
const slides = document.querySelectorAll(".slide");
const counter = document.querySelector(".counter");
const dots = document.querySelectorAll(".dot");

// Creating a Variable for the current slide
let currentSlide = 0;

// Functionality Show Slide Feature
function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  // Hide slides that are not active
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[currentSlide].style.display = "block";

  // Update Image Number
  counter.textContent = `Bilde ${currentSlide + 1} av ${slides.length}`;

  // Update Bullets
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

// Functionality Change Slide
function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Functionality Show the Selected Slide
function goToSlide(index) {
  showSlide(index);
}

// Starte Slide Show
showSlide(currentSlide);
