///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VERSION #2 - DECEMBER 2022

const expect = require("chai").expect;
const { substitution } = require("../src/substitution.js");

describe("substitution()", () => {
  it("should return 'false' if the given 'alphabet' isn't exactly 26 characters long", () => {
    const input = "hello world";
    const alphabet = "abcdefghijklmnop";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });
  it("should correctly encode the given phrase", () => {
    const input = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "y&ii$r&"
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("should correctly decode the given phrase", () => {
    const input = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const encode = false;
    const expected = "message"
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("should return 'false' if the given 'alphabet' contains any duplicate characters", () => {
    const input = "hello world";
    const alphabet = "abcdddghijklmopqrs222wxyz";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });
  it("should maintain spaces in the message", () => {
    const input = "m e s s a g e";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "y & i i $ r &"
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const input = "MESSAGE";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "y&ii$r&"
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VERSION #1 - FEBRUARY 2022

/*
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    
    it("should return false if no alphabet is provided", () => {
        const input = "hello world";
        const actual = substitution(input);

        expect(actual).to.be.false;
    });

    it("should return false if alphabet is not exactly 26 letters", () => {
        const input = "hello world";
        const alphabet = "bcdefghijklmnopqrstuvwxyz"
        const actual = substitution(input, alphabet);
        
        expect(actual).to.be.false;
    });

    it("should return false if alphabet has any repeating characters", () => {
        const input = "hello world";
        const alphabet = "aaadefghijklmnopqrstuvwxyz"
        const actual = substitution(input, alphabet);
        
        expect(actual).to.be.false;
    });

    it("should return an accurate message when encoding", () => {
        const input = "hello";
        const alphabet = "123456789abcdefghijklmnopq"
        const actual = substitution(input, alphabet);
        const expected = "85ccf";
  
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when encoding", () => {
        const input = "hello world";
        const alphabet = "123456789abcdefghijklmnopq"
        const actual = substitution(input, alphabet);
        const expected = "85ccf nfic4";
  
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters when encoding", () => {
        const input = "HELLO WORLD";
        const alphabet = "123456789abcdefghijklmnopq"
        const actual = substitution(input, alphabet);
        const expected = "85ccf nfic4";
  
        expect(actual).to.equal(expected);
    });

    it("should return an accurate message when decoding", () => {
        const input = "85ccf";
        const alphabet = "123456789abcdefghijklmnopq"
        const actual = substitution(input, alphabet, false);
        const expected = "hello";
  
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when decoding", () => {
        const input = "85ccf nfic4";
        const alphabet = "123456789abcdefghijklmnopq"
        const actual = substitution(input, alphabet, false);
        const expected = "hello world";
  
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters when decoding", () => {
        const input = "85CCF NFIC4";
        const alphabet = "123456789abcdefghijklmnopq"
        const actual = substitution(input, alphabet, false);
        const expected = "hello world";
  
        expect(actual).to.equal(expected);
    });

});
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////