function calc() {
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
}

module.exports = calc;