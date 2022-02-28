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