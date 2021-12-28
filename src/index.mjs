require('dotenv').config();
const express = require("express");
const app = express();
import fyp from './router';
const DB_CONNECTION = require('../database/db_connect')


DB_CONNECTION.connection.once('open', function () {
  console.log({ msg: "Database connection opened" });  
})
app.use('/fyp', fyp);
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});
module.exports = app;