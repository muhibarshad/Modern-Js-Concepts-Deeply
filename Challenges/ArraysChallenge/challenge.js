'use strict';

// // ==============================
// // Test data 01:
// let Juliadata =[3, 5, 2, 12, 7];
// let Katedata =[4, 1, 15, 8, 3]
// // ==============================

// // =================================
// // Test data 02:
// let Juliadata = [9, 16, 6, 8, 3];
// let Katedata = [10, 5, 6, 1, 4];
// // =================================


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



//streak ko bachana par rha ahi 
//streak ko bachana par rha ahi 


