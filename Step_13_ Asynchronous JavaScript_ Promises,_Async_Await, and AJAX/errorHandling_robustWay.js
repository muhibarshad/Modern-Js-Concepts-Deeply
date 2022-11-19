/*When the user made promise is rejected then automatically it can catched by the catch functions.
When there is no internet then the error status is 404 and this is automatically catched by the catch function . but when we give wrong information to the api and api is responsed and works but nnot fetched data according to it then this error is not caught by the catch handler.we can manually add this error by checking status is false or true.
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
const renderError = function (msg) {
  countriesCard.insertAdjacentText("beforebegin", msg);
};
const getYourCountry = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resgeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json.`);
    if (!resgeo.ok) throw new Error("Problem with the getting your location");
    const dataGeo = await resgeo.json();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error("Problem with the getting country data");
    const data = await res.json();
    displayingCountry(data[0]);
  } catch (err) {
    renderError(`${err.message}`);
  }
};

btn.addEventListener("click", () => {
  getYourCountry();
});



// const YourCountry = async function (country) {
//     try {
//       const res = await fetch(
//         `https://restcountries.com/v3.1/name/${country}`
//       );
//       if (!res.ok) throw new Error("Problem with the getting country data");
//       const data = await res.json();
//       displayingCountry(data[0]);
//     } catch (err) {
//       renderError(`${err.message}`);
//     }
//   };

//   btn.addEventListener("click", () => {
//     getYourCountry('Pakistan');
//   });
