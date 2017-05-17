const expect = require('expect');
const request = require('supertest');
const {app} = require('./../../server/app')
const db  = require('./../../db/models')
var {ObjectID} = require('mongodb');
const todos = require('./../test-todos')


const getOneById = it('should get a todo by id', (done) => {
  const id = todos[0]._id.toHexString()
  const url = '/todos/' + id
  request(app)
  .get(url)
  .expect(200)
  .expect((res) => {
    expect(res.body.text).toBe(todos[0].text);
  })
  .end((err, res) => {
    if (err) {
      return done(err)
    }
    done();
  });
});

const notFound = it('should return 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .get(`/todos/${hexId}`)
      .expect(404)
      .end(done);
  });


const nonObject = it('should return 404 for non-object ids', (done) => {
    request(app)
      .get('/todos/123abc')
      .expect(404)
      .end(done);
  });

module.exports = {getOneById, notFound, nonObject}

