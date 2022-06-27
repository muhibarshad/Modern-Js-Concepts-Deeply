'use strict';
//===========================
/*More interesting more execuatable */
//===========================

let shop1={
    name:'Muhib kilath house',
    noOfCustomers:0,
    location:'Near the Imran khan chowk'
}

let shop2={
    name:'Saif Dahi wala',
    location:'Near the Zargham shahed chowk',
    owner:'Muhib Arshad'
}

//// ===========
//// Test :01
////===========
// // for APIs check if the number of guest is present or not al=nd assign the deafult values 
// // to all the no of customers of shops
//// bad way 
// shop1.noOfCustomers=shop1.noOfCustomers || 10;
// shop2.noOfCustomers=shop2.noOfCustomers || 10;

//// ===========
//// Test :02
////===========
// //right way 
// shop1.noOfCustomers ||=10;
// shop2.noOfCustomers ||=10;

//// ===========
//// Test :03
////===========
// //Most best way
// //If the existing number of customers should be 0 then ?
// shop1.noOfCustomers ??=10;
// shop2.noOfCustomers ??=10;

//// ===========
//// Test :04
////===========
// //If the method ia alraedy present to chect it and assign new value then use the && 
// shop1.owner=shop1.owner && '<Anonymous';
// shop2.owner=shop2.owner && '<Anonymous';

//// ===========
//// Test :05
////===========
// //logiocal and assignmemt operater only works ad assign the value if first is true otherwise leaves it 
// shop1.owner &= '<Anonymous';
// shop2.owner &='<Anonymous';

console.log(shop1);
console.log(shop2);