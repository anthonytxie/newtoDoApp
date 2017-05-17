const expect = require('expect');
const request = require('supertest');
const {app} = require('./../server/app')
const db  = require('./../db/models')
var {ObjectID} = require('mongodb');
const todos = require('./test-todos')

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}


beforeEach((done) => {
  db.toDo.remove({}).then(() => {
    return db.toDo.insertMany(todos);
  }).then(() => done());
});



describe("All Tests", function () {
 
  importTest("POST /todos", './toDo/post.test.js');
  importTest("GET /todos", './toDo/get.test.js');
  importTest("GET One /todo", './toDo/getone.test.js');

  after(() => console.log('done all tests'))

});



