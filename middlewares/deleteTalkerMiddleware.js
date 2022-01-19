const fs = require('fs');

const deleteTalker = (req, res) => {
  const { id } = req.params;

  const currentTalkers = JSON.parse(fs.readFileSync('./talker.json', 'utf8'));
  
  const updatedTalkers = currentTalkers.filter((talker) => talker.id !== Number(id));

  fs.writeFileSync('./talker.json', JSON.stringify(updatedTalkers));

  res.status(204).json();
};

module.exports = deleteTalker;