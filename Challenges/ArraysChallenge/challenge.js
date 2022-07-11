'use strict';

// [9, 16, 6, 8, 3];
// [10, 5, 6, 1, 4];
let Juliadata =[3, 5, 2, 12, 7];
let Katedata =[4, 1, 15, 8, 3];
Juliadata.splice(1,1);
Juliadata.splice(-2);
const correctedData=[...Juliadata,...Katedata];
const checkDogs=function(corrected){
  corrected.forEach(function(age,i){
     age>=3?console.log(`Dog number ${i+1} 
     is an adult 🐕, and is ${age} years old`):console.log(`Dog number ${i+1} is still a puppy 🐶`);
  })
}

checkDogs(correctedData);
