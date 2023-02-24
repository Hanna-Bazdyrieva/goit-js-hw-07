import { galleryItems } from "./gallery-items.js";

const galleryPerentEl = document.querySelector(".gallery");
const galleryItemsMarkup = createGallaryItemsMarkup(galleryItems);

galleryPerentEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryPerentEl.addEventListener("click", getOriginalImg);

function createGallaryItemsMarkup() {
  const galleryItemMerkup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`
    )
    .join("");

  return galleryItemMerkup;
}

function getOriginalImg(event) {
  event.preventDefault();
  const isImgPrewiewEl = event.target.classList.contains("gallery__image");

  if (!isImgPrewiewEl) {
    return;
  }
  openModalOriginalImage(event);
}

function openModalOriginalImage(event) {
  const imgPreviewOriginalURL = event.target.dataset.source;
  const imgAlt = event.target.getAttribute("alt");
  const modalOriginalImage = basicLightbox.create(`
    <img src="${imgPreviewOriginalURL}" alt="${imgAlt}"></img>`);

  modalOriginalImage.show();
  
  const modalCloseOnEscapeKeydown = (event) => {
    event.preventDefault();

    if (event.code === "Escape") {
      modalOriginalImage.close();
      document.removeEventListener("keydown", modalCloseOnEscapeKeydown);
    }
  };

  document.addEventListener("keydown", modalCloseOnEscapeKeydown);
}

