const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db/database');
const user = require('./db/routes/user');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  const app = express();
  const port = process.env.PORT || 3001;

  app.use(morgan('combined'));
  app.use(bodyParser.json({ type: '*/*' }));

  app.use('/', user);

  app.listen(port, () => {
    console.log(`Server - db is running on port ${port}`);
  });
});
