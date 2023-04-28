const sliderWrapper = document.querySelector(".slider2-wrapper");
const sliderItems = document.querySelectorAll(".slider2-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let step;

function updateStep() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 1000) {
    step = sliderItems[0].offsetWidth * 3;
  } else {
    step = sliderItems[0].offsetWidth;
  }
}

updateStep();

function updateSliderPosition() {
  sliderWrapper.style.transform = `translateX(-${currentIndex * step}px)`;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < sliderItems.length - 3) {
    currentIndex++;
    updateSliderPosition();
  }
});

window.addEventListener("resize", () => {
  updateStep();
  updateSliderPosition();
});
