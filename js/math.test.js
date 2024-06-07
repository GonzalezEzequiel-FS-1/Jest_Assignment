const {
    add,
    diff,
    prod
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
});