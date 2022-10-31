/*In ES6 classes actually work same as the constructor functions in th ebehind the scenes
but the thing that is matter is here we sould know about how actually these can works. As constructor in the es6 work same as the constructor function, and the class name work same as the function name , methods work same as the prototypes , and these methods are actually not the part of the object these are on the object prototype and chaining of these prototypes work same in the backend.*/
class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }
  show() {
    console.log(
      `The name of the student :${this.name}\nThe rollNo of the student :${this.rollNo}`
    );
  }
}
const st_1=new Student('Muhib','BSEF21M540');
console.log(st_1);
st_1.show();
console.log(st_1.__proto__ ===Student.prototype);
Student.prototype.campus='new campus';

