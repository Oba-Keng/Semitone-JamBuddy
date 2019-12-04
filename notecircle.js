class JamBuddy {

    constructor(){
        this.notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
        this.finalArray;
        this.finalDigit;
    }

//function that returns two random notes in a notecircle
    selectNotes(){
        
        let newNotes = []
        newNotes.push(...this.notes);
        // console.log(newNotes);

        let randomArray = newNotes.sort(()=>Math.random()-0.5)
        // console.log(randomArray)
        
        this.finalArray = randomArray.slice(0,2);
        this.finalArray.sort();

        console.log(this.finalArray)
        return this.finalArray;

   
    }

//method returns the index of selected notes
    checkAnswer(){

        let indexOne = this.notes.indexOf(this.finalArray[0])
                   console.log("index of first element - " + indexOne)
        let indexTwo = this.notes.indexOf(this.finalArray[1])
                  console.log("index of second element - " + indexTwo)

                  this.finalDigit = indexOne - indexTwo;
                    // console.log(this.finalDigit)

//converts negative numbers by multiplying the number by one

        this.finalDigit < 0 ? this.finalDigit *=-1 : this.finalDigit
                    console.log(this.finalDigit + " semitones seperate these notes")

            return this.finalDigit;

                    
    }
}
module.exports = JamBuddy;

 jam = new JamBuddy();
 notes = jam.selectNotes();
 notice = jam.checkAnswer()

//  Bubble sort
// Merge sort
// Insertion sort
// Quick sort
// Heap sort