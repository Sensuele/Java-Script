function modal() {
  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      description = document.querySelectorAll('.description-btn');

  more.addEventListener('click', () => {
    overlay.style.display = 'block';
    more.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });   
  // Привязать модальное окно к кнопкам “Узнать подробнее” в табах
  for (let i = 0; i < description.length; i++){
    description[i].addEventListener('click', () => {
      overlay.style.display = 'block';
      description[i].classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    }); 
  }
   
  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
}

module.exports = modal;