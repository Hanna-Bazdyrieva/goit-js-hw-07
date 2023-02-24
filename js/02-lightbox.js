import { galleryItems } from "./gallery-items.js";

const galleryPerentEl = document.querySelector(".gallery");
const galleryItemsMarkup = createGallaryItemsMarkup(galleryItems);

galleryPerentEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250});

function createGallaryItemsMarkup() {
 return galleryItems
    .map(
      ({ preview, original, description }) => 
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"  title="${description}" />
          </a>`)
    .join("");
}