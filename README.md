# Decoder Ring | Encryption/Decryption App

Decoder Ring is a live application that allows a user to utilize a Caesar Shift, Polybius Square, or Substitution Cipher in order to encode or decode secret messages.

## Links
[Live Vercel Client App](https://encryption-decryption-app.vercel.app/)  

## Technology
- JavaScript, HTML, Bootstrap, Mocha  
  
![JS icon](images/javascript.png)
![HTML icon](images/html.png)
![Bootstrap icon](images/bootstrap.png)
![Mocha icon](images/mocha.png)  
  
## App Features
### Caesar Shift

The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order. For example, if you were to "shift" the alphabet to the left by 3, the letter "A" would become "X", the letter "E" would become "B", et cetera.  

![Caesar shift](images/caesar.png)  

When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

#### App Screenshot


#### Logic of the caesar() function

The `caesar()` function in the `src/caesar.js` file has three parameters:

- _input_ is a string that refers to the inputted text to be encoded or decoded.
- _shift_ is an integer refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K").
- _encode_ is a boolean that refers to whether the app will encode or decode the message. By default, it is set to `true` (encode).

The following constraints and rules are in place:

- If the `shift` value is not present, equal to `0`, less than `-25`, or greater than `25`, the function returns `false`.
- Spaces in the message are maintained before and after encoding or decoding, as are other non-alphabetic symbols.
- Encoding is case-insensitive (e.g., both "a" or "A" are encoded to the same result).
- If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it wraps around to the front of the alphabet (e.g. "z" becomes "c").

#### Examples

```js
caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false    
```

### Polybius Square

|       | **1** | **2** | **3** | **4** | **5** |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **1** | A     | B     | C     | D     | E     |
| **2** | F     | G     | H     | I/J   | K     |
| **3** | L     | M     | N     | O     | P     |
| **4** | Q     | R     | S     | T     | U     |
| **5** | V     | W     | X     | Y     | Z     |

The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like.

In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left. For example, in the above table, the letter "B" would be represented by the numerical pair "21".

```
"thinkful" -> "4432423352125413"
```

When decoding the message, each pair of numbers is translated using the coordinates.

#### polybius()

The `polybius()` function in the `src/polybius.js` file has two parameters:

- _input_ is a string that refers to the inputted text to be encoded or decoded.
- _encode_ is a boolean that refers to whether you should encode or decode the message. By default it is set to `true`.

When building the function, keep the following constraints and rules in mind:

- You are welcome to assume that _no additional symbols will be included as part of the input._ Only spaces and letters will be included.
- When encoding, your output should _still be a string._
- When decoding, the number of characters in the string _excluding spaces_ should be even. Otherwise, return `false`.
- Spaces in the message should be maintained before and after encoding or decoding.
- Encoding is case-insensitive (e.g., both "a" or "A" would be encoded to the same result).
- The letters "I" and "J" share a space. When encoding, both letters can be converted to `42`, but when decoding, both letters should be shown as `"(i/j)"`.

#### Examples

```js
polybius("thinkful"); //> "4432423352125413"
polybius("Hello world"); //> '3251131343 2543241341'

polybius("3251131343 2543241341", false); //> "hello world"
polybius("4432423352125413", false); //> "th(i/j)nkful
polybius("44324233521254134", false); //> false
```  

### Substitution Cipher

![Substitution cipher](images/substitution.jpeg)

The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet; otherwise, it will be difficult for them to decode the message.

For example, in the image above, the word "HELLO" would be translated as follows:

- "H" becomes "R".
- "E" becomes "M".
- "L" becomes "W".
- "O" becomes "L".

This would result in the code "RMWWL". To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.

#### substitution()

The `substitution()` function in the `src/substitution.js` file has three parameters:

- _input_ is a string that refers to the inputted text to be encoded or decoded.
- _alphabet_ is a string that refers to substitution alphabet.
- _encode_ is a boolean that refers to whether you should encode or decode the message. By default, it is set to `true`.

When building the function, keep the following constraints and rules in mind:

- You are welcome to assume that _no additional symbols will be included as part of the input._ Only spaces and letters will be included.
- Spaces in the message should be maintained before and after encoding or decoding.
- Encoding/decoding is case-insensitive (e.g., both "a" or "A" would be encoded to the same result).
- The `alphabet` parameter must be a string of exactly 26 characters. Otherwise, it should return `false`.
- All of the characters in the `alphabet` parameter _must be unique._ Otherwise, it should return `false`.

#### Examples

```js
substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
``` 

## Installation

Follow the instructions below to get this project up and running on your own machine:

- Fork and clone this repository.
- Run `npm install` to install the dependencies needed for this project.

To run the tests, you can run the following command:

```bash
npm test
```

To watch how the code you write affects the application website, you can run the following command, which will start a server and take over your terminal window:

```bash
npm start
```

To stop the server and regain control of your terminal, you can press `Ctrl + C`.
