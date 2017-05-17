const expect = require('expect');
const request = require('supertest');
const {app} = require('./../server/app')
const db  = require('./../db/models')
var {ObjectID} = require('mongodb');
const todos = require('./testData/test-todos')
const users = require('./testData/test-users')

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}


beforeEach((done) => {
  db.toDo.remove({}).then(() => {
    return db.toDo.insertMany(todos);
  });
  db.User.remove().then(() => {
    return db.User.insertMany(users);
  }).then(() => done());
});



describe("All Tests", function () {
 
  importTest("POST /todos", './toDo/post.test.js');
  importTest("GET /todos", './toDo/get.test.js');
  importTest("GET One /todo", './toDo/getone.test.js');

  importTest("POST /user", './user/post.test.js');
  importTest("GET /users", './user/get.test.js');
  importTest("GET One /user", './user/getone.test.js');

  after(() => console.log('done all tests'))

});



