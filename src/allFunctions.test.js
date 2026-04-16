/* allFunctions.test.js for "testing_practice_jest_TOP" */
import { myFunctions } from "./allFunctions";

// Tests for first letter capitalization
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

// Tests for reversing a string
it("Reverse a string - test 1", () => {
  expect(myFunctions.reverseStr("rightside")).toBe("edisthgir");
});

it("Reverse a string - test 2", () => {
  expect(myFunctions.reverseStr("edisthgir")).toBe("rightside");
});

it("Reverse a string - test 3", () => {
  expect(myFunctions.reverseStr(myFunctions.reverseStr("rightside"))).toBe(
    "rightside",
  );
});

// Tests for calculator functions
it("Add 2 numbers - test 1", () => {
  expect(myFunctions.calculator.add(1, 2)).toBe(3);
});

it("Substract 2 numbers - test 1", () => {
  expect(myFunctions.calculator.sub(6, 2)).toBe(4);
});

it("Multiply 2 numbers - test 1", () => {
  expect(myFunctions.calculator.mul(6, 2)).toBe(12);
});

it("Divide a number by another number - test 1", () => {
  expect(myFunctions.calculator.div(6, 2)).toBe(3);
});

it("Divide a number by another number - test 2", () => {
  expect(myFunctions.calculator.div(6, 0)).toBe(undefined);
});

// Test for isAlphabet()
it("isAlphabet test 01 - Check 'a'", () => {
  expect(myFunctions.isAlphabet("a")).toBe(true);
});

it("isAlphabet test 02 - Check 'D'", () => {
  expect(myFunctions.isAlphabet("D")).toBe(true);
});

it("isAlphabet test 03 - Check '-'", () => {
  expect(myFunctions.isAlphabet("-")).toBe(false);
});

