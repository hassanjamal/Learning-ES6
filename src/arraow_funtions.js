// concise body syntax, implied "return"
var sum = (a, b) => a + b;
// with block body, explicit "return" needed
var sum1 = (a, b) => { return a + b };

// Returning Object Literals
var returnObj = (a) => { return { name: a } };
// &
var returnObj1 = (a) => ({ name: a });

console.log(sum(1, 2));
console.log(sum1(1, 2));
console.log(returnObj('Hassan'));
console.log(returnObj1('Hassan'));

// arguments is simply a reference to the the arguments of the enclosing scope:
function foo(n) {
  var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f(10);
}

console.log(foo(1));