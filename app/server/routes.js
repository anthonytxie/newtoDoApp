const express = require('express');
const basicController = require('./../controllers/basicController');
const toDoController = require('./../controllers/toDoController');

const routes = express();

routes.get('/', basicController.get);
routes.post('/todo', toDoController.post);
routes.get('/todos', toDoController.getAll);
routes.get('/deletetodos', toDoController.deleteAll)


module.exports = routes

