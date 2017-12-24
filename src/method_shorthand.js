// ES5 way

// var person = {
//   name: "Hassan",
//   age: function () {
//     return 34;
//   }
// }


var person = {
  name: "Hassan",
  age() {
    return 34;
  }
}


console.log(`${person.name} is ${person.age()} old`);