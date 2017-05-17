const expect = require('expect');
const request = require('supertest');
const {app} = require('./../../server/app')
const db  = require('./../../db/models')

const getOneById = it('should get an user by id', (done) => {
  const id = '591b836c48ff2a25d356733f'
  const url = '/users/' + id
  request(app)
  .get(url)
  .expect(200)
  .expect((res) => {
    console.log(res.body)
  })
  .end((err, res) => {
    if (err) {
      return done(err)
    }
    done();
  });
});

module.exports = {getOneById}

