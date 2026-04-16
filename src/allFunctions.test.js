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

// CaesarCipher tests
it("CaesarCipher test 01 - Normal shift", () => {
  expect(myFunctions.caesarCipher("abc", 3)).toBe("def");
});

it("CaesarCipher test 02 - Normal shift", () => {
  expect(myFunctions.caesarCipher("aBc", 3)).toBe("dEf");
});

it("CaesarCipher test 03 - Shift with non-alphabet", () => {
  expect(myFunctions.caesarCipher("a-c", 3)).toBe("d-f");
});

it("CaesarCipher test 04 - Translate 'Hello, World! by 3", () => {
  expect(myFunctions.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

it("CaesarCipher test 05 - Translate 'Zoo' by 3", () => {
  expect(myFunctions.caesarCipher("Zoo", 3)).toBe("Crr");
});

it("CaesarCipher test 06 - Translate 'Apple' by -3", () => {
  expect(myFunctions.caesarCipher("Apple", -3)).toBe("Xmmib");
});

it("CaesarCipher test 07 - Translate 'Apple' by 12000", () => {
  expect(myFunctions.caesarCipher("Apple", 12000)).toBe("Oddzs");
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

// test for rotate()
it("rotate test 01 - 'z' shift by 1", () => {
  expect(String.fromCharCode(myFunctions.rotate("z".charCodeAt(0), 1))).toBe(
    "a",
  );
});

it("rotate test 02 - 'a' shift by -1", () => {
  expect(String.fromCharCode(myFunctions.rotate("a".charCodeAt(0), -1))).toBe(
    "z",
  );
});
