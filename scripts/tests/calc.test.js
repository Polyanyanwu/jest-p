const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 62 for 42 + 20", () => {
            expect(addition(42, 20)).toBe(62);
        });
        test("should return NaN for string", () => {
            expect(addition("42", 20)).toBe(NaN);
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});