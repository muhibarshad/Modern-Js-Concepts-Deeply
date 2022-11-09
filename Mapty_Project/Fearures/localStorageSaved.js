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