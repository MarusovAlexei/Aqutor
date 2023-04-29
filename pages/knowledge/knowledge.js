const addItem = (
  subtitle,
  header,
  headerLink,
  textContent,
  mainImg,
  doctorImg,
  doctorName,
  doctorProf,
  timeToRead
) => {
  var div = document.createElement("div");
  div.classList.add("knowledge-item");

  var imgDiv = document.createElement("div");
  imgDiv.classList.add("knowledge-item__img", "knowledge-img__animation");
  var img = document.createElement("img");
  img.setAttribute("src", `${mainImg}`);
  img.setAttribute("alt", "item");
  imgDiv.appendChild(img);

  var descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add(
    "knowledge-item__description",
    "knowledge-img__text"
  );
  var subtitleSpan = document.createElement("span");
  subtitleSpan.classList.add("knowledge-item__subtitle");
  subtitleSpan.textContent = `${subtitle}`;
  var h3 = document.createElement("h3");
  var a = document.createElement("a");
  a.setAttribute("href", `${headerLink}`);
  a.textContent = `${header}`;
  h3.appendChild(a);
  var p = document.createElement("p");
  p.classList.add("knowledge-item__content");
  p.textContent = `${textContent}`;

  var contentBottomDiv = document.createElement("div");
  contentBottomDiv.classList.add("knowledge-item__content-bottomn");

  var leftDiv = document.createElement("div");
  leftDiv.classList.add("knowledge-content-bottomn__left");
  var leftImgDiv = document.createElement("div");
  leftImgDiv.classList.add("knowledge-content-bottomn__left-img");
  var leftImg = document.createElement("img");
  leftImg.setAttribute("src", `${doctorImg}`);
  leftImg.setAttribute("alt", "autor");
  leftImgDiv.appendChild(leftImg);
  var leftDescriptionDiv = document.createElement("div");
  leftDescriptionDiv.classList.add("knowledge__left-description");
  var leftNameDiv = document.createElement("div");
  leftNameDiv.classList.add("knowledge__left-description-name");
  leftNameDiv.textContent = `${doctorName}`;
  var leftDoctorDiv = document.createElement("div");
  leftDoctorDiv.classList.add("knowledge__left-description-doctor");
  leftDoctorDiv.textContent = `${doctorProf}`;
  leftDescriptionDiv.appendChild(leftNameDiv);
  leftDescriptionDiv.appendChild(leftDoctorDiv);
  leftDiv.appendChild(leftImgDiv);
  leftDiv.appendChild(leftDescriptionDiv);

  var rightDiv = document.createElement("div");
  rightDiv.classList.add("content-bottomn__right");
  var rightImgDiv = document.createElement("div");
  rightImgDiv.classList.add("content-bottomn__right-img");
  var rightImg = document.createElement("img");
  rightImg.setAttribute("src", "./../../assets/img/pages/knowledge/update.png");
  rightImg.setAttribute("alt", "time");
  rightImgDiv.appendChild(rightImg);
  var rightValueDiv = document.createElement("div");
  rightValueDiv.classList.add("content-bottomn__right-value");
  rightValueDiv.textContent = `${timeToRead}`;
  rightDiv.appendChild(rightImgDiv);
  rightDiv.appendChild(rightValueDiv);

  contentBottomDiv.appendChild(leftDiv);
  contentBottomDiv.appendChild(rightDiv);

  descriptionDiv.appendChild(subtitleSpan);
  descriptionDiv.appendChild(h3);
  descriptionDiv.appendChild(p);
  descriptionDiv.appendChild(contentBottomDiv);

  div.appendChild(imgDiv);
  div.appendChild(descriptionDiv);

  const divWrapper = document.querySelector(".knowledge-items");
  divWrapper.appendChild(div);
};

addItem(
  "Худеющим",
  "Ионизированная вода и потеря веса",
  "#",
  "Как и многие люди, я долгое время желала похудеть. Хочу поделиться своей историей о том, как мне помогла ионизированная вода!",
  "./../../assets/img/pages/knowledge/item1.png",
  "./../../assets/img/pages/knowledge/autors/smolohin.png",
  "Иван Смолохин",
  "врач",
  "4 минуты чтения"
);

addItem(
  "Худеющим",
  "Ионизированная вода и потеря веса",
  "#",
  "Как и многие люди, я долгое время желала похудеть. Хочу поделиться своей историей о том, как мне помогла ионизированная вода!",
  "./../../assets/img/pages/knowledge/item1.png",
  "./../../assets/img/pages/knowledge/autors/smolohin.png",
  "Иван Смолохин",
  "врач",
  "4 минуты чтения"
);
