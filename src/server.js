const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

// Used mongodb.atlas (cloud database)
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-lhv8m.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);