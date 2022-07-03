'use strict';
/***Raed the  Argument passing portion in the Readme.md file****/

let orderNO=34;
let orderValues={
   name:'Muhib Arshad',
   item:'Baryani',
   noOfitems:3,
   confirm:true,
};

//===========================
// TEST :01
//===========================
const checkOrderReady=function(order_no,order){
   order_no=4;//after the completing previous orders
   order.name='Mr ' +order.name;
   order.confirm===true ?alert('Your order is confirmed'):alert('Sorry Sir,you have no any order.Order Now.');
}
checkOrderReady(orderNO,orderValues);
console.log(orderNO);//original value of the order is not changed
console.log(orderValues);//original value of name is changed

//===========================
// TEST :02
//===========================
const cancelOrder=function(order){
    order.confirm=false;
}
cancelOrder(orderValues);//change the original value
checkOrderReady(orderNO,orderValues);//so paid is now false
console.log(orderValues);//original value of paid is changed