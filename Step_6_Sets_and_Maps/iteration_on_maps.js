'use strict';
//==========================================================
/*Maps are coverted into the arrays;
 maps are used as iterable ;
 maps in ehich use the arrays as in inside the array(including : [key,value]) is very helpful during iteratiing 
 but we don't use the set method when i have use the such functionalities.
*/
//==========================================================



//practical exmaple quiz app sektch
const quiz=new Map([
    ['Question','Which is the best way to learn coding.'],
    [1,'By Learning and keep learning'],
    [2,'By practicing code continuously'],
    [3,'By making projects'],
    ['correct',2],
    [false,'You are Wrong.Try Again'],
    [true,'You are right✨']
]);
console.log(quiz.get('Question'));
for(const [key,value] of quiz){
   if(typeof key ==='number')
   console.log(`Option ${key} : ${value} \n`);
}
let userAns=Number(prompt('Choose the correct option'));
console.log(quiz.get(userAns===quiz.get('correct') ));


//to use the objects as maps
let obj={
    name:'Muhib',
    rollNo:40,
    gender:'male',
    muslim:true,
  };
let obj_To_map=new Map(Object.entries(obj));
console.log(obj_To_map);

//to convert the maps to arrays
console.log(...quiz);

