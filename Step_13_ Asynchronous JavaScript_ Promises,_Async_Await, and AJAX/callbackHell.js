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

const getCountiesData = function (countryName) {
    
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    displayingCountry(data);

    const request2 = new XMLHttpRequest();
    const [neighbourCountry] = data.borders;
    if (!neighbourCountry) return;
    request.open(
      "Get",
      `https://restcountries.com/v3.1/alpha/${neighbourCountry}`
    );
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.request2);
      displayingCountry(data2, "neighbour");
    });
  });
};

getCountiesData("Pakistan");
// getCountiesData("UAE");
// getCountiesData("USA");
