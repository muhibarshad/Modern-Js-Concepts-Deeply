
'use strict';
//ES6 object names are also written as  
const weekDays=['Mon','tue','Wed','Thu','Fri','Sat','Sun'];
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
