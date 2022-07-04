const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
  const userOption= Number(prompt(` ${this.question} \n ${this.options.join("\n")}
   (write option number.)`));
   userOption>=0 && userOption<=3?this.answers[userOption]=1:`Wrong input ! ${registerNewAnswer()}`;
  },
  
};
poll.registerNewAnswer();
console.log(poll.answers);
