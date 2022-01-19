const fs = require('fs');

const addTalker = (req, res) => {
  const { name, age, talk } = req.body;
  
  const currentTalkers = JSON.parse(fs.readFileSync('./talker.json'));
  
  const newTalker = {
    id: (currentTalkers.length + 1),
    name,
    age,
    talk,
  };
  fs.writeFileSync('./talker.json', JSON.stringify([...currentTalkers, newTalker]));

  res.status(201).json(newTalker);
};

module.exports = addTalker;