require('dotenv').config();
const express = require('express');

// Routes
const reposRouter = require('./routes/repos');

const app = express();

// Routing
app.use('/repos', reposRouter);

app.listen(process.env.PORT || 3000);
console.log(3000);
