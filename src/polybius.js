///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VERSION #2 - DECEMBER 2022

const polybiusModule = (function () {

  function polybius(input, encode = true) {

    const encoder = {
      a: "11", b: "21", c: "31", d: "41", e: "51",
      f: "12", g: "22", h: "32", i: "42", j: "42", k: "52",
      l: "13", m: "23", n: "33", o: "43", p: "53",
      q: "14", r: "24", s: "34", t: "44", u: "54",
      v: "15", w: "25", x: "35", y: "45", z: "55",
    }
    const decoder = {
      11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
      12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
      13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
      14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
      15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
    }

    if (encode) {
      let message = input.toLowerCase();
      let result = "";
      
      for (let i = 0; i < message.length; i++) {
        let character = message[i];
        if (encoder[character]) {
          result += encoder[character];
        } else {
          result += character;
        };
      }

      return result;

    } else {
      let inputWithoutSpaces = input.split(" ").join("");
      if (!Number.isInteger(inputWithoutSpaces.length/2)) return false;

      let result = "";
      for (let i = 0; i < input.length; i += 2) {
        let code = `${input[i]}${input[i + 1]}`;
        if (code.includes(" ")) {
          result += " ";
          i--;
        } else {
          result += decoder[code];
        };
      }
      return result;
    }
  }

  return {
    polybius,
  };
})();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VERSION #1 - FEBRUARY 2022

/*
const polybiusModule = (function () {

  function polybius(input, encode = true) {
  
    // create two objects, one that encodes and one that decodes
    const encoder = {'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };
    const decoder = {'11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };
    
    // define an output variable
    let result = "";
  
    // if input is a string that needs to be encoded...
    if (encode === true) {
      // define a new variable as the lowercase version of the input string
      let lowerCaseInput = input.toLowerCase();
      // loop through each character of the lowercase string
      for (let i = 0; i < lowerCaseInput.length; i++) {
        // define each character iteration as the current character
        let currentCharacter = lowerCaseInput[i];
        // if the current character is a space, add the space to the result
        if (currentCharacter === " ") result += currentCharacter;
        // if the current character matches a key in the encoder object, add that key's value to the result
        if (currentCharacter in encoder) result += encoder[currentCharacter];
      };
    };

    // if input is a series of numbers that need to be decoded...
    if (encode === false) {
      // define a new variable as a string with all spaces removed
      let inputWithoutSpaces = input.split(' ').join('');
      // return false if the length of the new variable is odd
      if (Math.abs(inputWithoutSpaces.length % 2) == 1) return false;
      // create an empty array for pairs of numbers and spaces
      let inputPairsAndSpaces = [];
      
      // loop through each character in the original input by 2
      for (i = 0; i < input.length; i = i+2) {
        // define two new variables as the current character and the next character
        let currentCharacter = input[i];
        let nextCharacter = input[i+1];
        // if the current character is a space, push the space into the new array...
        if (currentCharacter === " ") {
          inputPairsAndSpaces.push(" ");
          // ... and move back by one iteration of the loop
          i = i-1;
        // otherwise, push the concatenation of the current character and the new character into the new array
        } else {
          inputPairsAndSpaces.push(currentCharacter+nextCharacter);
        };
      };
      // define a variable as a new array in which each element is a mapped (aka decoded) version of the earlier array's elements, accounting for spaces
      let decodedPairsAndSpaces = inputPairsAndSpaces.map( i => {
        if (i === " ") return i;
        return decoder[i];
      });
      // redefine the result as the joined the elements of the new array
      result = decodedPairsAndSpaces.join('');
    };
    // return the result
    return result;

  };

  return {
    polybius,
  };
})();
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = { polybius: polybiusModule.polybius };
