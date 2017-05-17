const db = require('./../db/models');
var {ObjectID} = require('mongodb');

const userController = {};

userController.post = (req,res) => {
  const { firstName, lastName } = req.body;
  const user = new db.User ({
    firstName,
    lastName
  });

  user.save().then((user) => {
    res.status(200).send(user);
  }).catch((err) => {
    res.status(400).send(err)
  });
};



userController.getOne = (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  db.User.findById(id).then((user) => {
    if (!user) {
      return res.status(404).send();
    }
    res.send({user});
  }).catch((err) => {
    res.status(400).send(err);
  })
}

userController.getAll = (req, res) => {
  db.User.find().then((users) => {
    res.send(users)
  }).catch((err)=> {
    res.status(400).send(err)
  })
}


module.exports = userController