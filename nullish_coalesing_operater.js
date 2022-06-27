'use strict';
//===========================
/*The exexutaion continues to the next operand only if the first operand is null or undefind.
NOt included the emoty string ""  or 0 :So the circuit is switch at the 0 or "" or sometruthy value */
//===========================

//===========
//Test :01
//===========
// let customerPresent=null;

//===========
//Test :02
//===========
// let customerPresent='present';

//===========
//Test :03
//===========
// let customerPresent=0;

console.log(customerPresent ?? 'No present');

