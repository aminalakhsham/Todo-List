var test = require('tape');
var logic = require('./logic');



//test addTodo

test('Testsing adding an item to the array', function(t) {
  var array = [];
  var description = 'helloworld';
  var result = logic.addTodo(array,description);
  var expected =[{id:1,description:"helloworld",done:false}];
  t.deepEqual(result,expected,"done successfully");
  t.end();
});


test('Testsing adding an item without description to the array', function(t) {
  var array = [];
  var description = null;
  var result = logic.addTodo(array,description);
  t.deepEqual(result,[],"done successfully");
  t.end();
});

test('Testsing adding an Empty item to the array', function(t) {
  var array = [];
  var description = '';
  var result = logic.addTodo(array,description);
  t.deepEqual(result,[],"done successfully");
  t.end();
});

test('Testsing adding an Number item to the array', function(t) {
  var array = [];
  var description = 2;
  var result = logic.addTodo(array,description);
  t.deepEqual(result,[],"done successfully");
  t.end();
});

//test deleteTodo


test('Testsing deleting an item from empty array', function(t) {
  var array = [];
  var id = 0;
  var result = logic.deleteTodo(array,id);
  t.equal(result,-1,"done successfully");
  t.end();
});

test('Testsing deleting an item without Id from empty array', function(t) {
  var array = [{id:0,description:"helloworld"}];
  var id = null;
  var result = logic.deleteTodo(array,id);
  t.equal(result,-1,"done successfully");
  t.end();
});

test('Testsing deleting an item with wrong Id from  array', function(t) {
  var array = [{id:0,description:"helloworld"}];
  var id = -2;
  var result = logic.deleteTodo(array,id);
  t.equal(result,-1,"done successfully");
  t.end();
});

test('Testsing deleting an item from array by Id', function(t) {
  var array = [{id:0,description:"helloworld"}];
  var id = 0;
  expected =[];
  var result = logic.deleteTodo(array,id);
  t.deepEqual(result,expected,"done successfully");
  t.end();
});

test('Testsing deleting an item from array by Id', function(t) {
  var array = [{id:0,description:"helloworld"},{id:1,description:"helloworld"},{id:2,description:"helloworld"}];
  var id = 1;
  expected =[{id:0,description:"helloworld"},{id:2,description:"helloworld"}];
  var result = logic.deleteTodo(array,id);
  t.deepEqual(result,expected,"done successfully");
  t.end();
});

//test markTodo

test('Testsing marking whitout Id', function(t) {
  var array = [{id:0,description:"helloworld",done:false}];
  var id = null;
  var result = logic.markTodo(array,id);
  t.equal(result,-1,"done successfully");
  t.end();
});

test('Testsing marking wrong Id', function(t) {
  var array = [{id:0,description:"helloworld",done:false}];
  var id = -1;
  var result = logic.markTodo(array,id);
  t.equal(result,-1,"done successfully");
  t.end();
});

test('Testsing marking (finish Todo) toggal from false to true', function(t) {
  var array = [{id:1,description:"helloworld",done:false}];
  var expected =[{id:1,description:"helloworld",done:true}]
  var id = 1;
  var result = logic.markTodo(array,id);
  t.deepEqual(result,expected,"done successfully");
  t.end();
});


//test sortTodo

test('Testsing sorting (finish Todo) to last', function(t) {
  var array = [{id:0,description:"helloworld",done:true},{id:0,description:"helloworld",done:false},{id:0,description:"helloworld",done:false}];
  var expected = [{id:0,description:"helloworld",done:false},{id:0,description:"helloworld",done:false},{id:0,description:"helloworld",done:true}];
  var sort = true;
  var result = logic.sortTodos(array,true);
  t.deepEqual(array,expected,"done successfully");
  t.end();
});


