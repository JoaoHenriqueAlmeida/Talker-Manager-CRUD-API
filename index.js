const express = require('express');
const bodyParser = require('body-parser');
const talkers = require('./middlewares/talkerMiddleware');
const talkerById = require('./middlewares/idMiddleware');
const login = require('./middlewares/loginMiddleware');
const addTalker = require('./middlewares/addTalkerMiddleware');
const tokenValidation = require('./middlewares/tokenValidation');
const nameValidation = require('./middlewares/nameValidation');
const ageValidation = require('./middlewares/ageValidation');
const talkValidation = require('./middlewares/talkValidation');
const editTalker = require('./middlewares/editTalkerMiddleware');
const deleteTalker = require('./middlewares/deleteTalkerMiddleware');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.route('/talker')
  .get(talkers)
  .post(
    tokenValidation, 
    nameValidation, 
    ageValidation, 
    talkValidation, 
    addTalker,
  );

app.route('/talker/:id')
  .get(talkerById)
  .put(
    tokenValidation, 
    nameValidation, 
    ageValidation, 
    talkValidation, 
    editTalker,
  )
  .delete(
    tokenValidation,
    deleteTalker,
  );

app.route('/login')
  .post(login);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
