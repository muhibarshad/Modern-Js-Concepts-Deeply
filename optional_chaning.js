'use strict';
//==================================================
/*Some major points about the optional handling*/
/*If we want to know taht taht propert of the object is exst or not if exist than use it otherwise print some 
other message .Or same as if some method of the object is exist or not ,and if array elemsts exist or not 
if property does not exist than we are majorly get the error to get rid of the error and if property do not 
exist than get the undefind or null .use the optional chaining
*/
//==================================================


'use strict';
//ES6 object names are also written as  
const weekDays=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
let openingHours = {
  [weekDays[0]]: {
    open: "10:00 AM",
    close: "11:00 PM",
  },
  [weekDays[1]]: {
    open: "10:00 AM",
    close: "11:00 PM",
  },
  [weekDays[2]]: {
    open: "10:00 AM",
    close: "11:00 PM",
  },
  [weekDays[5]]: {
    open:0,
    close: "11:00 PM",
  },
};
let shop = {
  name: "Al madinah kilath house",
  catagerious: ["Gents", "Child", "female", "Readymade"],
  shopNo: 33,
  location: "Near the imran khan chowk",
  //ouside the object is called as
   openingHours,
  //Modern Es6 functions methods are also written as
  restOrder(first, ...second) {
    console.log(first);
    console.log(second);
  },
};


// //if not exist the open then get the error
// if(shop.openingHours.wed.open)
// {
//     console.log(shop.openingHours.wed.open);
// }

//solving the error by the optional chaining if not exist
console.log(shop.openingHours.Wed?.open);
//solving the error by the optional chaining if  exist
console.log(shop.openingHours.Tue?.open);


//real world problem
const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
for(const day of days){
    const open=shop.openingHours[day]?.open ?? 'Not fixed';
    console.log(`Our shop at the day ${day} is opened at ${open}`);
}

//for the methods
//if exist
console.log(shop.restOrder?.(0,1,2,5,8) ?? 'No it is not presnt');
//if not exist
console.log(shop.Order?.(0,1) ?? 'no ist is not present');


//arrays
// if exist
let arr=[{name:'Muhib',rollNo:40}];
console.log(arr[0]?.name ?? 'Name does not exist');
// if not exist
arr=[];
console.log(arr[0]?.name ?? 'Name does not exist');


