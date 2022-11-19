"use strict";

const countriesCard = document.querySelector(".countries");
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

//Promise-code
const getCountryData = function (countryName) {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.json())
    .then((data) => {
      displayingCountry(data[0]);
    });
};
getCountryData("India");
getCountryData("Pakistan");
getCountryData("USA");
