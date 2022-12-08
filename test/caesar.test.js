///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VERSION #2 - DECEMBER 2022

const expect = require("chai").expect;
const { caesar } = require("../src/caesar.js");

describe("caesar()", () => {
  it("should return 'false' if the shift value is equal to '0'", () => {
    const input = "Zebra Magazine";
    const shift = 0;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
  it("should return 'false' if the shift value is less than '-25'", () => {
    const input = "Zebra Magazine";
    const shift = -26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
  it("should return 'false' if the shift value is greater than '25'", () => {
    const input = "Zebra Magazine";
    const shift = 26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
  it("should return 'false' if the shift value is not present", () => {
    const input = "Zebra Magazine";
    const shift = null;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
  it("should ignore capital letters", () => {
    const input = "Zebra Magazine";
    const shift = 3;
    const expected = "cheud pdjdclqh";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  it("should handle shifts that go past the beginning of the alphabet", () => {
    const input = "abc";
    const shift = -3;
    const expected = "xyz";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  it("should handle shifts that go past the end of the alphabet", () => {
    const input = "xyz";
    const shift = 3;
    const expected = "abc";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other nonalphabetic symbols", () => {
    const input = "123 456 789 Zebra Magazine !@# $%^ &*(";
    const shift = 3;
    const expected = "123 456 789 cheud pdjdclqh !@# $%^ &*(";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VERSION #1 - FEBRUARY 2022

/*
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

*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
