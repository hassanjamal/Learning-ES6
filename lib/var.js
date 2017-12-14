'use strict';

function fire(bool) {
  var foo;
  if (bool) {
    foo = 'bar';
    console.log(foo);
  } else {
    console.log(foo);
  }
}

fire(false);
fire(true);