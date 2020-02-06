const express = require('express');
const router = express.Router();

const Book = require('../models/Book');

router.post('/new', (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    comments: req.body.comments
  });

  newBook
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      "teste",
      res.status(500).json(error);
    });
});

module.exports = router;