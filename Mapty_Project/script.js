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
  _workoutDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()} `;
  }
}

//child-class
class Running extends Workouts {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._workoutDescription();
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
    this._workoutDescription();
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
  #zoomLevelX = 13;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPostion();
    this._getLocalStorage();
    form.addEventListener("submit", this._newWorkout.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
    containerWorkouts.addEventListener("click", this._moveToMarker.bind(this));
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

    this.#map = L.map("map").setView([latitude, longitude], this.#zoomLevelX);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showForm.bind(this));
    this.#workouts.forEach((work) => {
      this._displayMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _hideForm() {
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        "";
    form.style.display = "none";
    form.classList.add("hidden");
    setTimeout(() => (form.style.display = "grid"), 1000);
  }

  _toggleElevationField() {
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    //Default-Behaviour
    e.preventDefault();

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
    //Display the marker
    this._displayMarker(workout);
    //Insert and display the workout to the screen
    this._renderWorkout(workout);
    //Hide the form
    this._hideForm();
    //set local storage to workout
    this._setLocalStorage();
  }

  _displayMarker(workout) {
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
      .setPopupContent(
        `${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${workout.description}`
      )
      .openPopup();
  }

  //Rendering workouts in the list
  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
      
    `;
    if (workout.type === "running") {
      html += `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.cadence}</span>
      <span class="workout__unit">spm</span>
    </div>
  </li>

      `;
    }
    if (workout.type === "cycling") {
      html += `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevation}</span>
      <span class="workout__unit">m</span>
    </div>
  </li> -->
      `;
    }
    form.insertAdjacentHTML("afterend", html);
  }

  _moveToMarker(e) {
    const clickedWorkout = e.target.closest(".workout");
    const clickedWorkout_Obj = this.#workouts.find(
      (workout) => workout.id == clickedWorkout.dataset.id
    );
    this.#map.setView(clickedWorkout_Obj.coords, this.#zoomLevelX, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts));
  }
  _getLocalStorage() {
    const workoutsData = JSON.parse(localStorage.getItem("workouts"));
    if (!workoutsData) return;
    this.#workouts = workoutsData;
    this.#workouts.forEach((work) => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem("workouts");
    location.reload();
  }
}

const mapty = new Mapty();
