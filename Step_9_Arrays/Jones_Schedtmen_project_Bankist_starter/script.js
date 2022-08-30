'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*My code start here*/

//Display the Movements
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  let movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements; //sort

  movs.forEach(function (mov, i) {
    const typeMov = mov > 0 ? 'deposit' : 'withdrawal';

    let movDate = new Date(acc.movementsDates[i]);
    let year = movDate.getFullYear();
    let month = (movDate.getMonth() + 1).toString().padStart(2, 0);
    let date = movDate.getDate().toString().padStart(2, 0);
    let hours = movDate.getHours().toString().padStart(2, 0);
    let minutes = movDate.getMinutes().toString().padStart(2, 0);
    let seconds = movDate.getSeconds().toString().padStart(2, 0);

    let displayDate = `${date}/${month}/${year}`;
    let html = `<div class="movements__row">
      <div class="movements__type movements__type--${typeMov}">${
      i + 1
    } ${typeMov}</div>
    <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${Math.abs(mov.toFixed(2))}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//computing the userNames
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);

//calculate the balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

/*incomes,outcomes,interest->Display*/
const calDisplaySummary = function (acc) {
  //income
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income.toFixed(2)}€`;
  //outcome
  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome).toFixed(2)}€`;
  //interst
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (acc.interestRate / 100))
    .filter(deposit => deposit >= 1) //if he/she deposit greater than 1 EURO so he/she gets the interest
    .reduce((int, mov) => int + mov, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const updateUI = function (acc) {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calDisplaySummary(acc);
};

//Login_In------Activity
let currentUser;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentUser = accounts.find(acc => acc.userName === inputLoginUsername.value);

  if (currentUser?.pin === +inputLoginPin.value) {
    containerApp.style.opacity = 100;

    //computing dates
    let now = new Date();
    let year = now.getFullYear();
    let month = (now.getMonth() + 1).toString().padStart(2, 0);
    let date = now.getDate().toString().padStart(2, 0);
    let hours = now.getHours().toString().padStart(2, 0);
    let minutes = now.getMinutes().toString().padStart(2, 0);
    let seconds = now.getSeconds().toString().padStart(2, 0);
    labelDate.textContent = `${date}/${month}/${year} , ${hours} : ${minutes}`;

    labelWelcome.textContent = `Welcome ,${currentUser.owner.split(' ')[0]}`;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentUser);
  }
});

//Transfering_Money------Activity
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  let amount = +inputTransferAmount.value;
  let recevierAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  inputLoanAmount.blur();

  if (
    amount > 0 &&
    amount <= currentUser.balance &&
    recevierAcc?.userName !== currentUser.userName &&
    recevierAcc
  ) {
    recevierAcc.movements.push(amount);
    currentUser.movements.push(-amount);

    currentUser.movementsDates.push(new Date().toISOString());
    recevierAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentUser);
  }
});

//Request_Loan------Activity
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  let amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentUser.movements.some(mov => mov >= amount * 0.1)) {
    inputLoanAmount.value = '';
    inputLoanAmount.blur();

    currentUser.movements.push(amount);
    currentUser.movementsDates.push(new Date().toISOString());

    updateUI(currentUser);
  }
});

//Closing_Account------Activity
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentUser.userName &&
    +inputClosePin.value === currentUser.pin
  ) {
    inputClosePin.value = inputCloseUsername.value = '';
    containerApp.style.opacity = 0;

    const index = accounts.findIndex(
      acc => acc.userName === currentUser.userName
    );
    accounts.splice(index, 1);
  }
});

//Sort------Activity
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentUser, !sorted);
  sorted = !sorted; //mutate the sorted
});
