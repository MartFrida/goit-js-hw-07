import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
{/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li> */}

const galleryList=document.querySelector('ul.gallery');

const createGaleryItems =(parrent)=> galleryItems.map(item => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');
  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.original;
  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image')
  galleryImage.src = item.preview;
  galleryImage.dataset.source = item.original;
  galleryImage.alt = item.description;

  parrent.append(galleryItem);
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
})

galleryList.append(createGaleryItems(galleryList));



// Реалізація делегування на ul.gallery і отримання url великого зображення.

galleryList.addEventListener('click', (ev)=>{
  ev.preventDefault();
  console.log(ev.target.dataset.source);
})


// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.