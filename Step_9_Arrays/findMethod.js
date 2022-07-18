'use strict';
const person1={
    name:'Muhib',
    age :17
}
const person2={
    name:'Ali',
    age :18
}
const person3={
    name:'Abdullah',
    age :19
}
const persons=[person1,person2,person3];
const findPersonLessThan18=persons.find(per => per.age<18);
console.log(findPersonLessThan18);