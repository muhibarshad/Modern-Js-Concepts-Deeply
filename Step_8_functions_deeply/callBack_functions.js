'use strict';
/*What are the call back functions?
 In higher order functions , the functions that are passed as an argument 
 are callback functions.Means ,these are as an argument and be called back
 when the higher order function call it.May be inside the function .
 This is very helpful in the abstarction .The higher order function does not know 
 how the functions inside it works.
 
*/
let oneWord=function(str){
    return str.replace(/ /g,'').toLowerCase();
}

let firstWordHigher=function(str){
      const [first,...others]=str.split(' ');
      return [first.toUpperCase(),...others].join(' ');
}

//higher order function
let transformer=function(str,fn){
    console.log(`Original string : ${str}`)
    console.log(`After implementation string  : ${fn(str)}`)
}
console.log(transformer('Muhib Arshad is my best friend',oneWord));
console.log(transformer('Muhib Arshad is my best friend',firstWordHigher));