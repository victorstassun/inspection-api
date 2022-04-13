const { json } = require('express');
const express = require('express');
const fs = require("fs");

const server = express();

server.use(express.json()); // makes the express understand .json

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

server.listen(3000);