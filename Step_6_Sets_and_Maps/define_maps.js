"use strict";
//===================================================================================
/*Maps:
  Maps are actually look like the objects.They have the two properties like the objects key and values
  But in the objects the key values are always the strings but in maps we should set the different 
  dataTypes also in the keys.
  In maps basically we have some methods;
  variableName.size;
  varibleName.set(key,value);
  varibleName.get(key);
  varibleName.has(key);
  varibleName.delete(key);
  varibleName.clear(key);
//also use the DOM manipuatltion
*/
//===================================================================================

//Basic Syntx
let newMap = new Map();
newMap.set("name", "Muhib Chaywala");
newMap.set(1, "First branch near the short bazar");
newMap.set(2, "Second branch near the main bazar");
newMap
  .set('Open',10)
  .set('Close',23)
  .set(true, " We are Opened")
  .set(false, "We are Closed")
  .set("Categirious", ["Pasta", "Milk Shake", "Doodh wali bootal"]);

//methods
console.log(newMap.size);
console.log(newMap.get('name'));
console.log(newMap.get(1));
console.log(newMap.has(false));
console.log(newMap.delete(2));
// console.log(newMap.clear());
console.log(newMap);

//DOM manuplation
newMap.set(document.querySelector('h1'),'This is heading');
console.log(newMap);

//Example---Interesting 
const time=15;
console.log(newMap.get(time>newMap.get('Open') && time<newMap.get('Close')));

//Array 
//Always the arrays refer to the same memory so to get access the same heap use as 
let arr=[1,3];
newMap.set(arr,'These are array');
console.log(newMap.get(arr));