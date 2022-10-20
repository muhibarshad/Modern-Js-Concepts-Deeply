"use strict";
/*Convert the API data string to be like as*/
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed_Departure from FAO TXL 11h25.
//               Arrival from BRU FAO 11h45.
//   🔴 Delayed_Arrival from HEL FAO 12h05.
//             Departure from FAO LIS 12h30.

let getCode = (str) => str.slice(0, 3).toUpperCase();
for (const str of flights.split("+")) {
  const finalStr = str.split(";");
  const [msg, from, to, time] = finalStr;
  console.log(
    `${msg.startsWith("_Delayed") ? "🔴" : ""}${msg.replace(
      "_",
      " "
    )} from ${getCode(from)} ${getCode(to)} ${time.replace(
      ":",
      "h"
    )}.`.padStart(42)
  );
}

