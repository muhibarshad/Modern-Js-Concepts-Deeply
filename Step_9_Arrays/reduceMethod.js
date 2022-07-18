"use strict";

//Acculamtor->SnowBoll
const movements = [100, 800, 600, -500, -300, 1000, -200];
const currentbalance = movements.reduce(function (acc, mov) {
  return acc + mov;
}, 0); //0 is the staring number
console.log(currentbalance);

//Find Maximum
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]); //start from 0 index as a default maximum
console.log(max);
