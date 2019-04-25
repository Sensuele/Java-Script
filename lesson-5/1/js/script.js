'use strict'

let menu = document.querySelector('.menu'),
    menuList = document.createElement('li'),
    menuItem = document.querySelectorAll('.menu-item'),  
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    answer = document.getElementById('prompt'),
    question = prompt('Ваше отношение к технике apple?', '');

// добавляем пятый элемент и ставим элементы по порядку
menu.appendChild(menuList);
menuList.classList.add('menu-item');
menuList.textContent = 'Пятый пункт';
menu.removeChild(menuItem[2]);
menu.insertBefore(menuItem[2], menuItem[1]);

// меняем картинку заднего фона
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

// меняем заголовок
title.textContent = 'Мы продаем только подлинную технику Apple';
// удаляем рекламу
column[1].removeChild(adv);
// добавляем ответ пользователя в блок
answer.appendChild(document.createTextNode(question));

