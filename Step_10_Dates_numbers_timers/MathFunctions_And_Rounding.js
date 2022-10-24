'use strict';

//Maths Functions
console.log(Math.sqrt(36));
console.log(8**(1/3));
console.log(Math.max(9,7,2,5,3));//9
console.log(Math.min(9,7,2,5,3));//2
console.log(Math.min(9,7,'2',5,3));//2
console.log(Math.min(9,7,'2px',5,3));//NAN
console.log(Math.PI*Number.parseInt('12px')**2);
console.log(Math.trunc(23.6));
console.log(Math.floor(23.6));
console.log(Math.ceil(23.6));
console.log(Math.round(23.6));
console.log(Math.round(23.3));
console.log(Math.floor(-23.3));//fllor value gives
console.log((2.777).toFixed(2));// same as setPrecision in the C++
console.log(Math.trunc(Math.random()*10)+1);
const getRandom=(max,min)=>Math.trunc(Math.random()*(max-min)+1)+min;
console.log(getRandom(10,1));

