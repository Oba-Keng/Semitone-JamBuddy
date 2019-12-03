class JamBuddy {

    constructor(){
        this.notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
        this.finalArray;
    }

//function that returns two random notes in a notecircle
    selectNotes(){
        
        let newArr = []
        newArr.push(...this.notes);
        console.log(newArr);

        let randomArray = newArr.sort(()=>Math.random()-0.5)
        console.log(randomArray)
        
        this.finalArray = randomArray.slice(0,2);
        this.finalArray.sort();

        console.log(this.finalArray)
        return this.finalArray;

   
    }

    checkAnswer(){

        let indexOne = this.notes.indexOf(this.finalArray[0])
                   console.log(indexOne)
        let indexTwo = this.notes.indexOf(this.finalArray[1])
                  console.log(indexTwo)

                  let finalDigit = indexOne - indexTwo;
                    console.log(finalDigit)

                    
                    finalDigit < 0 ? finalDigit *=-1 : finalDigit
                    console.log(finalDigit)
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