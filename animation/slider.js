const sliderText = document.querySelector(".slider-text");
const sliderImage = document.querySelector(".slider-image img");
const sliderCaption = document.querySelector(".slider-caption");
const sliderArrowLeft = document.querySelector(".slider-arrow-left");
const sliderArrowRight = document.querySelector(".slider-arrow-right");

// Массивы с текстом, изображениями и подписями для слайдера
const sliderTextArray = ["Текст слайда 1", "Текст слайда 2", "Текст слайда 3"];
const sliderImageArray = [
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/400x200",
  "https://via.placeholder.com/500x200",
];
const sliderCaptionArray = [
  "Подпись к изображению 1",
  "Подпись к изображению 2",
  "Подпись к изображению 3",
];

let currentSlide = 0; // Текущий слайд

// Функция для обновления контента слайда
function updateSlide() {
  sliderText.querySelector("h2").textContent = `Заголовок слайда ${
    currentSlide + 1
  }`;
  sliderText.querySelector("p").textContent = sliderTextArray[currentSlide];
  sliderImage.setAttribute("src", sliderImageArray[currentSlide]);
  sliderCaption.textContent = sliderCaptionArray[currentSlide];
}

function handleArrowClick(event) {
  if (event.target === sliderArrowLeft) {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = sliderTextArray.length - 1;
    }
  } else if (event.target === sliderArrowRight) {
    currentSlide++;
    if (currentSlide > sliderTextArray.length - 1) {
      currentSlide = 0;
    }
  }
  updateSlide();
}

sliderArrowLeft.addEventListener("click", handleArrowClick);
sliderArrowRight.addEventListener("click", handleArrowClick);

// Добавим функцию, которая будет менять размер слайдера при изменении размеров окна браузера
function handleResize() {
  const sliderContainer = document.querySelector(".slider-container");
  const containerWidth = sliderContainer.offsetWidth;
  const sliderWidth = containerWidth * 0.8;
  const sliderHeight = sliderWidth * 0.5;
  sliderImage.style.width = `${sliderWidth}px`;
  sliderImage.style.height = `${sliderHeight}px`;
}

window.addEventListener("resize", handleResize);

// Вызовем функцию для первоначального обновления контента и установим размеры слайдера при загрузке страницы
updateSlide();
handleResize();
