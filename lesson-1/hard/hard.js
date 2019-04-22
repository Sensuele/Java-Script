'use strict';

let num = '33721';
let res;

num = num.split('');
res = num[0];

for (let i = 1; i < num.length; i++){
  res *= num[i];
}
console.log(res);

res = res ** 3;
console.log(res);
alert( res.toString().slice(0,2) );