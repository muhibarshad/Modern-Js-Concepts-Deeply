/*Async await is just the syantic sugar over the consuming promises. Writing an *async* with the function make its to be running behind the scenes  asynchorously. To stop the execuation in the async funtion like consuming promise and fetching data from the web server is to jsut write the *await* with the promise and the execuation stops at that point.Actually not because this function is async and runnning at athe background without stoping execuation of the main thread.
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
const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const getYourCountry = async function (countryName) {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;
  const resgeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json.`);
  const dataGeo = await resgeo.json();
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.country}`
  );
  const data = await res.json();
  displayingCountry(data[0]);
};
btn.addEventListener("click", () => {
  getYourCountry("Pakistan");
});
