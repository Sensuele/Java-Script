window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let tabs = require('./parts/tabs.js'),
      calc = require('./parts/calc.js'),
      form = require('./parts/form.js'),
      slider = require('./parts/slider.js'),
      timer = require('./parts/timer.js'),
      modal = require('./parts/modal.js'),
      mask = require('./parts/mask.js');

  tabs();
  calc();
  form();
  slider();
  timer();
  modal();
  mask();
});
