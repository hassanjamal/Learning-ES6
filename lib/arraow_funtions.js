'use strict';

// concise body syntax, implied "return"
var sum = function sum(a, b) {
  return a + b;
};
// with block body, explicit "return" needed
var sum1 = function sum1(a, b) {
  return a + b;
};

// Returning Object Literals
var returnObj = function returnObj(a) {
  return { name: a };
};
// &
var returnObj1 = function returnObj1(a) {
  return { name: a };
};

console.log(sum(1, 2));
console.log(sum1(1, 2));
console.log(returnObj('Hassan'));
console.log(returnObj1('Hassan'));

function foo(n) {
  var _arguments = arguments;

  var f = function f() {
    return _arguments[0] + n;
  }; // foo's implicit arguments binding. arguments[0] is n
  return f(10);
}

console.log(foo(1));