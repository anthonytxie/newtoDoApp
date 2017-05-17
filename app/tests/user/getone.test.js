const expect = require('expect');
const request = require('supertest');
const {app} = require('./../../server/app')
const db  = require('./../../db/models')
var {ObjectID} = require('mongodb');
const users = require('./../testData/test-users')


const getOneById = it('should get a user by id', (done) => {
  const id = users[0]._id.toHexString()
  const url = '/users/' + id
  request(app)
  .get(url)
  .expect(200)
  .expect((res) => {
    expect(res.body.text).toBe(users[0].text);
  })
  .end((err, res) => {
    if (err) {
      return done(err)
    }
    done();
  });
});

const notFound = it('should return 404 if user not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .get(`/users/${hexId}`)
      .expect(404)
      .end(done);
  });


const nonObject = it('should return 404 for non-object ids', (done) => {
    request(app)
      .get('/users/123abc')
      .expect(404)
      .end(done);
  });

module.exports = {getOneById, notFound, nonObject}