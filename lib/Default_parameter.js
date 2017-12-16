'use strict';

// Default function parameters allow formal parameters to be initialized
// with default values if no value or undefined is passed.


var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(9, 0)); // 0
console.log(multiply(9)); // 9

// default parameteres are evaluated at run time

var callSomething = function callSomething() {
  var thing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doSomething();
  return thing;
};
var doSomething = function doSomething() {
  return 'sth';
};

console.log(callSomething());

// and Parameter already encountered earlier can be reused for later parametes

var anotherAddition = function anotherAddition(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a + 1;
  return a + b;
};

console.log(anotherAddition(1));
console.log(anotherAddition(1, 11));