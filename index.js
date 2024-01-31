const nextDom = document.getElementById('next');
const prevDom = document.getElementById('prev');
const carouselDom = document.querySelector('.carousel');
const listItemDom = document.querySelector('.carousel .carousel__list');
const thumbnailDom = document.querySelector('.carousel .thumbnail');

const timeRunning = 3000;
let runTimeOut;

nextDom.onclick = function() {
  showSlider('next');
}
prevDom.onclick = function() {
  showSlider('prev');
}
function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carousel .carousel__list .carousel__list_item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .thumbnail__item');
  
  if (type === 'next') {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add('next');
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add('prev');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning)
}
