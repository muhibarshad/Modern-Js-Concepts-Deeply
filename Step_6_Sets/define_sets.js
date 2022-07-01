//==================================================
/*Sets:
 Sets are basically like the arrays but it is total different in functionality of arrays;
 sets store the always unique values;
 sets are iterables;
 sets are iterables so used as spread and rest operaters;
 sets has different methods;
 like:
    varibleName.has();
    varibleName.size();
    varibleName.add();
    varibleName.delete();
    varibleName.clear();
*/
//==================================================
//syntx
let setSyntx = new Set(["Ali", "Muhib", "Ali", "Hamz"]);
console.log(setSyntx);//gives unique values
//another way
let paintCategerious = [
  "Jeans",
  "Dress",
  "Jeans",
  "trousers",
  "flexible",
  "Dress",
];
let sets = [...new Set(paintCategerious)];
console.log(sets);

// //methods
// let methodName=0;
// methodName=sets.size;
// methodName=sets.has('Jeans');
// methodName=sets.add('ALi baba chalis chor');
// methodName=sets.delete('ALi baba chalis chor');
// methodName=sets.clear();
// console.log(methodName);
// console.log(sets);


//Iterable
for(const item of sets){
    console.log(item);
}

//to get the how many different positions are to be here 
// such as 
console.log(new Set(['Ali ','Muhib','Ali ','Hamza','Abdullah','Muhib']).size);//for the array
console.log(new Set('Muhibmmmmuu').size);//for the string

