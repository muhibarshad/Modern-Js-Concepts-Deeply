'use strict';
// getCurrentPosition() function has the two call back function parameters first is loaded when successfully getting the geolocation and second calls when it fails or eerors to get the location. Inside the Geoloaction object therie is a nested object cords which conatin the information of latitude and lagitude and speed also. get these latitude nad longitude and paste them in the google maps link .

//Using the Geolocation API
navigator.geolocation.getCurrentPosition(
    function (pos) {
      console.log(pos);
      const { latitude } = pos.coords;
      const { longitude } = pos.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`)
    },
    function () {
      alert("Does not work because of not allowing to your location.");
    }
  );
  