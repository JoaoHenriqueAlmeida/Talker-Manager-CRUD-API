const fs = require('fs');

const talker = (req, res) => {
  fs.readFile('./talker.json', 'utf-8', (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(JSON.parse(data));
    }
  });
};

module.exports = talker;