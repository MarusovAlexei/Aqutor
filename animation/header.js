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

// item
spawn("property-item-right__animation", "item-right-show");
spawn("property-item-left__animation", "item-left-show");
spawn("property-item-bottom__animation", "item-bottom-show");

// water background
spawn("property-water-bg__animation", "water-bg-show");

// water
spawn("property-water__animation", "water-show");
