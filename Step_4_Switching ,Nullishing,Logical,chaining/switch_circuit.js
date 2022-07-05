'use strict';
//===========================
/*Circuit Switch is to be such that :
******OR Operater********
if one truthy value appear than exectues it .Only if all the values are falsy then executes the last value
******AND Operater********
If one falsy value appear than exectues it .Only if all the values are truthy then executes the last value
*/
//===========================

let shop={
  name:'Al madinah kilath house',
  catagerious:['Gents','Child','female','Readymade'],
  shopNo:33,
  location:'Near the imran khan chowk',
  openingHours:{
    Mon:{
        open:'10:00 AM',
        close:'11:00 PM'
    },
    Tue:{
        open:'10:00 AM',
        close:'11:00 PM'
    },
    wed:{
        open:'10:00 AM',
        close:'11:00 PM'
    }
  },
  restOrder:function(first,...second){
    console.log(first);
    console.log(second);
  }
};

// ******OR Operater********
let  x=34 || 'Muhib';//first true stop at 34
x=undefined || null || "" || 78 || "Hello";//circuit switch at 78
console.log(x);
//Bad way
shop.customer='Yes Customer is present';
let present=shop.customer?shop.customer:'No customer';
console.log(present);
//Right way 
console.log(shop.customer || 'no customer');


// ******And Operater********
let  xAnd=34 && 'Muhib';//all true stop at last as muhib
xAnd=undefined && null && "" && 78 && "Hello";//fisr false so stop at undefind 
console.log(xAnd);
//Bad way
shop.customer='Yes Customer is present';
let presentAnd=shop.customer?'no customer':shop.customer;
console.log(presentAnd);
//Right way 
console.log(shop.customer && 'no customer');


// note:
//   use the circuit swiyching in many places of if/esle and ternary opearters