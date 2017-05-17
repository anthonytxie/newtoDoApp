const expect = require('expect');
const request = require('supertest');
const {app} = require('./../../server/app')
const db  = require('./../../db/models')
var {ObjectID} = require('mongodb');
const users = require('./../testData/test-users')

const getUsers = 
  it('should get all Users', (done) => {

    request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body[0].firstName).toBe(users[0].firstName)
        expect(res.body[0].lastName).toBe(users[0].lastName)
        expect(res.body[1].firstName).toBe(users[1].firstName)
        expect(res.body[1].lastName).toBe(users[1].lastName)
      })
    .end((err, res) => {
        if (err) {
          return done(err);
        }
    done()
  });
});


module.exports =  {getUsers}



