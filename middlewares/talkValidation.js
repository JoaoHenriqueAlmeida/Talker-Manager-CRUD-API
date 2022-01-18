const dateValidation = (date, res) => {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  
  if (!dateRegex.test(date)) {
    return res.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
};

const rateValidation = (rate, res) => {
  if (rate < 1 && rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
};

const talkValidation = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt, rate } = talk;
  if (talk === undefined || watchedAt === undefined || rate === undefined) {
    return res.status(400)
      .json(
        { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
      );
  }

  dateValidation(watchedAt, res);
  rateValidation(rate, res);

  next();
};

module.exports = talkValidation;
