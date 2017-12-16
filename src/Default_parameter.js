// Default function parameters allow formal parameters to be initialized
// with default values if no value or undefined is passed.


var multiply = (a, b = 1) => a * b;

console.log(multiply(9,0)); // 0
console.log(multiply(9)); // 9

// default parameteres are evaluated at run time

var callSomething = (thing = doSomething()) => thing;
var doSomething = () => 'sth';

console.log(callSomething());

// and Parameter already encountered earlier can be reused for later parametes

var anotherAddition = (a, b = a + 1) => a + b;

console.log(anotherAddition(1));
console.log(anotherAddition(1,11));