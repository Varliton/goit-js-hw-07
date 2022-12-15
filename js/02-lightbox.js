import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
// galleryContainer.addEventListener("click", onClickOpenBigImage);
function createGalleryMarkup(imageData) {
  return imageData
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join(" ");
}
galleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);
const gallery = new SimpleLightbox('.gallery a', {
    captionPosition : 'bottom',
    captionDelay : 250,
    captionsData : 'alt',
})
console.log(galleryItems);
