const fs = require('fs');

const talkerById = (req, res) => {
  const { id } = req.params;
  const allTalkers = fs.readFileSync('./talker.json', 'utf-8');

  const parsedTalkers = JSON.parse(allTalkers);

  const matchingTalker = parsedTalkers.find((talker) => talker.id === Number(id));

  if (!matchingTalker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  res.status(200).send(matchingTalker);
};

module.exports = talkerById;