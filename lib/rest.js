"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.


var func = function func(a, b) {
  for (var _len = arguments.length, theArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    theArgs[_key - 2] = arguments[_key];
  }

  console.log(a); //1
  console.log(b); //2
  console.log(theArgs); // [3,4,5,6]
};

// Destructive Rest Parameters

var func1 = function func1(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      a = _ref2[0],
      b = _ref2[1],
      theArgs = _ref2[2];

  console.log(a); //1
  console.log(b); //2
  console.log(theArgs); //3
};

func(1, 2, 3, 4, 5, 6);
func1([1, 2, 3, 4, 5, 6]);