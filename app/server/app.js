const express = require('express');
const config = require('./../config/config');
const mongooseConnection = require('./../db/mongoose.js');
const bodyParser = require('body-parser')
const routes = require('./routes')
const mongoose = require('mongoose')
const port = process.env.PORT;


const app = express();

//Middleware
app.use(bodyParser.json())
app.use(routes)


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


module.exports = {app}