const express = require("express");
const mongoose = require("mongoose");

//Iniciando App
const app = express();
app.use(express.json());

// Add headers
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

app.options("*", function (req, res, next) {
  if (req.method == "OPTIONS")
    // res.status(200);
    res.sendStatus(200);
});

//Iniciando Banco de Dados
mongoose.set('debug', true)
mongoose
  .connect(
    "mongodb://basniak:tapaburacobanco@cluster0-shard-00-00-jg4cf.mongodb.net:27017,cluster0-shard-00-01-jg4cf.mongodb.net:27017,cluster0-shard-00-02-jg4cf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    }
  )
  .then(res => {
    console.log("mongodb conectado", new Date());
  })
  .catch(erro => {
    console.log(erro);
  });

//Models
require("./src/models/User");
require("./src/models/Post");
require("./src/models/Comment");
require("./src/models/Like");
require("./src/models/Solved");
require("./src/models/Post_Image");
require("./src/models/Post_Report");

//Rotas

app.use("/api", require("./src/routes"));
app.use(function (req, res, next) {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err.status, err.message);
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong. Please try again",
    status: err.status || 500
  });
});
const port = process.env.PORT || 3000;
console.log("Porta", port);
app.listen(port);
