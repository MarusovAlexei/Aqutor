const sliderImageTwo = document.querySelector(".slider2-image img");
const sliderArrowLeftTwo = document.querySelector(".slider2-arrow-left");
const sliderArrowRightTwo = document.querySelector(".slider2-arrow-right");

const sliderImageArrayTwo = [
  "./../../assets/img/pages/opimion/1.jpg",
  "./../../assets/img/pages/opimion/2.jpg",
  "./../../assets/img/pages/opimion/3.jpg",
  "./../../assets/img/pages/opimion/4.jpg",
  "./../../assets/img/pages/opimion/5.jpg",
];

let currentSlideTwo = 0;

function updateSlideTwo() {
  sliderImageTwo.setAttribute("src", sliderImageArrayTwo[currentSlideTwo]);
  sliderImageTwo.classList.remove("active");
  setTimeout(() => {
    sliderImageTwo.classList.add("active");
  }, 500);
}

function handleArrowClickTwo(event) {
  if (event.target === sliderArrowLeftTwo) {
    currentSlideTwo--;
    if (currentSlideTwo < 0) {
      currentSlideTwo = sliderImageArrayTwo.length - 1;
    }
  } else if (event.target === sliderArrowRightTwo) {
    currentSlideTwo++;
    if (currentSlideTwo > sliderImageArrayTwo.length - 1) {
      currentSlideTwo = 0;
    }
  }
  updateSlideTwo();
}

sliderArrowLeftTwo.addEventListener("click", handleArrowClickTwo);
sliderArrowRightTwo.addEventListener("click", handleArrowClickTwo);

updateSlideTwo();
