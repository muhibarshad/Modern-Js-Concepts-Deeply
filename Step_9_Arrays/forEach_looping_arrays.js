"use strict";

/*
=======================================
               Note
=======================================
Concept:
    forEach is just the method the array.So this method is the function and this function 
    is actually the higher order function callBack the function by taking another function 
    as an argumnet.It callBack this argumnentative function when we need it.
Difference:
    The main difference between the " for of loop " and the " for each loop" is the 
    we cannot use the " break and Continue " statement in the forEach loops.forEach
    are always be looped in the entire array.
    Second difference is that when we distruct the arr.entires() method in the "For of "
    loop then the first element of the distruter is always the index of the array elemnet and 
    second is the value of the array element. But in "forEach" loops it is the viceVersa
    as the first argument passing the callBack function is always the value of the element array 
    and second argument is always the index of the element array.(Additional:And the third is the
    entire array which is looping )
forEach on Maps and Sets:
    Maps has key ,value and sets have the unique values .
    In sets ,major point is that they have no any key value so we may use the 
    throwaway variable instead of it .    
*/

//FOR-OF
console.log("--FOR-OF--");
const movements = [200, 900, -1000, 700, 8000, -5000, 18000, -4000];
for (const [index, movement] of movements.entries()) {
  movement > 0 && console.log(`${index + 1} You have deposited ${movement} .`);
  movement < 0 &&
    console.log(`${index + 1} You have withdraw ${Math.abs(movement)} .`);
}

//FOR-EACH
console.log("--FOR-EACH--");
movements.forEach(function (movement, index, arr) {
  movement > 0 && console.log(`${index + 1} You have deposited ${movement} .`);
  movement < 0 && console.log(`${index + 1} You have withdraw ${movement} .`);
  movement === arr.at(-1) &&
    console.log(`Your entire account details is here ${arr.join("\n")}`);
});

//MAPS
const data=new Map([
   ['name','Muhib arshad'],
   [true,'Yes he is the CR of the class'],
   [1,'On this stage he learning JS']
]);
data.forEach(function(value,key,map){
   console.log(`${key} = ${value}`);
});


//SETS
const applicants=new Set(['Muhib','Ali','Bilal','Ali','hamza','Muhib']);
applicants.forEach(function(value,_,set){
    console.log(`${_} = ${value}`);//the key and value are same beacuse no index in sets
 });
 

//On every exectuation of the forEach loop the index elemnet is passend as 
// 0:200
//1:900
//...ans so On 
//this means on each iteration the higher order forEach function callBack the 
//argumentative function