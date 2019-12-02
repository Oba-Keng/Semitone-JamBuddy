class JamBuddy {

    constructor(){
        this.notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
        
    }

//function that returns two random notes in a notecircle
    selectNotes(){
        
        let i = 0;

        let randomArray = this.notes.sort(()=>Math.random()-0.5)
        
        let finalArray = randomArray.slice(0,2);
        console.log(finalArray)
        return finalArray;

   
    }

    checkAnswer(){



    }
}
module.exports = JamBuddy;

 jam = new JamBuddy();
 notes = jam.selectNotes();

//  Bubble sort
// Merge sort
// Insertion sort
// Quick sort
// Heap sort