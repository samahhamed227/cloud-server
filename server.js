'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000 ;
app.use(express.static('./call'));

const stamper = require('./public/stamper');

app.get('/', (req, res) => {
  res.status(200).send('Welcome World 🖐️🖐️🖐️🖐️');
});

app.get('/data', stamper, (req, res) => {

  const output = {
    name: 'samah hamed',
    age: 25,
    major: 'software Engineer',
    "time": req.timestamp 
// i can solve in another way with no stamper_file =>   time: new Date().toString()
  };

  res.status(200).json(output);
});


app.get('/bad', (req, res, next) => {
    next('error from bad end point 🛑❗');
});

// app.use('*', notFoundHandler); 
// app.use(errorHandler); 


function start() {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}
module.exports = {
    app,
    start
  
};
