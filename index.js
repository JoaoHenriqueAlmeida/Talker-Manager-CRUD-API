const express = require('express');
const bodyParser = require('body-parser');
const talkers = require('./middlewares/talkerMiddleware');
const talkerById = require('./middlewares/idMiddleware');
// Iniciando o projeto;

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.route('/talker')
  .get(talkers);

app.route('/talker/:id')
  .get(talkerById);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
