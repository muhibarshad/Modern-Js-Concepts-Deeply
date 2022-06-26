'use strict'


console.log('name');
console.log('nam');
console.log('na');

var name='muhib';
let nam='ali';
const na='mehrox';

const obj={
  name:'Muhib',
  age:19,
  house:'borewala',
  calage:function(){
    let ali= ()=>
     {
        console.log(this);
     }
     ali();
     return this.name;
  }
};

const objNew=Object.assign({},obj);
console.log(obj);
console.log(obj.calage());

objNew.name='Ali abdullah';
console.log(objNew);
console.log(obj);
