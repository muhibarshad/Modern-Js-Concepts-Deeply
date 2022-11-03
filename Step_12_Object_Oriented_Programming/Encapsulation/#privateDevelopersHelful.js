/*
To make the class data members and methods sprivate : just write in the start of the varaibles, and to make them global just write outside the constructor and remember that the  variables that are written outside the constructor are the part of the object itslef and these are not in the orototypes of the class object .
But these features are not work in the Present Javascript may be in teh future but for know use the _ instead if # for the convention._ to make convevntion of the private members
This return to make convention of the chaining methods*/

class Account {
  //public
  local = navigator.local;
  //private
  #pin;
  #movements = [];
  constructor(name, pin) {
    this.name = name;
    this.#pin = pin;
  }
  get getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdrawl(val) {
    this.#movements.push(-val);
    return this;
  }
  #approvedLoan(val) {
    return this.totalAmount() >= 200 ? true : false;
  }
  requestingLoan(val) {
    if (this.#approvedLoan(val)) {
      this.deposit(val);
      console.log("Requesting Loan....");
      setTimeout(
        () =>
          console.log(`Successfully requested!.Added ${val} to your account`),
        2 * 1000
      );
      return this;
    } else {
      console.log(`You have no enough amount in account to request loan`);
      return this;
    }
  }
  totalAmount() {
    return this.#movements.reduce((acc, mov) => acc + mov, 0);
  }
}

const acc = new Account("Muhib", 1111);
acc.deposit(1000).withdrawl(-800).withdrawl(-300).requestingLoan(200);
console.log(acc.getMovements);
console.log(acc);

