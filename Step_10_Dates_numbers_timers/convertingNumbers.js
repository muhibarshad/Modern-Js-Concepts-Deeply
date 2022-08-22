'use strict';

//Convert the string into numbers
console.log(Number('20'));
console.log(+('20'));

//Parse(converting data into another format) strings to numbers
console.log(Number.parseInt('20px'));
console.log(Number.parseInt('2.9px'));
console.log(Number.parseFloat('2.9px'));

//isNan(use thid when you have to check the given value is not a number)
console.log(Number.isNaN(30));
console.log(Number.isNaN('30'));
console.log(Number.isNaN(+'30'));
console.log(Number.isNaN(+'30xe'));
console.log(Number.isNaN(2/0));//Infinity is not a number

//isFinite(use to check the given value is a number)
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20xc'));
console.log(Number.isFinite(20/0));

//isInteger
console.log(Number.isInteger(20));
console.log(Number.isInteger(20.0));
console.log(Number.isInteger(40/0));
