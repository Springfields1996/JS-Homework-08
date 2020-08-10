import photos from "./gallery-items.js";

// Получение ссылок на DOM
const gallery = document.querySelector(".js-gallery");
const modal = gallery.nextElementSibling;
const overlay = document.querySelector(".lightbox__content");
const bigPhoto = overlay.firstElementChild;
const closeButton = document.querySelector(".lightbox__button");
let i;
let array;
console.log(overlay);

// Перебор и вставка изображений из массива обьектов
function makeArrayFromPhotos(someArray) {
  let photo = someArray.reduce(
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
  return photo;
}

gallery.insertAdjacentHTML("afterbegin", makeArrayFromPhotos(photos));

// Делегирование

gallery.addEventListener("click", checkClick);
closeButton.addEventListener("click", closeModalWindow);
overlay.addEventListener("click", closeModalThroughtBackdrop);

function checkClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") return;
  openModalWindow(target);
}

function openModalWindow() {
  modal.classList.add("is-open");
  getLinkOnBigImage();
  currentPhoto();
}

function currentPhoto() {
  array = Array.from(event.target.parentElement.parentNode.parentElement.children);
  i = array.indexOf(event.target.parentElement.parentElement);
}

function getLinkOnBigImage() {
  bigPhoto.src = event.target.dataset.source;
  bigPhoto.alt = event.target.dataset.alt;
  closeModalWindow();
}

function closeModalWindow() {
  if (event.target.nodeName !== "BUTTON") return;
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

function closeModalThroughtBackdrop() {
  console.log(event.target, event.currentTarget);
  if (event.target === event.currentTarget) {
    deleteClassIsOpen();
    cleanPhotoSource();
  }
}

function closeModalThroughtEscape() {
  if (event.code === "Escape") {
    deleteClassIsOpen();
    cleanPhotoSource();
  }
}

function nextOrPreviousPhoto() {
  if (event.code === "ArrowRight") {
    nextPhoto();
  } else if (event.code === "ArrowLeft") {
    prevPhoto();
  } else return;
}

function nextPhoto() {
  if (i >= 0 && i < array.length - 1) {
    i++;
    cleanPhotoSource();
    sourceForNextOrPrevPhoto();
  }
}

function prevPhoto() {
  if (i > 0 && i <= array.length - 1) {
    i--;
    cleanPhotoSource();
    sourceForNextOrPrevPhoto();
  }
}

function sourceForNextOrPrevPhoto() {
  const path =
    event.target.parentElement.parentElement.children[i].lastElementChild.lastElementChild
      .dataset;
  bigPhoto.src = path.source;
  bigPhoto.alt = path.alt;
}

window.addEventListener("keydown", closeModalThroughtEscape);
window.addEventListener("keydown", nextOrPreviousPhoto);
