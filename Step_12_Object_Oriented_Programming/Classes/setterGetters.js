'use strict'
/*Getters are actually used to get the some values.A function which returns some value as a back
Setters are actually used to set the some values with some limitaionas and checks on the attributres when setting them.In setters actually when we call the function then the this.parameterName is calling th function and the constructor parameter is passed as a parameter.then we can actually set the actuall property with diffreent name of it otherwise the recusrions of a function happens until the stack overloaded.
*/
class Person{
    constructor(fullname,birthYear){
        this.fullname=fullname;
        this.birthYear=birthYear;
    }
    set fullname(name){
        if(name.includes(' ')) this._fullname=name;
        else alert(`${name} is not your full name`)
    }
    set name(name){
        this._fullname=name;
    }
    get fullname(){
        return this._fullname;
    }
    get age(){
        return 2022-this.birthYear; 
    }
    greetingMessage(){
        console.log(`Hello ${this.fullname} ,Welcome here!`)
    }

}
const person_1=new Person('Muhib Arshad',2002);
console.log(person_1);
console.log(person_1.age);
person_1.name='ali abbas'
console.log(person_1.fullname);
person_1.greetingMessage();
console.log(person_1);

//passing arguments to teh setters 
// car.speedUs=180;
