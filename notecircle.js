class JamBuddy {

    constructor(){
        this.notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
        this.tempNote = [];
        this.char = [];
    }
//indexof() - use to return index of an element in an array
    selectNotes(){
        let i = 0;

        if(this.tempNote==this.notes[0]){
            this.char = this.notes[i].push(this.tempNote[i])
            console.log(this.char)
        }else if(this.tempNote!=this.notes[0]){

        let randomIndex = Math.floor(Math.random() * 10);
        // let character =  this.notes.charAt(this.notes[randomIndex])
        console.log (this.notes[randomIndex]);

        // this.index = this.tempNote[randomIndex].push(this.notes[i]);

        let randIndex2 = Math.floor(Math.random() * 10);

       }
        


    }

    checkAnswer(){
        if(this.combinedNotes==this.firstNote+this.secondNote){
            
        }

    }
}
// module.exports = JamBuddy;

 jam = new JamBuddy();
 notes = jam.selectNotes(['A']);

//  Bubble sort
// Merge sort
// Insertion sort
// Quick sort
// Heap sort