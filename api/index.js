const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const books = require('./routes/books');

app.use('/books', books);

mongoose
  .connect('mongodb://mongo:27017/api', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });

app.listen(9000, () => console.log('Server ativo na porta 9000'));

app.get('/', (req, res) => {
  res.send('Hello World');
});