"use strict";

var array1 = [1, 2, 3, 4];
var reducer = function reducer(accumulator, currentValue) {
  console.log(accumulator);
  console.log(currentValue);
  console.log("---------");
  return accumulator + currentValue;
};

console.log(array1.reduce(reducer));
// 1
// 2
// ---------
// 3
// 3
// ---------
// 6
// 4
// ---------
// 10

console.log(array1.reduce(reducer, 50));
// 50
// 1
// ---------
// 51
// 2
// ---------
// 53
// 3
// ---------
// 56
// 4
// ---------
// 60