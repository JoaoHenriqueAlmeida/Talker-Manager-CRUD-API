const express = require('express');
const bodyParser = require('body-parser');
const talkers = require('./middlewares/talkerMiddleware');
const talkerById = require('./middlewares/idMiddleware');
// Iniciando o projeto;

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', talkers);

app.get('/talker/:id', talkerById);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
