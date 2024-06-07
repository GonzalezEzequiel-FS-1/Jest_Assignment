const {
    add,
    diff,
    prod,
    div,
    sqrt,
    max,
} = require("./math");

describe("Testing the math modules for the assignment",()=>{
    test("Should add two numbers", ()=>{
        expect(add(2,2)).toBe(4)
    });
    test("Should subtract two numbers", ()=>{
        expect(diff(4,2)).toBe(2)
    });
    test("Should multiply two numbers", ()=>{
        expect(prod(4,2)).toBe(8)
    });
    test("Should return the quotient of the division of two numbers rounded to the second decimal place", ()=>{
        expect(div(4,2)).toBe(2)
    });
    test("Should return the square root of a number rounded to the second decimal place", ()=>{
        expect(sqrt(100)).toBe(10.00)
    });
    test("Should return the square root of a number rounded to the second decimal place", ()=>{
        expect(sqrt(100)).toBe(10.00)
    });
    test("Should return the square root of a number rounded to the second decimal place", ()=>{
        expect(max(100, 99)).toBe(100)
    });

});