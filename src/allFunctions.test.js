/* allFunctions.test.js for "testing_practice_jest_TOP" */
import { myFunctions } from "./allFunctions";

it("Capitalize first letter - test 1", () => {
  expect(myFunctions.capitalize("hello")).toBe("Hello");
});

it("Capitalize first letter - test 2", () => {
  expect(myFunctions.capitalize("Hello")).toBe("Hello");
});

it("Capitalize first letter - test 3", () => {
  expect(myFunctions.capitalize("hELLO")).toBe("HELLO");
});

it("Capitalize first letter - test 4", () => {
  expect(myFunctions.capitalize("HELLO")).toBe("HELLO");
});

it("Reverse a string - test 1", () => {
  expect(myFunctions.reverseStr("rightside")).toBe("edisthgir");
});

it("Reverse a string - test 2", () => {
  expect(myFunctions.reverseStr("edisthgir")).toBe("rightside");
});
