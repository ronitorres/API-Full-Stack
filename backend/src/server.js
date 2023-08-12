const app = require('./app');                               // Importa app

require('dotenv').config()                                 // Importa o dotenv e chama o método config(). Dessa forma, todas as variáveis do .env serão injetadas aqui


const PORT = process.env.PORT || 3333;                     // Criada a variável PORT para não que passar uma porta fixa. Caso a variável PORT não esteja disponível, ele usa a 3333


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
