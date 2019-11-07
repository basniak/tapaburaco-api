const express = require('express');
const mongoose = require('mongoose');

//Iniciando App
const app = express();
app.use(express.json());

//Iniciando Banco de Dados

mongoose.connect('mongodb://localhost:3001/tapaburacodatabase',
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    }
);

//Models
require('./src/models/User');
require('./src/models/Post');
require('./src/models/Comment');
require('./src/models/Like');
require('./src/models/Solved');
require('./src/models/Post_Image');
require('./src/models/Post_Report');

//Rotas

app.use('/api', require("./src/routes"));

app.listen(27017);
