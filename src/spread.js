// Function call when we want to use the elements of an array as an argument

var func = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);

}
var args = [1, 3, 4];
func.apply(null,args);

// However same can be simplified with spread
func(...args);

var dateField = [1972, 0, 1];
console.log(new Date(...dateField));  // 1971-12-31T18:30:00.000Z

// a very useful case of spread
var b = [2, 3, 4];
var a = [1,...b, 5, 6, 7];
console.log(a);  // [ 1, 2, 3, 4, 5, 6, 7 ]



var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected