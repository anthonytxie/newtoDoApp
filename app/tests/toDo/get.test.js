const expect = require('expect');
const request = require('supertest');
const {app} = require('./../../server/app')
const db  = require('./../../db/models')
const todos = require('./../testData/test-todos')




const getToDo = 
  it('should get all todos', (done) => {

    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body[0].text).toBe(todos[0].text)
        expect(res.body[1].text).toBe(todos[1].text)
      })
    .end((err, res) => {
        if (err) {
          return done(err);
        }
    done()
  });
});


module.exports =  {getToDo}



