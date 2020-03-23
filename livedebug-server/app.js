const express = require('express');

const app = express();

const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);
app.use('/', routes);


module.exports = app;
