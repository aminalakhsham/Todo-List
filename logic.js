// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),
  
  //cloneArrayOfObjects will create a copy of the todos array 
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo){
      return JSON.parse(JSON.stringify(todo));
    });
  },
  
// newTod
  // {
  //   id: 0,
  //   description: 'smash avocados',
  //   done: true,
  // }
  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
    todoFunctions.cloneArrayOfObjects(todos);
    newTodoObj={}
    if(isNaN(newTodo) === false)
      return todos
    if(newTodoObj.id==null)
      newTodoObj.id = todoFunctions.generateId();
    newTodoObj.description = newTodo
    newTodoObj.done = false;
    todos.push(newTodoObj);
    return todos;
  },
  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    todoFunctions.cloneArrayOfObjects(todos);
    if(todos.length==0 || idToDelete==null || idToDelete<0){
      return -1;
    }
    todos = todos.filter(todos => todos.id != idToDelete)
    return todos;
  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
    todoFunctions.cloneArrayOfObjects(todos);
    if(idToMark==null || idToMark<0)
      return -1;
    todos.map(e => {
      if(e.id === idToMark ){
        if(e.done === false){
          e.done = true
        }else{
          e.done = false
        }
      }
    })
    return todos;
  },
  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
    todoFunctions.cloneArrayOfObjects(todos);
    for(var i=0; i<todos.length; i++){
      if (todos[i].done == sortFunction){
        todos.push(todos[i])
        todos.splice(i,1)
      }
    }
  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details: 
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
