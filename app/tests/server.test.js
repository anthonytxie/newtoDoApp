const expect = require('expect');
const request = require('supertest');
const {app} = require('./../server/app')
const db  = require('./../db/models')

beforeEach((done) => {
  db.toDo.remove().then((res) => {
    done()
  });
});


describe('POST /todos', () => {

  // good data test case
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todo')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
    .end((err, res) => {
        if (err) {
          return done(err);
        }

        db.toDo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text)
          done();
        }).catch((e) => done(e));
      });
  });
    // test bad data
  it('should not create toDo with bad data', (done) => {
    request(app)
    .post('/todo')
    .send({})
    .expect(400)
    .end((err, res)=> {
      if (err) {
        return done(err);
      }
      db.toDo.find().then((todos) => {
        expect(todos.length).toBe(0)
        done();
      }).catch((e) => {
        done(e)
      });
    });
 });
});