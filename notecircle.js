class JamBuddy {
  constructor() {
    this.notes = [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#"
    ];
    this.finalArray;
    this.finalDigit;
    this.fArray;
    this.userAnswer;
  }

  // function that returns two random notes in a notecircle
  selectNotes() {
    let newNotes = [];
    newNotes.push(...this.notes);

    let randomArray = newNotes.sort(() => Math.random() - 0.5);

    this.finalArray = randomArray.slice(0, 2);
    this.finalArray.sort();

    document.getElementById("pFinalArray").innerHTML = this.finalArray;

    return this.finalArray;
  }

  //function returns the index of selected notes
  checkAnswer() {
    let indexOne = this.notes.indexOf(this.finalArray[0]);

    let indexTwo = this.notes.indexOf(this.finalArray[1]);

    this.finalDigit = indexOne - indexTwo;

    //converts negative numbers by multiplying the number by one

    this.finalDigit < 0 ? (this.finalDigit *= -1) : this.finalDigit;

    this.userAnswer = document.getElementById("answer").value;

    //checks if user input is the correct answer
    if (this.userAnswer == this.finalDigit) {
      return (document.getElementById("p1").innerHTML =
        "You got it right budd,well Done!");
    } else {
      return (document.getElementById("p1").innerHTML =
        "Wrong answer! Try again");
    }
  }
}
module.exports = JamBuddy;

// jam = new JamBuddy();
// notes = jam.selectNotes();
// notice = jam.checkAnswer();
