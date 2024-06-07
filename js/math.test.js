// Importing the modules
const {
        sum,
        diff,
        prod,
        div,
        sqrt,
        max
    } = require("./math");

// Applying the required tests.
//Refer to test descriptions for individual explanations.
describe("Testing the math modules for the assignment", () => {
    test("Return the sum of two numbers", () => {
        expect(sum(2, 2)).toBe(4);
    });
    test("Return the difference of two numbers", () => {
        expect(diff(4, 2)).toBe(2);
    });
    test("Return the product of two numbers", () => {
        expect(prod(4, 2)).toBe(8);
    });
    test("Return the quotient of two numbers rounded to two decimal places", () => {
        expect(div(4, 2)).toBe(2);
    });
    test("Return the square root of a number rounded to two decimal places", () => {
        expect(sqrt(100)).toBe(10.00);
    });
    test("Return the larger of two numbers", () => {
        expect(max(100, 99)).toBe(100);
    });
});
