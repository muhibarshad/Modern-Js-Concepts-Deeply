'use strict';
//=====================================================
/*Defination:
    Functions have an access to its birthPlace variable enviornment always ,even 
    after the execuation context gone.
Explanation:
   In stack,variables are pushed accordingly be defined,and popped off after every 
   calling interpretation.If a function is declared to any variable ,and this function 
   has returning some another function.Then the higher order function executed and 
   gone off from the execuation stack context wit its enviornment.But closure happens there,
   all the varaibles in the higher order function are in a bagPack of all the functions inside it .
   We cannot access directly to these variables because these are not in the execuation context 
   but in the clousre property of the functions birtPlace enviornment.OKay?
*/
//=====================================================

const patientChecked=function(){
    let patientCount=0;
    return function(){
        patientCount++;
        console.log(`Total ${patientCount} has been checked.`);
    }
}

const patientScreen=patientChecked();

patientScreen();//1
patientScreen();//2
patientScreen();//3

/*Number are increasing ,but if we see that in patientScreen ,patientChecked function
has been interpreted and gone off from the stack and also be removed from the scope chain.
So in this way,pateientCount varaible is also be destroyed.And no more access to the patientScreen
function .The reason is that,no doubt the patientChecked function is opped off from the stack
but we know that function has an access to its varible enviornment in which it is defined 
so the patientScreen has now also be access to the all varible in the patientChecked enviornment 
but we cannot manully access them.

*/

//To get the scope and closures
console.dir(patientScreen);
//[[]]------means we cannot access them in our code but happens in bheind the scenes