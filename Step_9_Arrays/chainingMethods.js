"use strict";

//suppose we want to calculte the total deposit values from PKR to USD
const movements = [100, 800, 600, -500, -300, 1000, -200];
const PKR_to_USD = 210.07;
const totalDepositAmount = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * PKR_to_USD)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositAmount);
