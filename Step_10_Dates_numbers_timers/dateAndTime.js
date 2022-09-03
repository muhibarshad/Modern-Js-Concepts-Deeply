"use strict";

//To get todays date and time
console.log(new Date());

//Parsing the strings
console.log(new Date("Tue Aug 30 2022"));
console.log(new Date("August 14,2022"));
console.log(new Date(2022, 8, 12, 7, 30, 15)); //Months in the JS are zero based

//TimeStamp
console.log(new Date(0)); //Give the initial Time
console.log(3 * 24 * 60 * 60 * 1000); //millSeconds after the 3 days of timeStamp

//Methods in the dates
const today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()); //zero based
console.log(today.getDate()); //gives day no
console.log(today.getDay()); //give day of the week
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(today.toISOString()); //standard time zone format
console.log(today.getTime()); //gives millseconds after the timeStamp(1661878587016)
console.log(new Date(today.getTime()));
console.log(Date.now()); //same gives the TimeStamp

//We can aslo change the time(by using set)
today.setFullYear(2023);
console.log(today);

//Operations on the dates
//How we can calculate the days passed between two dates?
const daysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
console.log(daysPassed(new Date(2022, 8, 12), new Date(2022, 7, 30)));

