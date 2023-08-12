const express = require('express');

const app = express();

app.get('/tasks', (req, res) => {
  res.status(200).send('Olá, mundo')
});

app.post('/tasks/index');

app.put('/tasks/eu');

app.delete('/tasks/ele');



app.listen(3333, () => {
  console.log('Sever is runing on port 3333')
});
