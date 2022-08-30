"use strict";

//challeneg Arrays :04
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1-
dogs.forEach((value) => {
  value.recommendedFood = Math.trunc(value.weight ** 0.75 * 28);
});

//2-
let str = (na, str, cur, rec) => {
  na = na.replace(na[0], na[0].toUpperCase());
  console.log(
    `${na} dog's is eating too ${str} beacuse its current food is ${cur} but the recommended food is ${rec}`
  );
};
dogs.find((value) => {
  let x = value.owners
    .filter((nam) => nam === "Sarah")
    .join("")
    .toLowerCase();
  x === "sarah" &&
    value.curFood > value.recommendedFood &&
    str(x, "much", value.curFood, value.recommendedFood);
  x === "sarah" &&
    value.curFood < value.recommendedFood &&
    str(x, "little", value.curFood, value.recommendedFood);
});

//3-
const ownersEatTooMuch = dogs
  .filter((value) => value.curFood > value.recommendedFood)
  .flatMap((value) => value.owners);
const ownersEatTooLittle = dogs
  .filter((value) => value.curFood < value.recommendedFood)
  .flatMap((value) => value.owners);

//4-
ownersEatTooMuch.forEach((value, _, arr) => {
  console.log(
    `${value} ${value == arr.at(-1) ? "'s dogs eat too much!" : "and"}`
  );
});
ownersEatTooLittle.forEach((value, _, arr) => {
  console.log(
    `${value} ${value == arr.at(-1) ? "'s dogs eat too little!" : "and"}`
  );
});

//5-
const eatingExactly = dogs.some(
  (value) => value.curFood === value.recommendedFood
);
console.log(eatingExactly);

//6-
const eatingOkay = dogs.some(
  (value) =>
    value.curFood > value.recommendedFood * 0.9 &&
    value.curFood < value.recommendedFood * 1.1
);
console.log(eatingOkay);

//7-
const dogsEatingOkay = dogs.filter(
  (value) =>
    value.curFood > value.recommendedFood * 0.9 &&
    value.curFood < value.recommendedFood * 1.1
);
console.log(dogsEatingOkay);

//8-
console.log(dogs);
const sortedDogs = dogs
  .map((x) => x)
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
