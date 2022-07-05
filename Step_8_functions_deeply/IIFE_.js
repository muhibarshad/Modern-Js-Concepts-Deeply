'use strict';
/*Imediately invoked functions are expressions not satements.These are executed
only once time .Never again in any part of the program.They have their own scope
and all the members and variavbles are encapsulated and private globaly.
syntx;

(function(){
  //function body;
})();
*/

(function(){
    console.log('This is a Imedialtely invoked function.');
    const isPrivate=90;
})();

// console.log(isPrivate);//cannot be accesible


{
    const blockScopeConstLet=78;
    var blockScopeVar=18;
}
// console.log(blockScopeConstLet);//cannot be accessible
console.log(blockScopeVar);