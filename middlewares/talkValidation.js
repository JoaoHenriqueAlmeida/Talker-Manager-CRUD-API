const dateValidation = (talk, res) => {
  const { watchedAt } = talk;
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  
  if (!watchedAt) {
    return res.status(400)
    .json(
      { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
    );
  }
   if (!dateRegex.test(watchedAt)) {
    return res.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
};

const rateValidation = (talk, res) => {
  const { rate } = talk;
  if (!rate) {
    return res.status(400)
    .json(
      { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
    );
  } if (rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
};

const talkValidation = (req, res, next) => {
  const { talk } = req.body;
  if (talk === undefined) {
    return res.status(400)
      .json(
        { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
      );
  }

  dateValidation(talk, res);
  rateValidation(talk, res);

  next();
};

module.exports = talkValidation;
