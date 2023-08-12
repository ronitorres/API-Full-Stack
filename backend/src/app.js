const express = require('express');                   // Importa o express
const router = require('./router');                   // Importa o router

const app = express();
app.use(router)                                       // Fala pra o app usar o router














module.exports = app;                                 // Exporta o app
