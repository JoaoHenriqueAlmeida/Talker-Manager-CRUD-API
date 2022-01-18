const fs = require('fs');

const editTalker = (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const currentTalkers = Object.values(JSON.parse(fs.readFileSync('./talker.json')));

  const talkersToKeep = currentTalkers.filter((talker) => talker.id !== Number(id));

  const editedTalker = { id: Number(id), name, age, talk };

  fs.writeFileSync('./talker.json', JSON.stringify([...talkersToKeep, editedTalker]));

  return res.status(200).json({ editedTalker });
};

module.exports = editTalker;