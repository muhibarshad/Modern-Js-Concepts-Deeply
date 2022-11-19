"use strict";

const getJson = function (url, errorMsg) {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`${errorMsg}`);
    return res.json();
  });
};

//Promise.all()
/*

/*When we actually want to run all the promises and fetching data of allpromises at the same time than we can actually  use the Promise.all() cominator helper static function of the promise class that can actually take an array of promises and retirn teh results of these promises in a array itslef, by fetching all the promises at the same time in a parallel way except fetching them in the sequence way.If the error occurs in fetching of the one of them than actually the whole promise result fails.
When all the promises fullfiled and no one of the promise get rejected.If rejected then show error
*/

//Promise.race()
/*When the promise who take less time and fetched and win the race than only show it results
Benefit: use when your site takes too much loading time then also add teh timeOut promise of 5 seconds or as you wish in the promise.race() array and if it firslt executed then display its rejected portion
*/

//Promise.allSetteld()
/* No matters which of te promise rejected or fulfille give the results of all the promises in the array
 */

//Promise.any()
/*When any one of the promise whose is ful filled only give error when all the promises rejected
 */

// Promsie.all()
const capitalCountries = async function (c1, c2, c3) {
  try {
    const dataCountries = await Promise.all([
      getJson(`https://restcountries.com/v3.1/name/${c1}`, "Country Not Found"),
      getJson(`https://restcountries.com/v3.1/name/${c2}`, "Country Not Found"),
      getJson(`https://restcountries.com/v3.1/name/${c3}`, "Country Not Found"),
    ]);
    const capitals = dataCountries.map((data) => data[0].capital[0]);
    return capitals;
  } catch (err) {
    console.error(`${err.message}`);
  }
};
(async function () {
  const capitals = await capitalCountries("Pakistan", "India", "China");
  capitals.forEach((value) => {
    console.log(value);
  });
})();

//Proimise.race()
const timeOut = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Take too much time to fetch"));
    }, sec * 1000);
  });
};
Promise.race([
  getJson("https://restcountries.com/v3.1/name/India", "Country Not Found"),
  getJson("https://restcountries.com/v3.1/name/Pakistan", "Country Not Found"),
  getJson("https://restcountries.com/v3.1/name/China", "Country Not Found"),
  // timeOut(0.01),
  timeOut(2),
]).then((data) => {
  console.log(data[0]);
});

//Promise.allSetteled()
Promise.allSettled([
  Promise.resolve("Resolved 1"),
  Promise.reject("Rejected"),
  Promise.resolve("Resolved 2"),
]).then((res) => {
  console.log(res);
});

//Promise.any
Promise.any([
  Promise.resolve("Resolved 1"),
  Promise.reject("Rejected"),
  Promise.resolve("Resolved 2"),
]).then((res) => {
  console.log(res);
});
