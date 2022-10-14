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

module.exports = { caesar: caesarModule.caesar };
