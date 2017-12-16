class TaskCollection{
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  // Note we removed funtion keyword while defining a funtion
  prepare() {
    this.tasks.forEach(function (task) {
      console.log(task);
    })
  }

  // Now another version of prepare method

  prepare1() {
    this.tasks.forEach((task) => {
      console.log(task);
    })
  }

  // another iteration of prepare funtion we can get rid of task params parenthesis since we have only one param
  // if there is more than one param then use paranthesis
  // and also we get rid of function opening curly braces { and Closing curly braces } since we have only one
  // statement with { } braces

  prepare2() {
    this.tasks.forEach(task => console.log(task));
  }

  // hidden return keyword
  isDone() {
    this.tasks.map(task => task + ' is done');
    console.log(this.tasks);
  }
}

new TaskCollection(['Task 1', 'Task 2', 'Task 3']).prepare();
// will output the same result and we get rid of function keyword and we used =>
new TaskCollection([ 'Task 1', 'Task 2', 'Task 3' ]).prepare1();
// will output the same result and we get rid of params paranthesis and function opening and closing { } braces
new TaskCollection(['Task 1', 'Task 2', 'Task 3']).prepare2();
new TaskCollection(['Task 1', 'Task 2', 'Task 3']).isDone();
