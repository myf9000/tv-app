const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/scorekeeper');

module.exports = mongoose.connection;
