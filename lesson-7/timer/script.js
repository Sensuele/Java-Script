'use strict';

let timer = document.querySelector('.timer');

let clock = setTimeout(function startTimer() {
    let time = new Date(),
        hours = time.getHours().toString(),
        minutes = time.getMinutes().toString(),
        seconds = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }
    timer.textContent = hours + ':' + minutes + ':' + seconds;
    


    setTimeout(startTimer, 1000);
});