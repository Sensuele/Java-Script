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

  info.addEventListener('click', event => {
    let target = event.target;
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
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });   
  // Привязать модальное окно к кнопкам “Узнать подробнее” в табах
  for (let i = 0; i < description.length; i++){
    description[i].addEventListener('click', () => {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    }); 
  }
   
  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
});