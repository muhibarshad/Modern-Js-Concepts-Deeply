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

//getCurrentLocation_coordinates by geolocation navigator
//put them in geocode to find out the country
// through country display its data on card

const getCountryName = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const fetchCountry = function () {
  getCountryName().then((geoLoc) => {
    const { coords } = geoLoc;
    console.log(coords);
    const { latitude, longitude } = coords;
    // fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json.`)
    //   .then((response) => {
    //     if (!response.ok) throw new Error("Geo location is off.");
    //  return response.json();
      })
      .then(() => {
        // return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
        return fetch(`https://restcountries.com/v3.1/name/USA`);
      })
      .then((response) => {
        if (!response.ok) throw new Error("Country not found");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        displayingCountry(data[0]);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        countriesCard.style.opacity = 1;
      });
};

btn.addEventListener("click", () => {
  fetchCountry();
});
