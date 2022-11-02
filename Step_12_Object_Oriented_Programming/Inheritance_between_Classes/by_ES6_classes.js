/*Here we have only teo things one is the extends keyword taht inherits the parent class into the child class nad the super function that calls the parent class constructor first and then calls the child class constructor.And how these can actually works same as the constructor functons inheritance works behind the scenes*/
class Person {
  constructor(fullname, birthYear) {
    this.fullname = fullname;
    this.birthYear = birthYear;
  }
  set fullname(name) {
    if (name.includes(" ")) this._fullname = name;
    else alert(`${name} is not your full name`);
  }
  get fullname() {
    return this._fullname;
  }
  greetingMessage() {
    console.log(`Hello ${this.fullname} ,Welcome here!`);
  }
  static hey() {
    console.log("Heeeloo");
    console.log(this);
  }
  calAge() {
    return 2022 - this.birthYear;
  }
}
class Student extends Person {
  constructor(fullname, birthYear, degree) {
    super(fullname, birthYear);
    this.degree = degree;
  }

  introduce() {
    console.log(
      `Name :${this.fullname}\nAge:${this.calAge()}\nDegree: ${this.degree}`
    );
  }
  calAge() {
    return `I am ${2022 - this.birthYear} years old. But feeling like a ${
      2022 - this.birthYear - 10
    } years old`;
  }
}
const st_1 = new Student("Muhib Arshad", 2002, "Software Engeenering");
console.log(st_1);
console.log(st_1.calAge());
console.log(st_1.fullname);
Student.hey();
