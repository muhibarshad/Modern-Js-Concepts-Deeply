"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

//Parent-Class
class Workouts {
  date = new Date();
  id = (Date.now() + "").slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}

//child-class
class Running extends Workouts {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  //in min/km
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

//child-class
class Cycling extends Workouts {
  type = "cycling";
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.calcSpeed();
  }
  //in km/h
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

//Main Class of the whole app
class Mapty {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPostion();
    form.addEventListener("submit", this._newWorkout.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
  }

  _getPostion() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        alert("Does not work because of not allowing to your location.");
      }
    );
  }

  _loadMap(pos) {
    const { latitude } = pos.coords;
    const { longitude } = pos.coords;

    this.#map = L.map("map").setView([latitude, longitude], 14);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    //Default-Behaviour
    e.preventDefault();
    inputCadence.value =
    inputDistance.value =
    inputDuration.value =
    inputElevation.value =
      "";

    //Form--data
    const type = inputType.value;
    const duration = +inputDuration.value;
    const distance = +inputDistance.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
   
    //Validation-Helper-Functions
    const validNumbers = (...inputs) =>
      inputs.every((input) => Number.isFinite(input));
    const validPositive = (...inputs) => inputs.every((input) => input > 0);
    
    //Input-Validation
    if (type === "running") {
      const cadence = +inputCadence.value;
      if (
        !validNumbers(duration, distance, cadence) ||
        !validPositive(duration, distance, cadence)
      )
        return alert("Error: Input should be a positive number");
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    if (type === "cycling") {
      const elevation = +inputElevation.value;
      if (
        !validNumbers(duration, distance, elevation) ||
        !validPositive(duration, distance, elevation)
      )
        return alert("Error: Input should be a positive number");
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //Adding workout to the workouts array
    this.#workouts.push(workout);
    
    //Insert the workout to the screen
    //Hide the render
    
    //Display the marker
    this.displayMarker(workout);
  }


  displayMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent("Workout")
      .openPopup();
  }
}

const mapty = new Mapty();
