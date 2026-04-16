/* "allFunctions.js" for "testing_practice_jest_TOP" */

const myFunctions = {
  capitalize: (word) => {
    return word.replace(/^./, (match) => match.toUpperCase());
  },

  reverseStr: (str) => {
    return str.split("").reverse().join("");
  },

  calculator: {
    add: (a, b) => {
      return a + b;
    },
    sub: (a, b) => {
      return a - b;
    },
    mul: (a, b) => {
      return a * b;
    },
    div: (a, b) => {
      return b == 0 ? undefined : a / b;
    },
  },

  // checks if 'arg' is an alphabet
  isAlphabet: (arg) => {
    return /^[a-z]$/i.test(arg);
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
    // return tmpStr;
  },
};

export { myFunctions };
