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
  
  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
    let New = todoFunctions.cloneArrayOfObjects(todos)
    newTodoObj={}
    if(isNaN(newTodo) === false)
      return todos
    if(newTodoObj.id==null)
      newTodoObj.id = todoFunctions.generateId();
    newTodoObj.description = newTodo
    newTodoObj.done = false;
    New.push(newTodoObj);
    return New;
  },
  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    let New = todoFunctions.cloneArrayOfObjects(todos)
    if(todos.length==0 || idToDelete==null || idToDelete<0){
      return -1;
    }
    New = New.filter(New => New.id != idToDelete)
    return New;
  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
    let New = todoFunctions.cloneArrayOfObjects(todos)
    if(idToMark==null || idToMark<0)
      return -1;
    New.map(e => {
      if(e.id === idToMark ){
        if(e.done === false){
          e.done = true
        }else{
          e.done = false
        }
      }
    })
    return New;

  },
  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
    let New = todoFunctions.cloneArrayOfObjects(todos)
    let New1 =[];
    New.map(function(e,i) {
      if (e.done == sortFunction){
        New1.push(e) ;
      }else{
        New1.unshift(e)
      }
    })
    // for(var i=0; i<New.length; i++){
    //   if (New[i].done == sortFunction){
    //     New.push(New[i])
    //     New.splice(i,1)
    //   }
    // }
    return New1;
  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details: 
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
