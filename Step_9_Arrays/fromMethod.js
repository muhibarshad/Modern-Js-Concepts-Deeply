"use strict";

const arr = Array.from({ length: 7 }, () => 1);
const arr1 = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(arr);
console.log(arr1);

//Document method
const movs = Array.from(document.querySelectorAll(".mov"), (mov) =>
  Number(mov.textContent.replace("$", ""))
);
console.log(movs);

