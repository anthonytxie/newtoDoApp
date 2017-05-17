const expect = require('expect');
const request = require('supertest');
const {app} = require('./../../server/app')
const db  = require('./../../db/models')




const goodDataToDo = 
  it('should create a new User', (done) => {
    const firstName = 'Anthony';
    const lastName = 'Xie'

    request(app)
      .post('/user')
      .send({firstName, lastName})
      .expect(200)
      .expect((res) => {
        expect(res.body.firstName).toBe(firstName);
        expect(res.body.lastName).toBe(lastName);
      })
    .end((err, res) => {
        if (err) {
          return done(err);
        }

        db.User.find().then((todos) => {
          expect(todos.length).toBe(3);
          expect(todos[2].firstName).toBe(firstName)
          done();
        }).catch((e) => done(e));
      });
  });

const badDataToDo = 
  it('should not create user with bad data', (done) => {
    request(app)
    .post('/user')
    .send({})
    .expect(400)
    .end((err, res)=> {
      if (err) {
        return done(err);
      }
      db.User.find().then((todos) => {
        expect(todos.length).toBe(2)
        done();
      }).catch((e) => {
        done(e)
      });
    });
 });

module.exports =  {goodDataToDo, badDataToDo}



