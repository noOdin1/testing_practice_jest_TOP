/* "allFunctions.js" for "testing_practice_jest_TOP" */

const myFunctions = {
  capitalize: (word) => {
    return word.replace(/^./, (match) => match.toUpperCase());
  },
};

export { myFunctions };
