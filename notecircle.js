class JamBuddy {

    constructor(){
        this.notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
        this.tempNote = [];
        this.char = [];
        this.randomIndex;
        this.randomIndex2;
    }
//indexof() - use to return index of an element in an array
    selectNotes(){
        let i = 0;

        if(this.tempNote==this.notes[i]){
            
            this.char = this.tempNote[i].push(this.notes[i])

            console.log(this.char)
        }else if(this.tempNote!=this.notes[i]){

        this.randomIndex = Math.floor(Math.random() * 10);
        

        this.character =  this.notes[this.randomIndex]

        console.log (this.character);

        // this.index = this.notes[randomIndex].push(this.notes[i]);

       }


        let j = 0;

        if(this.tempNote==this.notes[j]){
            
            this.char = this.tempNote[j].push(this.notes[j])

            console.log(this.char)
        }
        else if(this.tempNote!=this.notes[j]){

            this.randomIndex2 = Math.floor(Math.random() * 10);

            console.log (this.notes[this.randomIndex2]);

            if(this.randomIndex=='string'||this.randomIndex2=='string'){

            let finalArray = new Array();

            let finalNote = finalArray.push(this.char,this.notes[this.randomIndex2])

        console.log(finalNote)
}


        }


        



        


    }

    checkAnswer(){
//         if(this.combinedNotes==this        console.log (this.notes[randomIndex]);
// .firstNote+this.secondNote){
            
//         }

    }
}
// module.exports = JamBuddy;

 jam = new JamBuddy();
 notes = jam.selectNotes();

//  Bubble sort
// Merge sort
// Insertion sort
// Quick sort
// Heap sort