// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.


var func = (a, b, ...theArgs) => {
  console.log(a); //1
  console.log(b); //2
  console.log(theArgs); // [3,4,5,6]
}

// Destructive Rest Parameters

var func1 = ([a, b,theArgs]) => {
  console.log(a); //1
  console.log(b); //2
  console.log(theArgs); //3
}

func(1, 2, 3, 4, 5, 6);
func1([1, 2, 3, 4, 5, 6]);