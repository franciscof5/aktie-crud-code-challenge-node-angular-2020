const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());


mongoose
  .connect('mongodb://mongo:27017/', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });

app.listen(9000, () => console.log('Server ativo na porta 9000'));

const books = require('./routes/books');

app.get('/', (req, res) => {
  res.send('Hello World');
});

//app.use('/api/books', books);