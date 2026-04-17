/* "allFunctions.js" for "testing_practice_jest_TOP" */
import axios from "axios";

const myFunctions = {
  capitalize: (word) => {
    return word.replace(/^./, (match) => match.toUpperCase());
  },

  reverseStr: (str) => {
    return str.split("").reverse().join("");
  },

  calculator: {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => (b == 0 ? undefined : a / b),
  },

  // checks if 'arg' is an alphabet
  isAlphabet: (arg) => {
    return /^[a-z]$/i.test(arg);
  },

  // make the letters wrap
  rotate: (arg, count) => {
    // 65 = A, 97 = a
    let alphabets = 26;
    // protect this function from outrageous values
    count = Math.abs(count) > alphabets ? count % alphabets : count;
    let cap = arg < 97 ? 65 : 97;
    if (arg + count > cap + alphabets - 1) {
      return ((arg + count) % (cap + alphabets)) + cap;
    }
    if (arg + count < cap) {
      return cap + alphabets - Math.abs(count);
    }
    return arg + count;
  },

  caesarCipher: (str, count) => {
    return str
      .split("")
      .map((cur) => {
        if (!myFunctions.isAlphabet(cur)) {
          return cur;
        }
        return String.fromCharCode(
          myFunctions.rotate(cur.charCodeAt(0), count),
        );
      }, 0)
      .join("");
  },

  analyzeArray: (arrArg) => {
    return {
      average: arrArg.reduce((p, c) => p + c, 0) / arrArg.length,
      length: arrArg.length,
      min: arrArg.reduce((p, c) => Math.min(p, c)),
      max: arrArg.reduce((p, c) => Math.max(p, c)),
    };
  },
};

export { myFunctions };
