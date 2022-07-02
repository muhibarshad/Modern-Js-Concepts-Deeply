//=====================================================================
/*Strings are basically the permititative dataTypes:
 These are iterable.
 when we make the string it converts into the objects.So,we can call the methods on that strings.
 after appling the methods on the string it retures the dataType.
 */
//=====================================================================
'use strict';

//iterables as array
const shopName='Muhib Qalandari Chaiwala';
const located='Near the short bazar';
console.log(shopName[0]);//M
console.log(shopName[1]);//u
console.log(shopName[2]);//h

//methods
console.log(shopName.length);//24
console.log(shopName.indexOf('a'));//7
console.log(shopName.lastIndexOf('a'));//23
console.log(shopName.slice(6));//Qalandari chaiwala
console.log(shopName.slice(0,5));//Muhib
console.log(shopName.slice(-2));//al
console.log(shopName.slice(0,-1));//Muhib Qalandari Chaiwal
console.log(shopName.slice(shopName.indexOf(' ')+1));//Qalandari Chaiwala

//strings to objects and object to strings
console.log(typeof new String('Muhib'));//object
console.log(typeof new String('Muhib').indexOf('M'));//number
console.log(typeof new String('Muhib').slice(0));//string

//practical example
const cahiOrder=function(chai){
   if(chai.slice(-2)==='A1' || chai.slice(-1)==='A'){
    console.log(`You are ordering the VIP version.`);
   }
   else{
    console.log('You are ordering the local version');
   }
};
const chai1='Dandoori Chai A1';
const chai2='Dandoori Chai A';
const chai3='Dandoori Chai A-';
cahiOrder(chai1);
cahiOrder(chai2);
cahiOrder(chai3);