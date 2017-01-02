'use strict';

// npm modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const jsonParser = require('body-parser').json();
const app = express();

// * Use the `http-errors` npm  module with the new`error-response` middleware from lecture

// app modules
const userRoutes = require('./routes/user-routes.js');
const authMiddleware = require('./lib/authentication.js');

// module constants
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/lab16';

mongoose.connect(MONGODB_URI);
mongoose.Promise = Promise;

// app middleware
app.use(morgan('dev'));
app.use(authMiddleware);
app.use(jsonParser);
app.use(userRoutes);

// start server
app.listen(PORT, () => {
  console.log('listening on PORT', PORT);
});
