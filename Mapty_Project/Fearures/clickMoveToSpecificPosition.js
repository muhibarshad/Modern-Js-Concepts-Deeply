
// //add in the class constructor
// containerWorkouts.addEventListener("click", this._moveToMarker.bind(this));

// //class prototypal method
//  _moveToMarker(e){
//     const clickedWorkout = e.target.closest(".workout");
//     const clickedWorkout_Obj = this.#workouts.find(
//       (workout) => workout.id == clickedWorkout.dataset.id
//     );
//     this.#map.setView(clickedWorkout_Obj.coords,this.#zoomLevelX,{
//       animate:true,
//       pan:{
//         duration:1,
//       }
//     })
// }