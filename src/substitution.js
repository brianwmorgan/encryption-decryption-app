///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VERSION #2 - DECEMBER 2022

const substitutionModule = (function () {
  
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    let uniqueCharacters = "";
    for (let i = 0; i < alphabet.length; i++) {
      let character = alphabet[i];
      if (!uniqueCharacters.includes(character)) uniqueCharacters += character;
    }
    if (uniqueCharacters.length !== 26) return false;

    let standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let givenAlphabet = alphabet;
    let message = input.toLowerCase();
    let result = "";

    for (let i = 0; i < message.length; i++) {
      let character = message[i];
      if (character === " ") {
        result += character;
      } else {
        if (encode) {
          let index = standardAlphabet.indexOf(character);
          result += givenAlphabet[index];
        } else {
          let index = givenAlphabet.indexOf(character);
          result += standardAlphabet[index];
        }
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VERSION #1 - FEBRUARY 2022

/*
const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    
    // return false if 'alphabet' is not provided OR is not exactly 26 characters
    if (!alphabet || alphabet.length !== 26) return false;
    // return false if alphabet has any repeating characters
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) return false;
      };
    };

    let result = "";
    let lowerCaseInput = input.toLowerCase();
    let alphabetArray = alphabet.split('');
    
    // if you are encoding a readable message...
    if (encode) {

      const encodedAlphabet = {
        'a': alphabetArray[0], 'b': alphabetArray[1], 'c': alphabetArray[2], 'd': alphabetArray[3], 'e': alphabetArray[4], 
        'f': alphabetArray[5], 'g': alphabetArray[6], 'h': alphabetArray[7], 'i': alphabetArray[8], 'j': alphabetArray[9], 
        'k': alphabetArray[10], 'l': alphabetArray[11], 'm': alphabetArray[12], 'n': alphabetArray[13], 'o': alphabetArray[14], 
        'p': alphabetArray[15], 'q': alphabetArray[16], 'r': alphabetArray[17], 's': alphabetArray[18], 't': alphabetArray[19], 
        'u': alphabetArray[20], 'v': alphabetArray[21], 'w': alphabetArray[22], 'x': alphabetArray[23], 'y': alphabetArray[24], 
        'z': alphabetArray[25]
      };

      for (let i = 0; i < lowerCaseInput.length; i++) {
        let currentCharacter = lowerCaseInput[i];
        if (currentCharacter in encodedAlphabet) {
          result += Object.values(encodedAlphabet[currentCharacter]);
        } else {
          result += currentCharacter;
        };
      };
    };

    // if you are decoding an unreadable message...
    if (!encode) {

      const decodedAlphabet = {
        [alphabetArray[0]]: 'a', [alphabetArray[1]]: 'b', [alphabetArray[2]]: 'c', [alphabetArray[3]]: 'd', [alphabetArray[4]]: 'e', 
        [alphabetArray[5]]: 'f', [alphabetArray[6]]: 'g', [alphabetArray[7]]: 'h', [alphabetArray[8]]: 'i', [alphabetArray[9]]: 'j', 
        [alphabetArray[10]]: 'k', [alphabetArray[11]]: 'l', [alphabetArray[12]]: 'm', [alphabetArray[13]]: 'n', [alphabetArray[14]]: 'o', 
        [alphabetArray[15]]: 'p', [alphabetArray[16]]: 'q', [alphabetArray[17]]: 'r', [alphabetArray[18]]: 's', [alphabetArray[19]]: 't', 
        [alphabetArray[20]]: 'u', [alphabetArray[21]]: 'v', [alphabetArray[22]]: 'w', [alphabetArray[23]]: 'x', [alphabetArray[24]]: 'y', 
        [alphabetArray[25]]: 'z',
      };

    for (let i = 0; i < lowerCaseInput.length; i++) {
      let currentCharacter = lowerCaseInput[i];
      if (currentCharacter in decodedAlphabet) {
        result += Object.values(decodedAlphabet[currentCharacter]);
      } else {
        result += currentCharacter;
      };
    };
  };

    return result;
    
  };

  return {
    substitution,
  };
})();
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = { substitution: substitutionModule.substitution };
