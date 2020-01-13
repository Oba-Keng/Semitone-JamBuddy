const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const JamBuddy = require("../notecircle");

describe("a note circle for musical notes that", function() {
  beforeEach(function() {
    const dom = new jsdom.JSDOM(
      '<html><body><div id="pFinalArray"><div><input id="answer"></input></div></div></body></html>'
    );
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
  });

  it("select notes", function() {
    let buddy = new JamBuddy();

    expect(buddy.selectNotes()).toEqual(jasmine.any(Array));
  });

  it("checks notes", function() {
    let buddy = new JamBuddy();
    buddy.selectNotes();
    buddy.checkAnswer();
    expect(document.getElementById("answer").value).toEqual(
      jasmine.any(Number)
    );
  });
});
