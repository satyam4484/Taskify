const express = require('express');

const app = express();

console.log("INFO: Setting the pre-defined middlewares...");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());
app.use(express.text());


module.exports = app;