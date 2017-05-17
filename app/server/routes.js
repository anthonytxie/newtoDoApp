const express = require('express');
const basicController = require('./../controllers/basicController');
const toDoController = require('./../controllers/toDoController');
const userController = require('./../controllers/userController');

const routes = express();

routes.get('/', basicController.get);

//users
routes.post('/users', userController.post);
routes.get('/users', userController.getAll);
routes.get('/users/:id', userController.getOne);


// posts
routes.post('/todo', toDoController.post);
routes.get('/todos', toDoController.getAll);
routes.get('/todos/:id', toDoController.getOne);
routes.get('/deletetodos', toDoController.deleteAll)


module.exports = routes

