///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VERSION #2 - DECEMBER 2022

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25 || !shift) return false;
    if (encode === false) shift = shift * -1;

    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const message = input.toLowerCase();
    let result = "";

    for (let i = 0; i < message.length; i++) {
      let character = message[i];
      if (!alphabet.includes(character)) {
        result += character;
      } else {
        let currentIndex = alphabet.indexOf(character);
        let shiftedIndex = currentIndex + shift;
        if (shiftedIndex > 25) shiftedIndex = shiftedIndex - 26;
        if (shiftedIndex < 0) shiftedIndex = shiftedIndex + 26;
        result += alphabet[shiftedIndex];
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VERSION #1 - FEBRUARY 2022

/*
const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) return false;
    
    if (encode === false) shift = shift * (-1);

    let lowerCaseInput = input.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";

    for (let i = 0; i < lowerCaseInput.length; i++) {
      let currentLetter = lowerCaseInput[i];
      if (!alphabet.includes(currentLetter)) {
        result += currentLetter;
        continue;
      };
      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + shift; // currentLetter = a -> currentIndex = 0; if shift = -1 -> newIndex = 0 + (-1) = -1
      if (newIndex > 25) newIndex = newIndex - 26; // currentLetter = z -> currentIndex = 25; if shift = 5 -> newIndex = 30 -> (30 - 26) = 4 -> letter = e 
      if (newIndex < 0) newIndex = newIndex + 26; // currentLetter = b -> currentIndex = 1; if shift = -2 -> newIndex = -1 -> (-1 + 26) = 25 -> letter = z
      result += alphabet[newIndex];
    };
    return result;
    
  };

  return {
    caesar,
  };
})();
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = { caesar: caesarModule.caesar };
