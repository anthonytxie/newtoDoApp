const db = require('./../db/models');
var {ObjectID} = require('mongodb');

const toDoController = {};

toDoController.post = (req,res) => {
  const { text } = req.body;
  const toDo = new db.toDo({
    text
  })
  toDo.save().then((toDo) => {
    res.send(toDo);
  }).catch((err) => {
    res.status(400).send(err)
  });
};


toDoController.getOne = (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  db.toDo.findById(id).then((toDo) => {
    if (!toDo) {
      return res.status(404).send();
    }
    res.send(toDo);
  }).catch((err) => {
    res.status(400).send(err);
  })
}



toDoController.getAll = (req,res) => {
  db.toDo.find({})
  .then((toDo) => {
    res.send(toDo);
  }).catch((err) => {
    res.status(400).send(err);
  });
};

toDoController.deleteAll = (req, res) => {
  db.toDo.remove({})
  .then((result) => {
    res.json({
      success: true,
      data: result
    });
  }).catch((e) => {
    res.json({
      success: false,
      message:e
    });
  });
};

module.exports = toDoController;









