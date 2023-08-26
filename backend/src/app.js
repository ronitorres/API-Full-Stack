const express = require('express');                   // Importa o express
const router = require('./router');                   // Importa o router

const app = express();

app.use(express.json())                               // Usando a função json() do express para que a API consiga trabalhar com json.

app.use(router)                                       // Fala pra o app usar o router










module.exports = app;                                 // Exporta o app
