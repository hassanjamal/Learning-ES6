class person{
  constructor(name) {
    this.name = name;
  }
  greet() {
    return this.name + ' says hello';
  }
}

console.log(new person('Hassan').greet());