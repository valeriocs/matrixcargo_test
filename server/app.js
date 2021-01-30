const express = require('express');
const app = express();
const mongoose = require('mongoose');
const repositoryRoutes = require('./routes/github-repositores-route');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Matrix Cargo Test');
});

app.use('/github-repositories', repositoryRoutes);

mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
);

app.listen(3000);
