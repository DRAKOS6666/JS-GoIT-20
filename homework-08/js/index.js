import images from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightBox: document.querySelector(".lightbox"),
  modalImage: document.querySelector(".lightbox__image"),
};

const galleryList = images.reduce((liArr, imgData, index) => {
  const liItem = document.createElement("li");
  liItem.classList.add("gallery__item");
  const refItem = document.createElement("a");
  refItem.classList.add("gallery__link");
  liItem.appendChild(refItem);
  const imgItem = document.createElement("img");
  imgItem.classList.add("gallery__image");
  imgItem.setAttribute("alt", imgData.description);
  imgItem.setAttribute("data-source", imgData.original);
  imgItem.setAttribute("data-index", index);
  imgItem.setAttribute("src", imgData.preview);
  refItem.appendChild(imgItem);
  liArr.push(liItem);

  return liArr;
}, []);

const modalOpen = function (event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  refs.lightBox.classList.add("is-open");
  fillModalImage(event.target);

  refs.lightBox.addEventListener("click", modalMouseEvent);
  window.addEventListener("keydown", modalKeboardEvent);
};

const fillModalImage = function (obj) {
  if (obj.dataset.index && obj.alt && obj.src) {
    refs.modalImage.src = obj.dataset.source;
    refs.modalImage.alt = obj.alt;
    refs.modalImage.dataset.index = obj.dataset.index;
  }
  return;
};

const modalMouseEvent = function (event) {
  if (
    event.target.className === "lightbox__content" ||
    event.target.className === "lightbox__button"
  ) {
    event.target.removeEventListener("click", modalMouseEvent);
    modalClose();
  }
  return;
};

const modalKeboardEvent = function (event) {
  const activeIndex = galleryImages.indexOf(
    galleryImages.find(
      (image) => refs.modalImage.dataset.index === image.dataset.index
    )
  );

  switch (event.code) {
    case "Escape":
      modalClose();
      break;

    case "ArrowRight":
      if (activeIndex <= galleryImages.length - 2) {
        fillModalImage(galleryImages[activeIndex + 1]);
      } else fillModalImage(galleryImages[0]);
      break;

    case "ArrowLeft":
      if (activeIndex >= 1) {
        fillModalImage(galleryImages[activeIndex - 1]);
      } else fillModalImage(galleryImages[galleryImages.length - 1]);
      break;

    default:
      break;
  }
  return;
};

const modalClose = function () {
  refs.lightBox.classList.remove("is-open");
  refs.modalImage.setAttribute("src", "");
  refs.modalImage.setAttribute("alt", "");
  refs.modalImage.setAttribute("data-index", "");

  refs.lightBox.removeEventListener("click", modalMouseEvent);
  window.removeEventListener("keydown", modalKeboardEvent);
};

refs.gallery.append(...galleryList);

const galleryImages = Array.from(document.querySelectorAll(".gallery__image"));

refs.gallery.addEventListener("click", modalOpen);
