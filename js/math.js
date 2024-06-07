const add=(numOne, numTwo)=> numOne+numTwo;
const diff=(numOne, numTwo)=> numOne-numTwo;
const prod=(numOne, numTwo)=> numOne*numTwo;
const div=(numOne, numTwo)=> numOne/numTwo;
const sqrt = ( num )=> parseFloat(Math.sqrt(num).toFixed(2));
const max = (numOne, numTwo) = parseFloat(Math.max(numOne , numTwo).toFixed(2))

module.exports = {
    add,
    diff,
    prod,
    div,
    sqrt,
    max
}