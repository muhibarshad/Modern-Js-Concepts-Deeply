'use strict';

const resturant={
  name:'Pizza Wala',
  location:'Jameel Road ,Kabirwala',
  starterMenu:['Snaks','Pizza','Nuggets'],
  pizzaCategerious:['Chef Special','Tikka Pizza','Domiono Special','Hari March Pizza'],
  mainMenu:['FastFood','Desi Kahna','Chinese Dishes'],
  order:function(mainIndex,starterIndex,pizzaIndex)
  {
    return [this.mainMenu[mainIndex],this.starterMenu[starterIndex],this.pizzaCategerious[pizzaIndex]];
  }
};

const [mainOrder,starterOrder,pizzaOrder]=resturant.order(0,1,0);
console.log(mainOrder,starterOrder,pizzaOrder);


//Concepts array destructing
const arr=[1,2,3,4];
const [x,y,z]=arr;
console.log(x,y,z);//1,2,3

//concept
const arr1=[7,9,0,8,3,1];
const [a,,b,,,c]=arr1;
console.log(a,b,c);//7,0,1

//default
const [mainOrder1=1,starterOrder1=1,pizzaOrder1=1]=resturant.order(0,0);
console.log(mainOrder1,starterOrder1,pizzaOrder1);



