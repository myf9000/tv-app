const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/database');
const PlayerController = require('./db/controllers/player.controller');


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get('/players', PlayerController.fetchPlayers);
  app.post('/players', PlayerController.createPlayer);
  app.delete('/players/:id', PlayerController.removePlayer);
  app.put('/players/:id', PlayerController.changeScore);

  app.listen(3001, () => {
    console.log('Sever is running.');
  });
});
