// When an object property name is the same as the local variable name, you can simply include the name without a colon and value.

// var func = (name, age) => { return { name:name, age:age } };
// above method can be simplied as below


// var func = (name, age) => { return { name, age } };
// Or a more simplified version
var func = (name, age) => ( { name, age } );

console.log(func("hassan", 35).name);