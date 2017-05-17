const db  = require('./../../db/models')
var {ObjectID} = require('mongodb');

const users = [{
  _id: new ObjectID(),
  firstName: 'Anthony',
  lastName: 'Xie'
}, {
  _id: new ObjectID(),
  firstName: 'Isabelle',
  lastName: 'Leeson'
}];


module.exports = users