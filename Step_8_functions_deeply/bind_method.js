"use strict";
/*Bind:
 All we know that if we want to call the this.object functionality to different 
 objects then we manullay call it by passing the object name into it.
 In bind method ,it does not call the objects function and refers the this keyword to the
 passing object name.It just return the whole function ,so stores it into new varible and 
 now this new function has this keyword according to the passing argument object.okay?
 *******Partial Application*************
 In bind method the , argument are preset passed.(use as default parameters)
*/

const mcdonalds = {
  name: "McDonalds",
  location: "Near Amana Mall ,lahore",
  orders: [],
  getOrder(item, count) {
    console.log(`You have order ${count} number of ${item} from the ${this.name} located
    ${this.location} `);
    this.orders.push({ nameOfOrder: item, noOfItems: count });
  },
};

const Fork_knives = {
  name: "Fork & knives",
  location: "Near the Moon Market ,Lahore",
  orders: [],
};

const KFC = {
  name: "KFC burger HUB",
  location: "Near the Barket Market ,Lahore",
  orders: [],
};

const orderNow=mcdonalds.getOrder;//returns the function from mcdonald object having this only for it 
const orderKFC=orderNow.bind(KFC);//returns the complete mcdonalds function having this keyword according to passng object
orderKFC('Burgers',6);

//Partial Appliaction
//Example 01:
const Fork_knivesOrder=orderNow.bind(Fork_knives,'burgers');//preset paramters
Fork_knivesOrder(7);
//Example 02:
const marksPercentage=(total,get)=>(get/total)*100;
const PERCENTAGE_fsc_matric=marksPercentage.bind(null,1100);
console.log(PERCENTAGE_fsc_matric(1073));
console.log(PERCENTAGE_fsc_matric(1075));
//Example 02(second_way):
function calcPercentage(Totals){
  return function(marksGet){
       return (marksGet/Totals)*100;
  }
}
//i-way
const fscMatricPercen=calcPercentage(1100);
console.log(fscMatricPercen(1075));
//ii-way
console.log(calcPercentage(1100)(1075));

//DOM manuplation
KFC.totalItems=function(){
    let [{noOfItems}]=this.orders;
    noOfItems++;
    console.log(noOfItems);
}
document.querySelector('.btn').addEventListener('click',KFC.totalItems.bind(KFC));
//As to be ,the KFC.totalItems functions pointing to the addEventListener and addEventlistener 
// pointing to the btn element so we know that the this keyword inside the DOM functions 
// refers to its parent element.So we should use the bind method so it returs the complete 
// function to it so this keyword is only for now its function


