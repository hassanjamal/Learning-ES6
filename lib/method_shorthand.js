"use strict";

// ES5 way

// var person = {
//   name: "Hassan",
//   age: function () {
//     return 34;
//   }
// }

// This is also callled concise method

var person = {
  name: "Hassan",
  age: function age() {
    return 34;
  }
};

console.log(person.name + " is " + person.age() + " old");


// Computed Property

let lastName = "last name";
let suffix = "name";

// The square brackets inside the object literal indicate that the property name is computed,
// so its contents are evaluated as a string.That means you can also include expressions,
var person = {
  "first name": "Hassan",
  [lastName]: "jamal",
  ["father's "+ suffix] : "Dr M Rahman"

};
console.log(person["first name"]); //Hassan
console.log(person["last name"]); // Jamal
console.log(person["father's name"]); // Dr M Rahman

// Object.is() works the same as the = = = operator.
// The only differences are that + 0 and - 0 are considered not equivalent, and NaN is considered equivalent to NaN.
console.log(+ 0 == -0); // true
console.log(+ 0 === -0); // true
console.log(Object.is(+ 0, -0)); // false
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(5, 5)); // true
console.log(Object.is(5, "5")); // false

// Keep in mind that Object.assign() doesn’t create accessor properties
// on the receiver when a supplier has accessor properties.
// Because Object.assign() uses the assignment operator,
// an accessor property on a supplier will become a data property on the receiver.

var receiver = {};

Object.assign(receiver, {
  type: 'js',
  name: 'file.js'
},
  {
    type: 'css'
  });
  // assign method accepts any number of suppliers, and the receiver receives the properties
  // in the order in which the suppliers are specified.

console.log(receiver.type);  //css

// TODO learn more about super and ProtoType




