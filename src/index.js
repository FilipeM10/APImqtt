const express = require('express');
const route = require('./routes/routes')
const app = express();

app.use(express.json())
app.use('/teste', route)

module.exports = app
