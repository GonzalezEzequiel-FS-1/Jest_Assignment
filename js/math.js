const add = (numOne, numTwo) => parseFloat(numOne + numTwo);
const diff = (numOne, numTwo) => parseFloat(numOne - numTwo);
const prod = (numOne, numTwo) => parseFloat(numOne * numTwo);
const div = (numOne, numTwo) => parseFloat((numOne / numTwo).toFixed(2));
const sqrt = (num) => parseInt(Math.sqrt(num).toFixed(2));
const max = (numOne, numTwo) => parseFloat(Math.max(numOne, numTwo).toFixed(2));

module.exports = {
    add,
    diff,
    prod,
    div,
    sqrt,
    max
};