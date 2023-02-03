/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

const express = require('express');
const error = express.Router();

// Definitions

error.use('*', (req, res, next) => {
  const error = new Error();
  
  error.status = 404;
  error.message = 'Not Found';
  
  next(error);
});

error.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ message: error.message });
});

// Exports

module.exports = error;