window.addEventListener('DOMContentLoaded', () => {
  
  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),   
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }   
  hideTabContent(1); 

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', (e) => {
    let target = e.target;
    if (target && target.classList.contains('info-header-tab')) {
      for(let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer
  let deadline = '2019-05-09';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60)));

    return {
      'total' : t,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    
    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      // подставляем 0 перед значениями, которые состоят из одной цифры
      if (hours.textContent < 10){
      hours.textContent = '0' + t.hours;
      }
      if (minutes.textContent < 10){
        minutes.textContent = '0' + t.minutes;
      }
      if (seconds.textContent < 10){
        seconds.textContent = '0' + t.seconds;
      }  
      // Изменить скрипт так, что если дата уже прошла выводилось: 00:00:00 
      if (t.total <= 0) {
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        clearInterval(timeInterval);
      } 
    }     
  }
  setClock('timer', deadline);
  

  // Modal

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

  // Form

  let message = {
    loading: '<div style="text-align: center; margin-top: 10px"><img src="img/icons/loader.gif" alt=""> </div>',
    success: '<div style="text-align: center; margin-top: 10px"><img src="img/icons/checked.png" alt=""> </div>',
    failure: '<div style="filter: invert(1); text-align: center; margin-top: 10px"><img src="img/icons/fail-1.png" alt=""> </div>',
  };

  let form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'),
      contactForm = document.getElementById('form'),
      statusMessage = document.createElement('div');
      statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', (e) => {
      e.preventDefault();
      elem.appendChild(statusMessage);

      let formData = new FormData(elem);

      function postData(data) {

        return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();

          request.open('POST', 'server.php');

          request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

          request.onreadystatechange = () => {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 3) {
                resolve();
              } else {
                reject();
              }
            }
          };
          request.send(data);
        });
      } // End postData

      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }
      postData(formData)
      .then(() => (statusMessage.innerHTML = message.loading))
      .then(() => (statusMessage.innerHTML = message.success))
      .catch(() => (statusMessage.innerHTML = message.failure))
      .then(clearInput);
    });
  }    
  sendForm(form);
  sendForm(contactForm);

  // валидация телефона
  let tels = document.querySelectorAll('input[type = "tel"]');

  for (let i = 0; i < tels.length; i++) {
    tels[i].addEventListener('input', function() {
      this.value = this.value.replace(/[^\d+]/g, '');
    });
  }
  // slider

  let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);    
  function showSlides(n) {

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active'); 
  }    

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function() {
    plusSlides(-1);
  });
  next.addEventListener('click', function() {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
        currentSlide(i);
      }
    }
  });

  // calc 

  let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;

      totalValue.innerHTML = 0;

      persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(restDays.value == '' || persons.value == 0 ) {  // исправлен баг
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total;
        }
      });

      restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(persons.value == '' || restDays.value == 0) {  // исправлен баг
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total;
        }
      });
     

      place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
        } else {
          let a = total;
          totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
      });
      
      // Запрет на введение дробных чисел, знака + и е
  let count = document.querySelectorAll('input[type = "number"]');
  
  for (let i = 0; i < count.length; i++) {
    count[i].addEventListener('input', function() {
      this.value = this.value.replace(/[^\d]/g, '');
    });
  }
});
