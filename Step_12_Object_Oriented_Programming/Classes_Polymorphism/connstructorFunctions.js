'use strict'

/*Important Concepts:
  Zeroly, the name of the constructor function always first letter is the capital letter.
  Firstly, the constructor functions have are never arrow functions these are function declerations and expressions.Because we want this function have no its own this keyword. So as a result, Constructor functions have no its own this keyword.
  Constructor functions are developed by the new keyword when we use the new keyword with the traditional function then it becomes the constructor function.
  Secondly,When we creating a constructor function(writing new with the traditional function) these four steps are working at the behind the scenes.
  1.an empty object {} has been made.
  2.constructor function is called,and the this keyword is assign to an empty object
    This steps demands more explanation,it actually means the constructor function paramters are now accessible to an empty object {}. 
  3. empty object {} is linked with the prototype
  4. finally the constructor function returns this empty object
    if we write the code and add data memebers and behaviours in it then it does not become empty so the emptiness of the object depends upon the constructor function body.
*/

//BluePrint Student
const Student=function(name,rollNo){
    this.name=name;
    this.rollNo=rollNo;
    //very bad way(1000 objects means 1000 functions copies slow performance to code)
    // this.show=function(){
    //     console.log(`Name of student : ${this.name} \nRoll no of student : ${this.rollNo}` )
    // }
}

//These all are the instances of the blueprint(Student)
const st_1=new Student('Muhib','BSEF21M540')
const st_2=new Student('Ali','BSEF21M541')
const st_3=new Student('Hamza','BSEF21M542')
const st_4=new Student('Fawad','BSEF21M543')
console.log(st_1);
console.log(st_2);
console.log(st_3);
console.log(st_4);

//To check this class is the blueprint of the class or not
console.log(st_1 instanceof Student);//true
console.log(st_90 instanceof Student);//false
st_1.show();