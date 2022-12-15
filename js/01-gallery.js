import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
galleryContainer.addEventListener('click', onClickOpenBigImage )
function createGalleryMarkup (imageData){
    return imageData.map(({preview , original , description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join(' ')
}
galleryContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

function onClickOpenBigImage (event) {
    if(event.target.nodeName !== "IMG"){
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600">
`);

    instance.show();
    window.addEventListener('keydown', closeModal)
    function closeModal(event){
        if(event.code === 'Escape'){
            instance.close();
            window.removeEventListener('keydown',closeModal);
        }
    }
}

console.log(galleryItems);
