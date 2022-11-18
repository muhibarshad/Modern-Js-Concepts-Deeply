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
};

const getJSON = function (url, message = "Something Went Wrong") {
  return fetch(url).then((response) => {
    if (!response.ok)
      throw new Error(`Something Went Wrong ${message} ${response.status}`);
    response.json();
  });
};

const whereAmI = function (lat, long) {
  getJSON(
    `https://geocode.xyz/${lat},${long}?geoit=json.`,
    "Requesting speedly"
  )
    .then((data) => {
      console.log(`you are in ${data.city} , ${data.country}`);
      return getJSON(
        `https://restcountries.com/v3.1/name/${data.country}`,
        "Country Not Found"
      );
    })
    .then((data) => displayingCountry(data[0]))
    .catch((err) => console.error(err))
    .finally(() => {
      countriesCard.style.opacity = 1;
    });
};


