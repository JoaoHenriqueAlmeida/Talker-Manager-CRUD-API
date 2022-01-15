const crypto = require('crypto');

const tokenGenerator = (tokenSize) => crypto.randomBytes(tokenSize).toString('hex');

  // Peguei a dica de usar a biblioteca crypto para gerar o token aleatório.
  //  Documentação crypto.random Bytes: https://nodejs.org/api/crypto.html#cryptorandombytessize-callback

module.exports = tokenGenerator;