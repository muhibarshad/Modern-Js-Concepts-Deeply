'use strict';

//traditional way of returning functions
const greetingMessage=function(message){
   return function(name){
    console.log(`${message} ${name}`);
   }
}
const greet=greetingMessage('Welcome Sir,');
greet('muhib');
greetingMessage('Hi boy ,')('Muhib');

//modern way arrow method
const greetingMessageArrow= greeting => name => console.log(`${greeting} ${name}`);
greetingMessageArrow('Hi')('Muhib');
