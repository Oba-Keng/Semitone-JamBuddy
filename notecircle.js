//  let jsdom = require("jsdom")
class JamBuddy {
    constructor(){
        this.notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
        
        this.firstNote;
        this.secondNote;
        this.combinedNotes;
    }
//indexof() - use to return index of an element in an array
    selectNotes(){
        for(let i=0;i<this.notes.length;i++)

        if(this.firstNote==this.notes[i]||this.secondNote==this.notes[i+1]){
            
            this.firstNote = this.notes.filter(noteChecker => noteChecker == "A","A#"  );
            this.secondNote = this.notes.filter(noteChecker => noteChecker == "A#" );
            this.combinedNotes = this.firstNote.concat(this.secondNote)
            console.log(this.combinedNotes);

            
        }

    }

    checkAnswer(){
        if(this.combinedNotes==this.firstNote+this.secondNote){
            
        }

    }
}
 module.exports = JamBuddy;

jam = new JamBuddy();
notes = jam.selectNotes(['A','B']);