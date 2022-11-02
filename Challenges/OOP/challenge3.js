'use strict'
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

const electricCar=function(make,speed,charge){
    Car.call(this,make,speed);
    this.charge=charge;
}
electricCar.prototype=Object.create(Car.prototype)
electricCar.prototype.chargebattery=function(chargeTo){
       this.charge=chargeTo;
}
electricCar.prototype.accelerate=function(){
    this.speed-=20;
    this.charge-=1;
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%. `)
}

const eCar=new electricCar('Tesla',120,23);
console.log(eCar);
eCar.chargebattery(90)
console.log(eCar);
eCar.accelerate();
eCar.brake();
console.log(eCar);

