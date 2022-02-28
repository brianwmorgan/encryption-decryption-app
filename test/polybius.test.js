const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    
    it("should produce a string as an output", () => {
        const input = "hello world";
        const actual = polybius(input);
  
        expect(actual).to.be.a("string");
    });

    it("should maintain spaces in the message", () => {
        const input = "a b c";
        const actual = polybius(input);
        const expected = "11 21 31";
  
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const input = "ABC";
        const actual = polybius(input);
        const expected = "112131";
  
        expect(actual).to.equal(expected);
    });

    it("should encode both i and j to 42 when", () => {
        const input = "iii jjj";
        const actual = polybius(input);
        const expected = "424242 424242";
  
        expect(actual).to.equal(expected);
    });

    it("should return false when decoding if there is an odd quantity of numbers after removing spaces", () => {
        const input = "1234 567";
        const actual = polybius(input, false);
  
        expect(actual).to.be.false;
    });

    it("should decode an input of numbers by replacing each pair of numbers with the correct letter", () => {
        const input = "3251131343";
        const actual = polybius(input, false);
        const expected = "hello";
  
        expect(actual).to.equal(expected);
    });

    it("should decode 42 to i/j", () => {
        const input = "42";
        const actual = polybius(input, false);
        const expected = "i/j"
  
        expect(actual).to.equal(expected);
      });

    it("should maintain spaces from the original input when decoding", () => {
        const input = "3251131343 2543241341";
        const actual = polybius(input, false);
        const expected = "hello world";
  
        expect(actual).to.equal(expected);
    });

});