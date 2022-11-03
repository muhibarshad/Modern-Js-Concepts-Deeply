'use strict'
/*Object . create is also a method of OOP.In which we don't have any constructor function or new keyword or any class. We make an object in which we make the function and pass paramteres to it and then maually make attributes it it. Make the prototype functions insise it . Now when making an object , this object can be passed to Object.create(nameOfObject). Then this pbject become a part of the new object __proto__ property*/
const personProto={
    setAttributes(fullname,birthYear){
        this.fullname=fullname;
        this.birthYear=birthYear;
    },
    calAge(){
        console.log(`${2022-this.birthYear}`)
    },
    getData(){
        console.log(`Name : ${this.fullname}\nBirthYear: ${this.birthYear}`)
    }
}
const person_1=Object.create(personProto);
console.log(person_1.setAttributes('Muhib',2002));

console.log(person_1);
person_1.calAge()
person_1.getData()
console.log(person_1.fullname);
console.log(person_1.birthYear);
console.log(person_1.__proto__===personProto)//true
