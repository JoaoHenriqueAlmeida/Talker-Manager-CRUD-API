const validate = require('../utilities/emaiValidation');
const generateToken = require('../utilities/tokenGenerator');
  // Consultei o código do colega Rodolfo Braga nesse requisito https://github.com/tryber/sd-014-b-project-talker-manager/pull/42/commits/c837b757bb61a50111710fec7f8e823b0959ac7f

const login = (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  } if (!validate(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  } if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  } if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  const token = generateToken(8);
  res.status(200).json({ token });
};

module.exports = login;
