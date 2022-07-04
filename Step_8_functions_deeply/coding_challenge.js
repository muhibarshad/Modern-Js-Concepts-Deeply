"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    //prompt
    const userOption = Number(
      prompt(` ${this.question} \n ${this.options.join("\n")}
   (write option number.)`)
    );
    //check
    userOption >= 0 && userOption <= 3
      ? this.answers[userOption]++
      : alert("Wrong input Try again!");

    //default parameters
    this.displayResults();
    this.displayResults("string");
  },
  //run displayResult function
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else {
      console.log(` Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".btn")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

//additional call
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string"); //make an external object for answes calling
