'use strict';

let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

let content = '';

for (let i=0; i<7; i++){
  let day = week[i];
  if (i+1 === new Date().getDay()){
    day = '<em>' + day + '</em>';
  }
  if ( i === 5 || i === 6 ){
    day = '<b>' + day + '</b>';
  }
  
  content += day + '<br>';
}

document.write(content);


let arr = ['2347', '7725', '9327', '3923', '1234', '7813', '3377'];

for (let i=0; i<arr.length; i++){
  if (arr[i][0] === '3' || arr[i][0] === '7'){
    console.log(arr[i]);
  }
}