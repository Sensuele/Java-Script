'use strict';


let age = document.getElementById('age');
    
function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}


let user = showUser.bind(age);

user('Ilon', 'Mask');