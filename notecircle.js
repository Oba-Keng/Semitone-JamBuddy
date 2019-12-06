class JamBuddy {

    constructor(){
        this.notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
        this.finalArray;
        this.finalDigit;
    }

// function that returns two random notes in a notecircle
    selectNotes(){

        
        let newNotes = []
        newNotes.push(...this.notes);
        let originalArray = document.getElementById('pArray').innerHTML=newNotes;
        
        let randomArray = newNotes.sort(()=>Math.random()-0.5)
        let rArray = document.getElementById('pRandomArray').innerHTML=randomArray;
        
        this.finalArray = randomArray.slice(0,2);
        this.finalArray.sort();
        let fArray = document.getElementById('p').innerHTML=this.finalArray;

        return originalArray,rArray,fArray;

    }

//function returns the index of selected notes
    checkAnswer(){

        let indexOne = this.notes.indexOf(this.finalArray[0])
                   
        let indexTwo = this.notes.indexOf(this.finalArray[1])

                  this.finalDigit = indexOne - indexTwo;

//converts negative numbers by multiplying the number by one

        this.finalDigit < 0 ? this.finalDigit *=-1 : this.finalDigit
            
        let userAnswer = document.getElementById('answer').value;
        

        if(userAnswer==this.finalDigit){

            return document.getElementById('p1').innerHTML="You got it right budd,well Done!";
           
            

        }else {
            return document.getElementById('p1').innerHTML="Wrong answer! Try again";
        }    
    
}
}
// module.exports = JamBuddy;

 jam = new JamBuddy();
 notes = jam.selectNotes();
 notice = jam.checkAnswer()

