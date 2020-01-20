class JamBuddy {
  constructor() {
    this.notes = [
      "A",
      ["A#", "Bb"],
      "B",
      "C",
      ["C#", "Db"],
      "D",
      ["D#", "Eb"],
      "E",
      "F",
      ["F#", "Gb"],
      "G",
      ["G#", "Ab"]
    ];
    this.finalArray;
    this.newArr;
    this.finalDigit;
    this.fArray;
    this.userAnswer;
    this.revealAnswer;
  }

  // function that returns two random notes in a notecircle
  selectNotes() {
    let newNotes = [];

    newNotes.push(...this.notes);

    let randomArray = newNotes.sort(() => Math.random() - 0.5);

    this.finalArray = randomArray.slice(0, 2);
    this.finalArray.sort();

    let ran = Math.random * 1;

    let random = ran.toFixed();

    for (let i = 0; i < this.finalArray.length; i++) {
      this.finalArray[i][random];

      for (let j = i - 1; j < this.finalArray[i].length; j++) {
        if (this.finalArray[i].length > 1) {
          this.finalArray[i].splice(0, 1);
        }
      }
    }
    this.fArray = document.getElementById(
      "pFinalArray"
    ).innerHTML = this.finalArray;
    // console.log(this.finaArray);

    return this.fArray;
  }

  //function returns the index of selected notes
  checkAnswer() {
    let indexOne = this.notes.indexOf(this.finalArray[0]);

    let indexTwo = this.notes.indexOf(this.finalArray[1]);

    this.finalDigit = indexOne - indexTwo;

    //converts negative numbers by multiplying the number by one

    this.finalDigit < 0 ? (this.finalDigit *= -1) : this.finalDigit;

    this.userAnswer = document.getElementById("answer").value;

    // checks if user input is the correct answer
    if (this.userAnswer == "") {
      return "";
    }
    if (this.userAnswer == this.finalDigit) {
      return (document.getElementById("p1").innerHTML =
        "You got it right budd,well Done!");
    } else {
      return (document.getElementById("p1").innerHTML =
        "Wrong answer! Try again");
    }
  }
  expose() {
    this.revealAnswer = document.getElementById(
      "explanation"
    ).innerHTML = this.notes;
    return this.revealAnswer;
  }
  //  hide() {
  //     let hidediv = document.getElementById("explanation");
  //     document.onclick = function(div) {
  //       if (div.target.id !== "explanation") {
  //         hidediv.style.display = "none";
  //       }
  //     };
}
// module.exports = JamBuddy;

jam = new JamBuddy();
notes = jam.selectNotes();
notice = jam.checkAnswer();
