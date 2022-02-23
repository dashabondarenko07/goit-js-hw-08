// Add imports above this line
import { galleryItems } from './gallery-items';

import 'simplelightbox/dist/simple-lightbox.min.css';
import 'simplelightbox/dist/simple-lightbox.min.js';

// Change code below this line
const gallery = document.querySelector('.gallery');
const imagesMarkup = createItemsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);

function createItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
                    <img 
                    class="gallery__image" 
                    src="${preview}" 
                    alt="${description}" />
                </a>`;
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250
});

console.log(galleryItems);