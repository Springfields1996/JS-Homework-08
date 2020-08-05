import photos from "./js/gallery-items.js";

// Получение ссылок на DOM
const gallery = document.querySelector(".js-gallery");
const modal = document.querySelector(".lightbox");
const overlay = document.querySelector(".lightbox__content");
const bigPhoto = document.querySelector(".lightbox__image");
const closeButton = document.querySelector(".lightbox__button");

// Перебор и вставка изображений из массива обьектов
const photo = photos.reduce(
  (acc, photo) =>
    acc +
    `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${photo.original}"
  >
    <img
      class="gallery__image"
      src="${photo.preview}"
      data-source="${photo.original}"
      alt="${photo.description}"
    />
  </a>
</li>`,
  ""
);
gallery.insertAdjacentHTML("afterbegin", photo);

// Делегирование

gallery.addEventListener("click", checkClick);
closeButton.addEventListener("click", closeModalWindow);
overlay.addEventListener("click", closeModalThroughtBackdrop);

function checkClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") {
    return;
  }
  openModalWindow(target);
}

function openModalWindow(target) {
  modal.classList.add("is-open");
  window.addEventListener("keydown", closeModalThroughtEscape);
  getLinkOnBigImage(target);
}

function getLinkOnBigImage(target) {
  bigPhoto.src = target.dataset.source;
  bigPhoto.alt = target.dataset.alt;
  closeModalWindow();
}

function closeModalWindow() {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  deleteClassIsOpen();
  cleanPhotoSource();
}

function deleteClassIsOpen() {
  modal.classList.remove("is-open");
}

function cleanPhotoSource() {
  bigPhoto.src = "";
  bigPhoto.alt = "";
}

function closeModalThroughtBackdrop(event) {
  if (event.target === event.currentTarget) {
    deleteClassIsOpen();
    cleanPhotoSource();
  }
}

function closeModalThroughtEscape(event) {
  if (event.code === "Escape") {
    deleteClassIsOpen();
    cleanPhotoSource();
  }
}
