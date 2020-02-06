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

router.get('/', (req, res) => {
  res.send("Lista de livros");
  /*Book.find()
    .then(items => {
      res.json(items);
    })
    .catch(error => res.status(500).json(error));
  */
});
/*
router.put('/edit/:id', (req, res) => {
  const dat = { title: req.body.title, comments: req.body.comments };

  Book.findOneAndUpdate({ _id: req.params.id }, dat, { new: true })
    .then(item => {
      res.json(item);
    })
    .catch(error => res.status(500).json(error));
});

router.delete('/delete/:id', (req, res) => {
  Book.findOneAndDelete({ _id: req.params.id })
    .then(item => {
      res.json(item);
    })
    .catch(error => res.status(500).json(error));
});

module.exports = router;