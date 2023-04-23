/* spawn animation */

const spawn = (defaultClass, activeClass) => {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add(`${activeClass}`);
      }
    });
  }

  let options = {
    threshold: [0.5],
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

/* water-ionized */

// background section
spawn("ionized-bg__animation", "show-bg");

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

// batton
spawn("opinion__description-btn__animation", "show-btn");
