//Spread Operater
/*======================================
Important Concept
Only the Arrays,maps,string and sets are iterable .but the objects are not
Spread opearter is basically used as to separate the arrays and use it array
and passing as arguments in the functions .
======================================*/
"use strict";

const resturant = {
  name: "Pizza Wala",
  location: "Jameel Road ,Kabirwala",
  starterMenu: ["Snaks", "Pizza", "Nuggets"],
  pizzaCategerious: [
    "Chef Special",
    "Tikka Pizza",
    "Domiono Special",
    "Hari March Pizza",
  ],
  mainMenu: ["FastFood", "Desi Kahna", "Chinese Dishes"],
  timing: {
    Fri: {
      open: "8:00 AM",
      close: "10:00 PM",
    },
    Sat: {
      open: "10:00 AM",
      close: "2:00 PM",
    },
    Sun: {
      open: "9:00 AM",
      close: "6:00 PM",
    },
  },
  order: function (mainIndex, starterIndex, pizzaIndex) {
    return [
      this.mainMenu[mainIndex],
      this.starterMenu[starterIndex],
      this.pizzaCategerious[pizzaIndex],
    ];
  },
  deliveryOrder: function ({ pizza, menu, timingget, locationOfOrder }) {
    console.log(`Order recived as ${this.pizzaCategerious[pizza]} from the menu ${this.mainMenu[menu]}
     at timing as ${timingget} at the location ${locationOfOrder} our opening timing as ${this.timing[1]}`);
  },
  pasteOrder: function (dish1, dish2, dish3) {
    console.log(
      `You have ordered the ${dish1} ,${dish2} and ${dish3} .Enjoy your stuff`
    );
  },
};

let arr = [1, 2, 3, 4];
console.log(arr); //[1,2,3,4]
console.log(...arr); //1,2,3,4--->as a separate numbers

//New array in the array
let newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
//Object array
let newMenu = [...resturant.mainMenu, "Baryani"];
console.log(newMenu);
//Joining two arrays
let menu = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(menu);

//string
let namea = "muhib";
console.log(...namea);

// functions
alert("Let' make the pasta");
let pastaDishes = [
  prompt("Ingedient 1"),
  prompt("Ingrediet 2"),
  prompt("Ingredient 3"),
];
resturant.pasteOrder(...pastaDishes);

//objects
let newresturant={OwerName:'Muhib arshad',...resturant,city:'Multan'};
console.log(newresturant);

//Copy objects throught the spread opearter is the same as the Object.assign({},objnameTobecopied);
let copyObj={...newresturant};
copyObj.OwerName='mujeeb Arshad';
console.log(copyObj);
console.log(newresturant);

