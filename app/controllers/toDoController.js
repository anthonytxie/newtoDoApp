const db = require('./../db/models');

const toDoController = {};

toDoController.post = (req,res) => {
  const { text } = req.body;
  const toDo = new db.toDo({
    text
  })
  toDo.save().then((newtoDo) => {
    res.send(newtoDo);
  }).catch((err) => {
    res.status(400).send(err)
  });
};

toDoController.getAll = (req,res) => {
  db.toDo.find({})
  .then((toDo) => {
    res.json({
      success: true,
      data: toDo
    });
  }).catch((err) => {
    res.json({
      success:false,
      message: err
    })
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

