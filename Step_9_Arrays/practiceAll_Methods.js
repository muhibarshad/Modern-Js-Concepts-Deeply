// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

//suppose all movements are in the USD
const accounts = [account1, account2, account3, account4];
const PKR_to_USD = 210.07;

//Find the banckDepositSum
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

//To find how many deposits in the bank with atlest 1000 Rupees
const countDeposit = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .map((mov) => mov * PKR_to_USD)
  .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);
console.log(countDeposit);

//Get the object by using reduce method taht contains the sum of the Deposits and withdraws
const { deposit, withDraw } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (acc, mov) => {
      acc[mov > 0 ? "deposit" : "withDraw"] += mov;
      return acc;
    },
    { deposit: 0, withDraw: 0 }
  );
console.log(withDraw, deposit);

//Get the array by using reduce method taht contains the sum of the Deposits and withdraws
const [depositA, withDrawA] = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (acc, mov) => {
      mov > 0 ? (acc[0] += mov) : (acc[1] += mov);
      return acc;
    },
    [0, 0]
  );
console.log(depositA, withDrawA);

//covert the first letter of a word in a sentence to capital except 'a' single word

//this is a book->This Is a Book

const capitalizeString = function (str) {
  const exceptions = ["in", "a", "with", "of", "are", "and", "the", "this"];
  const capatilize = (str) => str[0].toUpperCase() + str.slice(1);
  const titleCase = str
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capatilize(word)))
    .join(" ");

  return capatilize(titleCase);
};
console.log(capitalizeString("this is a book"));
