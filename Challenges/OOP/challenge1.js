'use strict';
const Car=function(make,speed){
    this.make=make;
    this.speed=speed;
}
Car.prototype.accelerate=function(){
    this.speed+=10;
    console.log(`${this.make} is going at the speed of = ${this.speed}`)
}
Car.prototype.brake=function(){
    this.speed-=5;
    console.log(`${this.make} is going at the speed of = ${this.speed}`)
}

const car1=new Car('BMW',120)
const car2=new Car('Mercedes',95)
console.log(car1)
console.log(car2)
car1.accelerate();
car2.brake();
car1.brake();
car2.accelerate();