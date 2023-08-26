const taskModel = require('../models/tasksModel');

//GET
const getAll = async (request, response) =>{

  const tasks = await taskModel.getAll();

  return response.status(200).json(tasks);
};

//POST
const createTask = async (request, response) => {

  const createdTask = await taskModel.createTask(request.body);

  return response.status(201).json(createdTask);
}

//DELETE
const deleteTask = async (request, response) => {
  const { id } = request. params;

  await taskModel.deleteTask(id);
  return response.status(204).json();                                                             // o 204 diz que correu tudo bem mas não tem retorno de corpo
}

//UPDATE
const updateTask = async (request, response) =>{
    const { id } = request.params;
    await taskModel.updateTask(id, request.body);
    return response.status(204).json();

}


module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
}
