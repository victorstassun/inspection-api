const express = require('express');
let cors = require('cors');
let multer = require('multer');
const fs = require("fs");

const server = express();

server.use(express.json()); // makes the express understand .json
server.use(cors());

let upload = multer({ dest: './uploads/' });
const teste = require("./datajson.json");
// CRUD - Create, Read, Update, Delete

server.use((req, res, next) => { // global middleware is created here
  console.time('Request'); 
  console.log(`Método: ${req.method}; URL: ${req.url}; `); 

  next(); // calls the next functions

  console.log('Finalizou'); // called before the requisition is completed

  console.timeEnd('Request'); // appears in the end of the requisition
});

server.get('/inspections', (req, res) => {
  return res.json(teste);
}) // list all products

server.post('/upload', upload.array('file'), async (req, res) => {
  res.send({ upload: true, files: req.files });
}); //upload files

server.listen(3000);