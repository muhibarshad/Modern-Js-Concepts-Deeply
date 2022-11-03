"use strict";
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(
      `${this.make} is moving therough the speed of ${this.speed}KM/h`
    );
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(
      `${this.make} is moving therough the speed of ${this.speed}KM/h`
    );
    return this;
  }
  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}
class EVCL extends CarCl {
  _charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this._charge = charge;
  }
  chargebattery(chargeTo) {
    this._charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this._charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${this._charge}%. `
    );
    return this;
  }
}
const eCar = new EVCL("Tesla", 120, 23);
console.log(eCar);
eCar.chargebattery(90).accelerate().accelerate().brake().accelerate().brake();
console.log(eCar);
