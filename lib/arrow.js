'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskCollection = function () {
  function TaskCollection() {
    var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, TaskCollection);

    this.tasks = tasks;
  }

  // Note we removed funtion keyword while defining a funtion


  _createClass(TaskCollection, [{
    key: 'prepare',
    value: function prepare() {
      this.tasks.forEach(function (task) {
        console.log(task);
      });
    }

    // Now another version of prepare method

  }, {
    key: 'prepare1',
    value: function prepare1() {
      this.tasks.forEach(function (task) {
        console.log(task);
      });
    }

    // another iteration of prepare funtion we can get rid of task params parenthesis since we have only one param
    // if there is more than one param then use paranthesis
    // and also we get rid of function opening curly braces { and Closing curly braces } since we have only one
    // statement with { } braces

  }, {
    key: 'prepare2',
    value: function prepare2() {
      this.tasks.forEach(function (task) {
        return console.log(task);
      });
    }

    // hidden return keyword

  }, {
    key: 'isDone',
    value: function isDone() {
      this.tasks.map(function (task) {
        return task + ' is done';
      });
      console.log(this.tasks);
    }
  }]);

  return TaskCollection;
}();

new TaskCollection(['Task 1', 'Task 2', 'Task 3']).prepare();
// will output the same result and we get rid of function keyword and we used =>
new TaskCollection(['Task 1', 'Task 2', 'Task 3']).prepare1();
// will output the same result and we get rid of params paranthesis and function opening and closing { } braces
new TaskCollection(['Task 1', 'Task 2', 'Task 3']).prepare2();
new TaskCollection(['Task 1', 'Task 2', 'Task 3']).isDone();