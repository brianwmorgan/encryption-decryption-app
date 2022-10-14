# Decoder Ring | Encryption/Decryption App

Decoder Ring is a live application that allows a user to utilize a Caesar Shift, Polybius Square, or Substitution Cipher in order to encode or decode secret messages.

## Links
[Live Vercel Client App](https://encryption-decryption-app.vercel.app/)  

## Technology
- JavaScript, HTML  
  
![JS icon](images/javascript.png)
![HTML icon](images/html.png)  

## How the App Works
### Caesar Shift

![Caesar shift](./docs/caesar.png)

The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".

```
"thinkful" -> "wklqnixo"
```

When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

#### caesar()

The `caesar()` function in the `src/caesar.js` file has three parameters:

- _input_ is a string that refers to the inputted text to be encoded or decoded.
- _shift_ is an integer refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K").
- _encode_ is a boolean that refers to whether you should encode or decode the message. By default, it is set to `true`.

When building the function, keep the following constraints and rules in mind:

- If the `shift` value is not present, equal to `0`, less than `-25`, or greater than `25`, the function should return `false`.
- Spaces in the message should be maintained before and after encoding or decoding, as should other non-alphabetic symbols.
- Encoding is case-insensitive (e.g., both "a" or "A" would be encoded to the same result).
- If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").

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
The **Dashboard** page serves as...  
  
![dashboard-photo-1](images/dashboard1.png)  

### Substitution Cipher
The **Dashboard** page serves as...  
  
![dashboard-photo-1](images/dashboard1.png)  

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
