const express = require('express');
const helmet = require('helmet');
const moment = require('moment');

const app = express();

app.use(helmet());

app.get("/greet", (req, res) => res.send("hello");

app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  res.status(200).send(currentTime);
});

module.exports = app;
