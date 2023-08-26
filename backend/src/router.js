const express = require('express');                                          // Importa o express

const tasksController = require('./controllers/tasksController');            // Importa o controller para usar as funções
const tasksMiddleware = require('./middlewares/tasksMiddlewares');

const router = express.Router();                                            // Usar a função Router do express

router.get('/tasks', tasksController.getAll);                               // A callback aqui será a função midleware do taskController

router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);

router.delete('/tasks/:id', tasksController.deleteTask);

router.put('/tasks/:id', tasksMiddleware.validateFieldTitle, tasksMiddleware.validateFieldStatus ,tasksController.updateTask);









module.exports = router;                       // Exporta o router
