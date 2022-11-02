class Account {
  constructor(name, pin) {
    this.name = name;
    this.local = navigator.local;

    //protected_members
    this._pin = pin;
    this._movements = [];
  }
  get getMovements(){
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdrawl(val) {
    this._movements.push(-val);
  }
  _approvedLoan(val) {
    return this.totalAmount() >= 200 ? true : false;
  }

  requestingLoan(val) {
    if (this._approvedLoan(val)) {
      this.deposit(val);
      console.log("Requesting Loan....");
      setTimeout(() =>  console.log(`Successfully requested!.Added ${val} to your account`), 2 * 1000);
    } else {
      console.log(`You have no enough amount in account to request loan`);
    }
  }
  totalAmount() {
    return this._movements.reduce((acc, mov) => acc + mov, 0);
  }
}

const acc=new Account('Muhib',1111);
acc.deposit(1000);
acc.withdrawl(-800);
acc.deposit(2000);
acc.withdrawl(-300);
acc.requestingLoan(200);
console.log(acc.getMovements)
console.log(acc);