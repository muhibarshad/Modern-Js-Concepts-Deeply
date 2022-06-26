//Destructing the objects

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
  deliveryOrder:function({pizza,menu,timingget,locationOfOrder}){
    console.log(`Order recived as ${this.pizzaCategerious[pizza]} from the menu ${this.mainMenu[menu]}
     at timing as ${timingget} at the location ${locationOfOrder} our opening timing as ${this.timing[1]}`)
  }
};

//deliveryOrder

const deliveryScript=resturant.deliveryOrder(
   {
    pizza:2,
    menu:2,
    timingget:'3:00 PM',
    locationOfOrder:'khanewal'
   }
);
console.log(deliveryScript);



//destructing the object the name of the destructing variables is  same as the method objects name
const { starterMenu, mainMenu, pizzaCategerious } = resturant;
console.log(starterMenu, mainMenu, pizzaCategerious);

//to get the separte array
const [menu1,menu2,menu3]=starterMenu;
console.log(menu1,menu2,menu3);

//destructing object with the different name variable
const {
  starterMenu: menuName,
  mainMenu: mainName,
  pizzaCategerious: pizzaName,
} = resturant;
console.log(menuName,mainName,pizzaName);

//deafult arguments
const {meu=[],starterMenu:starts=[]}=resturant;
console.log(meu,starterMenu);

//mutating varibes
let a=1;
let b=2;
const obj={a:3,b:4,c:7};
({a,b}=obj);
console.log(a,b);