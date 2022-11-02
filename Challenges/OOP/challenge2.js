'use strict'
class CarCl{
    constructor(make,speed){
        this.make=make;
        this.speed=speed;
    }
    accelerate(){
        this.speed+=10;
        console.log(`${this.make} is moving therough the speed of ${this.speed}KM/h`)
    }
    brake(){
        this.speed-=5;
        console.log(`${this.make} is moving therough the speed of ${this.speed}KM/h`)
    }
    get speedUs(){
        return this.speed/1.6;
    }
    set speedUs(speed){
        this.speed=speed*1.6;
    }
}
const car=new CarCl('BMW',120);

car.accelerate();
car.brake();
car.speedUs=180;
console.log(car.speedUs)
console.log(car);