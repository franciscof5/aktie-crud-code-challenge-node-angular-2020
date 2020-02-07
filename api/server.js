// Import the packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create an instance for express
const app = express();

// Get the book routes
const book = require('./routes/book');

// Apply the bodyParser middleware, to get json data from requests (Body)
app.use(bodyParser.json());

// Apply the routes of /api/book
app.use('/api/book', book);

// Get the mongoURI for database
const db = require('./config/keys').mongoURI;

// Connecting with database
mongoose
  .connect(db, { useNewUrlParser: true })
  // If all run ok, console log the message
  .then(() => console.log('MongoDB connected'))
  // For console log any error
  .catch(err => console.log(err));

// Port declaration
const port = process.env.PORT || 9000;

// Init the express.js server
app.listen(port, () => console.log(`Server running on ${port}`));

/*'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
app.use(cors()) //habilitando cors na nossa aplicacao

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

/*
WORKING
'use strict';

const express = require('express');
>>>>>>> 6454df782f873db5ae32c175d68844c7041a4120

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
<<<<<<< HEAD
console.log(`Running on http://${HOST}:${PORT}`);
=======
console.log(`Running on http://${HOST}:${PORT}`);
*/

