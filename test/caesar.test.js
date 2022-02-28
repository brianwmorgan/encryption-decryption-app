const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    
    it("should return false if no shift argument is provided", () => {
        const input = "have a nice day";
        const shift = "";
        const actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });
    
    it("should return false if the shift argument is 0", () => {
      const input = "have a nice day";
      const shift = 0;
      const actual = caesar(input, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift argument is less than -25", () => {
        const input = "have a nice day";
        const shift = -30;
        const actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });
    
    it("should return false if the shift argument is greater than 25", () => {
        const input = "have a nice day";
        const shift = 30;
        const actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });

    it("should ignore capital letters", () => {
        const input = "HELLO GOODBYE";
        const shift = 1;
        const actual = caesar(input, shift);
        const expected = "ifmmp hppeczf";
  
        expect(actual).to.equal(expected);
      });
      
    it("should handle shifts that go past the beginning of the alphabet", () => {
        const input = "abcdef";
        const shift = -10;
        const actual = caesar(input, shift);
        const expected = "qrstuv";
  
        expect(actual).to.equal(expected);
      });

    it("should handle shifts that go past the end of the alphabet", () => {
        const input = "uvwxyz";
        const shift = 10;
        const actual = caesar(input, shift);
        const expected = "efghij";
  
        expect(actual).to.equal(expected);
      });

    it("should maintain spaces and other nonalphabetic symbols when encoding", () => {
        const input = "! the @ man # with $ glasses & on says, 'hi.'";
        const shift = 5;
        const actual = caesar(input, shift);
        const expected = "! ymj @ rfs # bnym $ lqfxxjx & ts xfdx, 'mn.'";
  
        expect(actual).to.equal(expected);
      });

    it("should maintain spaces and other nonalphabetic symbols when decoding", () => {
        const input = "! ymj @ rfs # bnym $ lqfxxjx & ts xfdx, 'mn.'";
        const shift = -5;
        const encode = false;
        const actual = caesar(input, shift);
        const expected = "! the @ man # with $ glasses & on says, 'hi.'";
    
        expect(actual).to.equal(expected);
      });

});