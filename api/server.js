'use strict';

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

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
*/


