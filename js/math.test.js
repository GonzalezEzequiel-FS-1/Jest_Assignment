const {
    add,
    diff,
    prod,
    div,
    sqrt,
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
    test("Should divide two numbers", ()=>{
        expect(div(4,2)).toBe(2)
    });
    test("Should return the square root of a numbe", ()=>{
        expect(sqrt(100)).toBe(10.00)
    });
    
});