'use strict';
//looping an object is such that :
//property names looping  :Object.keys(objectName)
//property values looping  :Object.values(objectName)
//enteries(key,value)  looping  :Object.enteries(objectName)
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

//property names looping  :Object.keys(objectName)
let days=Object.keys(openingHours);
console.log(days);
let openingBanner=`Our shop is open for ${days.length} days Including :  `;
for(const day of days){
    openingBanner+=`${day} `;
}
console.log(openingBanner);

//property values looping  :Object.values(objectName)
let values=Object.values(openingHours);
console.log(values);

//enteries(key,value)  looping  :Object.enteries(objectName)
let enteries=Object.entries(openingHours);
console.log(enteries);


//practical problem
for(const [day,{open,close}] of Object.entries(openingHours)){
    console.log(`Our Shop at ${day} is opened at ${open} and closed at ${close}`)
}

