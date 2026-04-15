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
      return a / b;
    },
  },
};

export { myFunctions };
