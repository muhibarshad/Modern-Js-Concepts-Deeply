'use strict';

const movements=[100,800,600,-500,-300,1000,-200];
const PKR_to_USD=210.07;
const amountAsUsd=movements.map(function(mov){
    return mov*PKR_to_USD;
});
console.log(amountAsUsd);

/*Special Note:
  The forEach method can mutate the array.But the map method does not mutate the array
*/
