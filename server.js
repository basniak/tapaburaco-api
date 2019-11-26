const express = require('express');
const mongoose = require('mongoose');

//Iniciando App
const app = express();
app.use(express.json());

//Iniciando Banco de Dados

mongoose.connect('mongodb://basniak:tapaburacobanco@cluster0-shard-00-00-jg4cf.mongodb.net:27017,cluster0-shard-00-01-jg4cf.mongodb.net:27017,cluster0-shard-00-02-jg4cf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    }
).catch(erro => {
    console.log(erro)
});

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


const port = process.env.PORT || 3000
app.listen(port);