'use strict';
const movements=[100,800,600,-500,-300,1000,-200];
//find the index of the value of -500
const index=movements.findIndex(mov => mov===-500);
console.log(index);