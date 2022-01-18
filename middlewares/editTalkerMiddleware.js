const fs = require('fs');

// Ajuda dos colegas Michael Caxias e Thiago Frozzi para enxergar o erro na linha 19
// https://github.com/tryber/sd-014-b-project-talker-manager/pull/35
// https://github.com/tryber/sd-014-b-project-talker-manager/pull/29

const editTalker = (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const currentTalkers = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));

  const talkersToKeep = currentTalkers.filter((talker) => talker.id !== Number(id));

  const editedTalker = { id: Number(id), name, age, talk };

  fs.writeFileSync('./talker.json', JSON.stringify([...talkersToKeep, editedTalker]));

  return res.status(200).json(editedTalker);
};

module.exports = editTalker;
