let data1 = [5, 2, 4, 1, 15, 8, 3];
let data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanYearsAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const finalData = humanYearsAges.filter((age) => age >= 18);
  let average = finalData.reduce((acc, age) => acc + age,0) / finalData.length;
  return `The average = ${average}`;
};
console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
