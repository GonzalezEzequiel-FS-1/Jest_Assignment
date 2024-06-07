const add=(numOne, numTwo)=> parseInt(numOne+numTwo);
const diff=(numOne, numTwo)=> parseInt(numOne-numTwo);
const prod=(numOne, numTwo)=> parseInt(numOne*numTwo);
const div=(numOne, numTwo)=> parseInt(numOne/numTwo);
const sqrt = ( num )=> parseInt(Math.sqrt(num));
const max = (numOne, numTwo) => parseInt(Math.max(numOne , numTwo));

module.exports = {
    add,
    diff,
    prod,
    div,
    sqrt,
    max
}