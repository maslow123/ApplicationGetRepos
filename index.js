const express = require('express');
const app = express();

// Routes
const reposRouter = require('./routes/repos');


// Routing
app.use('/repos', reposRouter);

app.listen(process.env.PORT || 3000);
console.log(3000);
