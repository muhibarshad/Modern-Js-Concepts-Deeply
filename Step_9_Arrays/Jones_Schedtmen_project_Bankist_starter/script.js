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
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2022-07-05T16:33:06.386Z',
    '2022-08-24T14:43:26.374Z',
    '2022-08-29T18:49:59.371Z',
    '2022-08-30T12:01:20.894Z',
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
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-11T23:36:17.929Z',
    '2022-07-12T10:51:36.790Z',
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

//Supporting functions
const daysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

const printDate = (date,local)=>{

  const noOfdays = daysPassed(new Date(), date);

  if(noOfdays===0) return 'Today';
  if(noOfdays===1) return 'Yesterday';
  if(noOfdays<=7) return `${noOfdays} days ago`;
  
  const option={
    year:'numeric',
    month:'numeric',
    day:'numeric',
  };
  return Intl.DateTimeFormat(local,option).format(date);
};

const currencyFormat=function(value,local,currency){
  return new Intl.NumberFormat(local,{
    style:'currency',
    currency:currency,
  }).format(value);
}

//Display the Movements
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  let movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements; //sort

  movs.forEach(function (mov, i) {
    const typeMov = mov > 0 ? 'deposit' : 'withdrawal';

    let movDate = new Date(acc.movementsDates[i]);
    let displayDate = printDate(movDate,acc.locale);
    

    let html = `<div class="movements__row">
      <div class="movements__type movements__type--${typeMov}">${
      i + 1
    } ${typeMov}</div>
    <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${currencyFormat(Math.abs(mov),acc.local,acc.currency)}</div>
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
  labelBalance.textContent = currencyFormat(acc.balance,acc.local,acc.currency);
};

/*incomes,outcomes,interest->Display*/
const calDisplaySummary = function (acc) {
  //income
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = currencyFormat(income,acc.local,acc.currency);
  //outcome
  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = currencyFormat(Math.abs(outcome),acc.local,acc.currency);
  //interst
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (acc.interestRate / 100))
    .filter(deposit => deposit >= 1) //if he/she deposit greater than 1 EURO so he/she gets the interest
    .reduce((int, mov) => int + mov, 0);
  labelSumInterest.textContent = currencyFormat(interest,acc.local,acc.currency);
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
    const option={
      year:'numeric',
      month:'long',
      day:'numeric',
      weekday:'long',
      hours:'numeric',
      minute:'numeric'
    };
    let now = new Date();
    let formatDate=Intl.DateTimeFormat(currentUser.locale,option).format(now);
    labelDate.textContent =formatDate;

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
   
    setTimeout(()=>{
    currentUser.movements.push(amount);
    currentUser.movementsDates.push(new Date().toISOString());
    updateUI(currentUser);
    },3*1000);

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

//Fake account
currentUser=account1;
updateUI(currentUser);
containerApp.style.opacity = 100;

