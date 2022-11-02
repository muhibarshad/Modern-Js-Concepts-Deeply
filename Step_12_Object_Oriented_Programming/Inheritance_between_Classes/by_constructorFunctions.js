/*In constructor functions,we call call the class name with parmeters that is to be inherited, but when we don't add the new keyword than, it shoueld call it like a normal function and in the normal functions the this keyword does'nnt work.So to get rid of this problem call the .call(this,parametersList) method on a inherited constructor function.In which we set the this of child class.So now the this keyword is manually set inside the construtor function.Now to get the prototype of the constructor function inside the child class.we can equal the child class prototype to the parent class prototype by the Object.create(parentClassName) method.So object returns having the protype of the parentClass. 
*/
const Person=function(name,birthYear){
    this.name=name;
    this.birthYear=birthYear;
}
Person.prototype.calAge=function(){
    return 2022-this.birthYear;
}

const Student=function(name,birthYear,id,phoneNum){
    Person.call(this,name,birthYear)
    this.id=id;
    this.phoneNum=phoneNum;
}
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
Student.prototype.info=function(){
    return `Name : ${this.name}\nId :${this.id}\nPhone Number :${this.phoneNum}\nAge:${this.calAge()}`
}

const st_1=new Student('Muhib Arshad',2002,'BSEF21M540',311);
console.log(st_1);
console.log(st_1.calAge());
console.log(st_1.info());
console.log(st_1.__proto__);
console.log(st_1.__proto__.__proto__);
console.log(st_1 instanceof Student );
console.log(st_1 instanceof Person );
console.log(st_1 instanceof Object );
console.log(Student.prototype.constructor);
// console.log(st_1.calAge());

/*Note:If we have a same function in gthe child class nad in the parent class then then when the object finds in the child class prototype chain then it not goes to the parent class same name function , actually in front scenes it can overwrite the parent class function.And this is what is polymorphism */