'use strict';

const movements=[100,800,600,-500,-300,1000,-200];
const deposits=movements.filter(mov => mov>0);
const withdrawal=movements.filter(mov => mov<0);
console.log(deposits);
console.log(withdrawal);

