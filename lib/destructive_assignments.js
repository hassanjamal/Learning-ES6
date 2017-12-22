'use strict';

var a, b, rest;
a = 10;
b = 20;


console.log(a); // 10
console.log(b); // 20
console.log(rest); // undefined


a = 10;
b = 20;
rest = [30, 40, 50, 60, 70, 80];

console.log(a); // 10
console.log(b); // 20
console.log(rest); // [ 30, 40, 50, 60, 70, 80 ]

// The round braces ( ... ) around the assignment statement is required syntax
// when using object literal destructuring assignment without a declaration.
var _a$b = { a: 10, b: 20 };
a = _a$b.a;
b = _a$b.b;

console.log(a); // 10
console.log(b); // 20

// Array Destruction

var foo = ['one', 'two', 'three'];
one = foo[0];
two = foo[1];
three = foo[2];

console.log(one); // one
console.log(two); // two
console.log(three); // three

// assignment separate form declarion
var aa = void 0,
    bb = void 0;
aa = 'one';
bb = 'two';

console.log(aa); //one
console.log(bb); // two

// default values
var _ref = [1];
var _ref$ = _ref[0];
aa = _ref$ === undefined ? 8 : _ref$;
var _ref$2 = _ref[1];
bb = _ref$2 === undefined ? 9 : _ref$2;

console.log(aa); // 1
console.log(bb); // 9

// Ignoring some value
var _ref2 = [1, 2, 7];
aa = _ref2[0];
bb = _ref2[2];

console.log(aa); // 1
console.log(bb); // 7