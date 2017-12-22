var a, b, rest;
[a, b] = [10, 20];

console.log(a) // 10
console.log(b); // 20
console.log(rest); // undefined


[a, b, ...rest] = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(a) // 10
console.log(b); // 20
console.log(rest); // [ 30, 40, 50, 60, 70, 80 ]

// The round braces ( ... ) around the assignment statement is required syntax
// when using object literal destructuring assignment without a declaration.
({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Array Destruction

var foo = ['one', 'two', 'three'];
[one, two, three] = foo;
console.log(one); // one
console.log(two); // two
console.log(three); // three

// assignment separate form declarion
let aa, bb;
[aa, bb] = ['one', 'two'];
console.log(aa); //one
console.log(bb); // two

// default values
[aa = 8, bb = 9] = [1];
console.log(aa); // 1
console.log(bb); // 9

// Ignoring some value
[aa, , bb] = [1, 2, 7];
console.log(aa); // 1
console.log(bb); // 7



