const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  _toDos: [{ type: Schema.ObjectId, ref: 'toDo'}]
})

const User = mongoose.model('User', userSchema);

module.exports = User 