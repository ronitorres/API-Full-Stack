const connection = require('./connection');                                                // Importa a connection para que possa se conectar com o banco.

const getAll = async () => {                                                               // Adicionado o nome async pra pode adicionar o await. Pois o select SQL é assincrono
  const [tasks] = await connection.execute('SELECT * FROM tasks');                           // A função execute espera uma query SQL
  return tasks;
};

const createTask =  async (task) =>{

  const { title } = task;

  const dateUTC = new Date(Date.now()).toUTCString();                                                      // função para utilizar a data

  const query = 'INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)'

  const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);

  return {insertId: createdTask.insertId};

}

const deleteTask = async (id) =>{
  const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
  return removedTask;

}


const updateTask = async (id, task) =>{
  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

  const { title, status } = task;

  const updatedTask = await connection.execute(query, [title, status, id]);
  return updatedTask;

}





module.exports = {                                                                          // Exporta a função
  getAll,
  createTask,
  deleteTask,
  updateTask,
}
