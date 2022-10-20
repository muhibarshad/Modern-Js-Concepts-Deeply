// 'use strict'
// let quiz1 = new Map([
//   ["Question", "What pointer Stores?"],
//   [1, "Address"],
//   [2, "Value"],
//   [3, "null"],
//   ["correct", 1],
//   [false, "you are wrong 😥"],
//   [true, "You are right ✅"],
// ]);

// //selectors
// let question = document.querySelector(".question");
// let options = document.querySelector(".options");
// let correctAnswer = document.querySelector(".correct_answer");
// let userAnswer = +(document.querySelector("input").value);
// let onSubmit = document.querySelector("button");
// let html = "";
// question.textContent = quiz1.get("Question");
// for (const [key, value] of quiz1) {
//   if (typeof key === "number") html += `<h3>${key}. ${value}</h3>`;
// }
// options.innerHTML = html;

// let displayCorrectAnswer=() => {
//     correctAnswer.textContent = `${quiz1.get(
//       userAnswer === quiz1.get("correct")
//     )}`;
//   }
// onSubmit.addEventListener("click", displayCorrectAnswer);

//Practicing

"use strict";
//Practicing

let arr = [
  [5, 3, 4],
  [1, 2],
];

let ans = arr
  .flat(1)
  .map((value) => value * 2)
  .filter((value) => value % 2 == 0)
  .reduce((acc, value) => acc + value, 0);
console.log(ans);

