/*A functions which are specially attached to only the class, these are helper functions to perform some functionalities to the other functions.These are not in the prototype of the class and never inherited to the __ptroto__ of the object of class.So this means that we will not call them on object of classes beacause these are not in the prototype chain.But call them on the class. And in these functions the this keyword refers to the class itself.
like:
Array.from(document.querrySelectorAll('h1'))
Number.parseFloar('12px')
These functions are static and only attached to the class.We will not call them as a [1,2,3,4].from ....error
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
    get fullname(){
        return this._fullname;
    }
    get age(){
        return 2022-this.birthYear; 
    }
    greetingMessage(){
        console.log(`Hello ${this.fullname} ,Welcome here!`)
    }
    static hey(){
        console.log('Heeeloo')
        console.log(this)
    }

}
const person_1=new Person('Muhib Arshad',2002);
console.log(person_1);
// person_1.hey();//Error because of hey is not the part of the prototype object of Person and also not in the __proto__ of object.
Person.hey();//runs beacuse thisfunction is  actually attached to the class itself and this is the method of the class and in this keyword refers to the whole class.