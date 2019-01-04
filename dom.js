// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
    var state = []; // this is our initial todoList
  
    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
      var todoNode = document.createElement('li');
      // you will need to use addEventListener
      
      // add span holding description
      var spanDes = document.createElement('span');
      spanDes.innerText=todo.description
      todoNode.appendChild(spanDes)
      // this adds the delete button
      var deleteButtonNode = document.createElement('i');
      deleteButtonNode.className="fas fa-trash-alt";
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      todoNode.appendChild(deleteButtonNode);
      // add markTodo button
      var markButtonNode = document.createElement('i');
      markButtonNode.className="fas fa-check";
      markButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.markTodo(state, todo.id);
        update(newState);
      });
      if(todo.done === true){
        spanDes.classList.add('finish');
      }
      // add classes for css
      todoNode.appendChild(markButtonNode);
      return todoNode;
    };
  
    // bind create todo form
    if (addTodoForm) {
      addTodoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // https://developer.mozilla.org/en-US/docs/Web/Events/submit
        // what does event.preventDefault do?
        // what is inside event.target?
        var description = document.getElementsByClassName('input')[0].value; // event.target ....
        document.getElementsByClassName('input')[0].value =' '
        console.log(typeof(description))
        console.log(parseInt(description))
        // hint: todoFunctions.addTodo
        var newState = state; // ?? change this!
        todoFunctions.addTodo(newState,description);
        update(newState);
      });
    }
    
    // you should not need to change this function
    var update = function(newState) {
      state = newState;
      renderState(state);
    };
  
    // you do not need to change this function
    var renderState = function(state) {
      var todoListNode = document.createElement('ul');
  
      state.forEach(function(todo) {
        todoListNode.appendChild(createTodoNode(todo));
      });
  
      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstChild);
    };
  
    if (container) renderState(state);
  })();
