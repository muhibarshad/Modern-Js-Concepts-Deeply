"use strict";

// let setUSernames=new Set(['Haider','Ali','Muhib','Ali','Hamza','Ali']);

// le//t x;
// x=setUSernames.size;
// x=setUSernames.has('Ali');
// setUSernames.delete('Ali');
// setUSernames.add('Ali');
// setUSernames.clear();
// console.log(setUSernames);

//Maps
// let pizzaShop = new Map();
// pizzaShop.set("name", "Haider Pizza walay");
// pizzaShop.set("location", "near the pucit");
// pizzaShop.set(1, "cheese");
// console.log(pizzaShop);
// console.log(pizzaShop.get("location"));
// console.log(pizzaShop.delete("location"));
// console.log(pizzaShop.has("location"));
// console.log(pizzaShop.clear());
// console.log(pizzaShop);
// let quiz1 = new Map();
// quiz1
//   .set("Question", "What pointer Stores?")
//   .set(1, "Address")
//   .set(2, "Value")
//   .set(3, "null")
//   .set("correctOption", 2)
//   .set(false, "you are wrong 😥")
//   .set(true, "You are right ✅");
// console.log(quiz1);
// let quiz1 = new Map([
//   ["Question", "What pointer Stores?"],
//   [1, "Address"],
//   [2, "Value"],
//   [3, "null"],
//   ["correctOption", 1],
//   [false, "you are wrong 😥"],
//   [true, "You are right ✅"],
// ]);
// for(const[key,value] of quiz1)
// {
//     if(typeof key==='number')
//     {
//         console.log(`${key} : ${value}`);
//     }
// }
// let userAnswer=+(prompt(quiz1.get('Question')));
// console.log(quiz1.get(userAnswer==quiz1.get('correctOption')));

let quiz1 = new Map([
  ["Question", "What pointer Stores?"],
  [1, "Address"],
  [2, "Value"],
  [3, "null"],
  ["correct", 1],
  [false, "you are wrong 😥"],
  [true, "You are right ✅"],
]);

//selectors
let question = document.querySelector(".question");
let options = document.querySelector(".options");
let correctAnswer = document.querySelector(".correct_answer");
let userAnswer = +(document.querySelector("input").value);
let onSubmit = document.querySelector("button");
let html = "";
question.textContent = quiz1.get("Question");
for (const [key, value] of quiz1) {
  if (typeof key === "number") html += `<h3>${key}. ${value}</h3>`;
}
options.innerHTML = html;

let displayCorrectAnswer=() => {
    correctAnswer.textContent = `${quiz1.get(
      userAnswer === quiz1.get("correct")
    )}`;
  }
onSubmit.addEventListener("click", displayCorrectAnswer);
