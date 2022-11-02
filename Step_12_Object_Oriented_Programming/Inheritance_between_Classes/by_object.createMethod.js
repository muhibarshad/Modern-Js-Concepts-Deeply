/*In the object . create method we can just inheriting the protopyes of each object*/
const personProto = {
  init(fullname, birthYear) {
    this.fullname = fullname;
    this.birthYear = birthYear;
  },
  calAge() {
    console.log(`${2022 - this.birthYear}`);
  },
  getData() {
    console.log(`Name : ${this.fullname}\nBirthYear: ${this.birthYear}`);
  },
};

const StudentProto = Object.create(personProto);
StudentProto.init = function (fullname, birthYear, degree) {
  personProto.init.call(this, fullname, birthYear);
  this.degree = degree;
};
StudentProto.introduce = function () {
  console.log(
    `Name :${this.fullname}\nDegree: ${this.degree} Age:${this.calAge()}`
  );
};
const st_1=Object.create(StudentProto);
st_1.init('Muhib',2002,'Software Engeenering')
st_1.introduce();
st_1.calAge();
console.log(st_1);
