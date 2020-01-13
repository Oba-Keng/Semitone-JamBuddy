const jsdom = require("jsdom");
let fs = require("fs");
const JamBuddy = require("../notecircle");

describe("a note circle for musical notes that", function() {
  beforeEach(function() {
    const index = fs.readFileSync("./index.html", "utf-8");
    const { JSDOM } = jsdom;
    const { document } = new JSDOM(index).window;
    global.document = document;
  });
  it("defines class called JamBuddy", function() {
    let buddy = new JamBuddy();

    expect(buddy).toBeDefined();
  });
  it("function inside JamBuddy class defined", function() {
    let buddy = new JamBuddy();

    expect(buddy.selectNotes()).toBeDefined();
  });

  it("select notes", function() {
    let buddy = new JamBuddy();

    expect(buddy.selectNotes()).toEqual(jasmine.any(Array));
  });

  it("checks notes should take in user input", function() {
    let buddy = new JamBuddy();

    buddy.selectNotes();

    expect(buddy.checkAnswer()).not.toBeNull();
  });
  it("should return true or false", function() {
    let buddy = new JamBuddy();
    buddy.selectNotes();

    expect(buddy.checkAnswer()).toEqual(jasmine.any(String));
  });
});
