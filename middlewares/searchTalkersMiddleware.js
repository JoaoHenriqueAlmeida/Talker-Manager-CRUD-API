const fs = require('fs');

const searchTalkers = (req, res) => {
  const { searchTerm } = req.query;

  const currentTalkers = JSON.parse(fs.readFileSync('./talker.json', 'utf8'));

  if (!searchTerm) {
    return res.status(200).json(currentTalkers);
  }

  const filteredTalkers = currentTalkers.filter((talkers) => talkers.name.includes(searchTerm));

  if (!filteredTalkers) {
    return res.status(200).json([]);
  }

  res.status(200).json(filteredTalkers);
};

module.exports = searchTalkers;
