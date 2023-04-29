const sliderImages = [
    {
      city: 'г. Москва, официальный магазин компании',
      address: '107045, Российская Федерация, Московская область, г. Москва, Большая Сухаревская площадь 14/7, магазин «Ионизаторы воды»',
      schedule: 'пн-сб: 10.00 — 20.00 (вс: выходной)',
      phones: ['8 (800) 505-55-82', '+7 915 296 07 66'],
      imageSrc: './../../assets/img/pages/contacts/image 18.png',
    },
    {
      city: 'г. Самара, официальный магазин компании',
      address: '443010, Российская Федерация,  Самарская область, г. Самара, улица Льва Толстого 67, магазин «Ионизаторы воды»',
      schedule: 'пн-сб: 10.00 — 19.00 (вс: выходной)',
      phones: ['8 (800) 505-55-82', '+7 915 296 07 66'],
      imageSrc: './../../assets/img/pages/contacts/PC.png',
    }
  ];
  
  const sliderContainer = document.querySelector('.slider-container');
  const sliderLeft = document.querySelector('.slider-left');
  const storeImage = document.querySelector('.store-image');
  const cityName = document.querySelector('.city-name');
  const storeInfoBlocks = document.querySelectorAll('.store-info');
  const addressText = storeInfoBlocks[0].querySelector('.info-text');
  const scheduleText = storeInfoBlocks[1].querySelector('.info-text');
  const phonesText = storeInfoBlocks[2].querySelector('.info-text');
  const sliderArrowLeft = document.querySelector('.slider-arrow-left');
  const sliderArrowRight = document.querySelector('.slider-arrow-right');
  
  let currentSlide = 0;
  
  function showSlide(slideIndex) {
    const slide = sliderImages[slideIndex];
    cityName.textContent = slide.city;
    addressText.textContent = slide.address;
    scheduleText.textContent = slide.schedule;
    phonesText.textContent = slide.phones.join(', ');
    storeImage.src = slide.imageSrc;
  }
  
  function slideLeft() {
    currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
    showSlide(currentSlide);
  }
  
  function slideRight() {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    showSlide(currentSlide);
  }
  
  sliderArrowLeft.addEventListener('click', slideLeft);
  sliderArrowRight.addEventListener('click', slideRight);
  
  // показываем первый слайд
  showSlide(currentSlide);


  document.querySelectorAll(".dropdown-container").forEach(function (container) {
    var header = container.querySelector(".dropdown-header");
  
    header.addEventListener("click", function () {
      container.classList.toggle("open");
    });
  });