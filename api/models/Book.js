const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating a new Schema for Book
const BookSchema = new Schema({
  // Here, we set the names of properties
  title: {
    // The type
    type: String,
    // And if is required or not
    required: true
  },
  comments: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Here, we export the model of Books
module.exports = mongoose.model('books', PersonSchema);
