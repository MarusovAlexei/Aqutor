const spawn = (defaultClass, activeClass, option = 0.5) => {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add(`${activeClass}`);
      }
    });
  }

  let options = {
    threshold: [option],
  };

  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(`.${defaultClass}`);

  for (let elem of elements) {
    observer.observe(elem);
  }
};

/* header */

spawn("header-animation", "element-show");

/* under header */

spawn("header-animation__under", "element-show__under");

/* water-property */

// ionizator
spawn("property-ionizator__animation", "ionizator-show");
// shadow
spawn("property-shadow__animation", "show-shadow");
// item
spawn("property-item-right__animation", "item-right-show");
spawn("property-item-left__animation", "item-left-show");
spawn("property-item-bottom__animation", "item-bottom-show");
// water background
spawn("property-water-bg__animation", "water-bg-show");
// water
spawn("property-water__animation", "water-show");
// ionizator
spawn("property-ionizator__animation", "ionizator-show");
// items
spawn("property-item-right__animation", "item-right-show");
spawn("property-item-left__animation", "item-left-show");
spawn("property-item-bottom__animation", "item-bottom-show");
// water background
spawn("property-water-bg__animation", "water-bg-show");
// water
spawn("property-water__animation", "water-show");
// text
spawn("property-text__animation", "show-text");

/* water-ionized */

// background section
spawn("ionized-bg__animation", "show-bg", 0.05);
// items
spawn("ionized-item1__animation", "show-item1");
spawn("ionized-item2__animation", "show-item2");
spawn("ionized-item3__animation", "show-item3");
spawn("ionized-item4__animation", "show-item4");
spawn("ionized-item5__animation", "show-item5");
spawn("ionized-item6__animation", "show-item6");
// glass
spawn("ionized-glass__animation", "show-glass");

/* doctors-opinion */

// description
spawn("opinion__description-text__animation", "show-text");
// image
spawn("opinion__description-img__animation", "show-img");
// button
spawn("opinion__description-btn__animation", "show-btn");

/* intro */

// button
spawn("intro-btn__animation", "show-btn");
// ionizer
spawn("ionizer__animation", "ionizer-show");
// bottle
spawn("bottle__animation", "bottle-show");
// water
spawn("water1__animation", "water1-show");
spawn("water2__animation", "water2-show");

/* our products */

// label
spawn("card-lable__animation", "show-label");
// item
spawn("card-item__animation", "show-item");
// text
spawn("card-text__animation", "show-text");
// btn
spawn("card-btn__animation", "show-btn");

/* questions */

// accrodion content
spawn("accordion-item__animation", "show-accordion");
// accordion btn
spawn("accordion-btn__animation", "show-accordion-btn");
// accordion reverce
spawn("accordion-item__reverse-animation", "show-reverse-accordion")