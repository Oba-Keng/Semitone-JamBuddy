const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const JamBuddy = require("../notecircle")

describe("", function(){

    it('selects notes', function(){
        let buddy = new JamBuddy();
expect(buddy.selectNotes(['A','A#'])).toEqual(['A','A#'])

    });

    it('checks notes', function(){
        let buddy = new JamBuddy();
        expect(buddy.checkAnswers().toBe(true))
    });

})