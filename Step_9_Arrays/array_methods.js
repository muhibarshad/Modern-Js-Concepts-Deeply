"use strict";
/*
=================================
           Arrays Methods
=================================
 We should have some methods on teh arrays as on strings but some diference between them.
 The main difference that always be rememberable is the mutating or non-mutating the arrays.
 To clearify the method ,use the """mdn arrays (meyhodName)""" very helpful.
>>>>>Some common important methods are here.
  arr.slice(startingIndex,endingIndex-1);(Slice method never mutate the original array)
  arr.splice(startingIndex,countOfIndexExtracted);(Splice method always mutate the original array)
  arr.reverse();(always mutate the original array)
  arr.concate(arr2);(does not mutate the original array)
  arr.join('  ');(give the string with joining string ,does not mutate the arary )
>>>>>Some methods you already know
  arr.push();
  arr.pop();
  arr.on shift();
  arr.shift();
  arr.includes();
  arr.indexOf();
*/

//SLICE
let arr=['Jan','Feb','March','April','May','June'];
console.log(arr);
console.log(arr.slice(1));
console.log(arr.slice(1,4));
console.log(arr.slice(1,4));
console.log(arr.slice(-2));
console.log(arr.slice(1,-2));
console.log(arr);//does not mutate the array

//SPLICE
let arr1=['Jan','Feb','March','April','May','June'];
arr1.splice(1,3);
console.log(arr1);// mutate the original array
arr1.splice(1);

//REVERSE
let arr2=['Dec','Nov','Oct','Sep','Aug','July'];
arr2.reverse();
console.log(arr2);// mutate the original array


//CONCATE
const monthsName=arr.concat(arr2);
console.log(monthsName);
//another method we already know
console.log([...arr,...arr2]);
