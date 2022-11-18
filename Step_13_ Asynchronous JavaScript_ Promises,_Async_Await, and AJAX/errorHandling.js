//Errror_handling
/*catch() function returs the another promise but it can be calls and execute when it get the erro in the chaining of the promises in any position
finally() function will always be called if th fetch promise will be responsed or rejected we can use them in the hiding of the loaders during doing the ascynchoronus tasks.
 threw new Error('Error_Message') immediately rejected the promise and caught the catch() function error to it .
*/

"use strict";
const countriesCard = document.querySelector(".countries");
const btn = document.querySelector(".btn-country");

const displayingCountry = function (data, className = "") {
  const html = `
      <article class="country ${className} ">
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
};

const errorMessage = function (message) {
  countriesCard.insertAdjacentText("beforebegin", message);
};

const getJson = function (url, errorMessage = "404 content not found") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (countryName) {
  getJson(
    `https://restcountries.com/v3.1/name/${countryName}`,
    "Country Not found"
  )
    .then((data) => {
      displayingCountry(data[0]);
      console.log(data)
      console.log(data[0])
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error("No neighbour country found");
      return getJson(
        `https://restcountries.com/v3.1/name/${neighbour}`,
        "Country Not found"
      );
    })
    .then((data) => {
      displayingCountry(data[0]);
    })
    .catch((err) => {
      errorMessage(`Something went wrong.${err.message}. Try again`);
    })
    .finally(() => {
      countriesCard.style.opacity = 1;
    });
};

btn.addEventListener("click", () => {
  getCountryData("USA");
});
