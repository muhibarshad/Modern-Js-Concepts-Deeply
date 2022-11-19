/*Async function actuually returs the promise so when we log it to the console than acutally we get the promise. so returning some literals from the async function never gives it so wecan use the IIFO funtions to returns them.
 */

"use strict";
const countriesCard = document.querySelector(".countries");
const btn = document.querySelector(".btn-country");
const displayingCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} M</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[1]
          ? Object.values(data.languages)[1]
          : Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>
    `;
  countriesCard.insertAdjacentHTML("beforeend", html);
  countriesCard.style.opacity = 1;
};

//code to get currentLoacation

const renderError = function (msg) {
  countriesCard.insertAdjacentText("beforebegin", msg);
};

const YourCountry = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error("Problem with the getting country data");
    const data = await res.json();
    displayingCountry(data[0]);
    return `Your country is in the region of ${data[0].region}`;
  } catch (err) {
    renderError(`${err.message}`);
    throw err;
  }
};

btn.addEventListener("click", () => {
  YourCountry("Pakistan");
});

(async function () {
  try {
    const countryRegion = await YourCountry("Pakistan");
    console.log(countryRegion);
  } catch (err) {
    console.error(err.message);
  }
})();
