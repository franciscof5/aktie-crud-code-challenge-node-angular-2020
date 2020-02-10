const express = require('express');
const router = express.Router();

const Book = require('../models/Book');

// @Route   GET api/Book/
// @desc    Get all Books
// @access  Public
router.get('/', (req, res) => {
  // Sending html in response with message
  // res.send('Hello from Books');

  // Query all documents in db
  Book.find()
    .then(books => {
      // Returning documents to client
      return res.json(books);
    })
    .catch(error => {
      // Error handling
      return res.status(500).json(error);
    });
});

// @Route   POST api/Book/new
// @desc    Creating a new Book
// @access  Public
router.post('/new', (req, res) => {
  // Get name and age from body request
  const { name, age } = req.body;

  // Creating a new Book (Model)
  const newBook = new Book({
    name,
    age
  });

  // Saving the new Book in the db
  newBook
    .save()
    .then(book => res.json(book))
    .catch(error => res.status(500).json(error));
});

// @Route   PUT api/Book/update/:id
// @desc    Update a Book
// @access  Public
router.put('/update/:id', (req, res) => {
  const { name, age } = req.body;

  Book.findOneAndUpdate(
    { _id: { $eq: req.params.id } }, // Find one id equals to id in params
    { name, age }, // data to be updated
    { new: true } // to mongoose returns the updated document
  )
    .then(newBook => {
      return res.json(newBook);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
});

// @Route   DELETE api/Book/:id
// @desc    Delete a Book
// @access  Public
router.delete('/:id', (req, res) => {
  // Searching for a Book and deleting
  Book.findOneAndDelete({ _id: req.params.id })
    .then(book => {
      // If the id of Book not exists, returns a error
      if (!book) {
        res.status(404).json({ msg: 'There is no user for this ID' });
      }

      return res.json(book);
    })
    .catch(error => {
      // Handling the error
      return res.status(500).json(error);
    });
});

// Export the routes of Book
module.exports = router;
