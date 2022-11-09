/*
.on is a prototypal inherited method from the map class object.use as addEventListener to detect the click on a certain map line otherwise the traditional addEventListener takes teh whole map as a singal click.then inside this call bak function there is an eventListener which conatines the information of the event happens at a certain point. This event object has a nested object of the latlang wich contains the current clicked coordinates.take them and passed it to the marker function.
attached it to the map and then popup which has a parameter of the L.popup which also has the parameter object which conatines the option on the pop up see them from teh documentation of the leaflet. then attach the chaining metthod of the prototypal inherited function to them conating the test of the poppup and thats is,
*/
map.on("click", function (mapEvent) {
    console.log(mapEvent);
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "running-popup",
        })
      )
      .setPopupContent("Workout")
      .openPopup();
  });