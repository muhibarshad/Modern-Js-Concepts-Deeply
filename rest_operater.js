'use strict';
//===========================
/*Rest opaerater is basically used 
for the Upcak the variable values into the packed array and objects
The rest operator should be the last elemennt*/
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

//Rest operater in arrays
const [a,b,...others]=[1,2,3,4,5,6];
console.log(a,b,others);

//Rest operator in objects 
const {name:Name ,...weekDays}=shop;
console.log(Name,weekDays);


//geting Square by the functions
const square=function(...arr){//packing the elements into the array
     for(let i=0;i<arr.length;i++)
     console.log(arr[i]*arr[i]);
     console.log(arr);
};
let x=[1,7,5,9];
square(...x);//unpacking the array 
square(2,4,6);
square(2,4,6,8,0);
square(2,4,6,9,6);

//example
shop.restOrder('cosmatics','piants','shirts','shalwar','kameez');
