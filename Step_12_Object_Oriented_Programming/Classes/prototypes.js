/*
  Every function in javascript has a property called prototype.Constructor function has a propety called prototype. This prototype has a full access to the constructor function and the empty object properties and the methods. When we make an object from the constructor function. In the third step of the new opertor working,
  we can say that the object can be linked with the prototype.Which can create the __proto__ property of the object and set its value the proptotype of the constructor function.This prototype is not actually the prototype of the constructor function, the prototype of the object. When we make properties of this prototype then these can never become the properties of the object.We can only delegated and inheriting the proptypes and use them but not making actually the part of the object itslef.Thats way this is also called the protypal inheritance.
*/
const Student = function (name, rollNo) {
  this.name = name;
  this.rollNo = rollNo;
};
Student.prototype.show = function () {
  console.log(
    `Name of student : ${this.name} \nRoll no of student : ${this.rollNo}`
  );
};
Student.prototype.campus='new Campus'

const st_1 = new Student("Muhib", "BSEF21M540");
const st_2 = new Student("Ali", "BSEF21M541");
console.log(st_1);

console.log(Student.prototype)
console.log(st_1.__proto__ ===Student.prototype)//true
onsole.log(Student.prototype.isPrototypeOf(st_1))//true
console.log(Student.prototype.isPrototypeOf(Student))//false

st_1.show();
console.log(st_1.campus);
console.log(st_1);//show and campus are not becoming part as a methids and properties of st_1 but part of the object prototype property 
console.log(st_1.hasOwnProperty('rollNo'))//true
console.log(st_1.hasOwnProperty('campus'))//false

