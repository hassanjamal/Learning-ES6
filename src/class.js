class person{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
}

p = new person('hassan', 24);
p.sayName();

// Classes are first class citizen means they can be passes through as fucntion arguments

function execute(someClass) {
  someClass.sayName();
}
execute(p);

// Below An anonymous class expression is created and then executed immediately.
// This pattern allows you to use the class syntax for creating singletons without leaving
// a class reference available for inspection.The parentheses at the end of the class
// expression indicate that you’re calling a function and also allow you to pass in an argument.

let p2 = new class{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayNameAge() {
    console.log(`${this.name} is ${this.age} old`);
  }
}("Jamal", 34);
p2.sayNameAge();