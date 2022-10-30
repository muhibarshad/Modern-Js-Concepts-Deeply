/*
Every object has a prperty of the __proto__ that shows the behaviours inherited from the constructor function. In the constructotr function the prototype property itslef and object so it has a orototyoe itself. And this __proto__ is inherited from the object constructor function.And to move on , this object constructor function's prototype object has an prototype is null, which is our last in the scope chain.
When we call any method on our object of constructor fucnction, it can firstly search in othe object properties and methods, if not found them search in the object _proto__ properties, if not found then search in the _proto__ of the Constructor function prototype object. and move on to even not found null __proto__.This process is called the scope chain.
Arrays and functions are objects itself beacuse in the scope chain they have an __proto__ of the Object constructor function so they have a full access to the Object methods as wall.
*/
const Student = function (name, rollNo) {
  this.name = name;
  this.rollNo = rollNo;
};
Student.prototype.show = function () {
  console.log(
    `Name of student : ${this.name} \nRoll no of student : ${this.rollNo}`
  );
};
Student.prototype.campus = "new Campus";
const st_1 = new Student("Muhib", "BSEF21M540");



console.log(st_1.__proto__); //prototype of Constructor function
console.log(st_1.__proto__.__proto__); //pototype of pototype object constructor  function which is object
console.log(st_1.__proto__.__proto__.__proto__); //null
console.log(Student.prototype.constructor); //returs the constructor function




const arr = [1, 2, 2, 4, 5];
//new Array=[]
console.log(arr.__proto__); //Array Constructor prototype
console.log(arr.__proto__ === Array.prototype); //Array Constructor prototype == arr.__proto
console.log(arr.__proto__.__proto__); //Object Constructor prototype
//adding custom prototyps(never use them because if language can add it same method name with differennt functionality then conflift becomes and team of developers make same functions name with different functionalities)
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());



const h1 = document.querySelector("h1"); //seven levels of scope chaining HTmlElement, Element N,Node,
console.dir(h1);
const sum = (a, b) => a + b;
console.dir(sum); //function has an prototpyoe and its has also the object prototpe in teh scope chain
/*So arrays, functions and HTML elements are acutually the objects according the scope cahining of the __proto__ object*/
