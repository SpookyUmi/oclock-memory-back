import Card from "./models/Card.js";
import Score from "./models/Score.js";

const controller = {
  getAllCards: async (_, res, next) => {
    try {
      const cards = await Card.find();

      if (!cards) {
        next();
      } else {
        res.status(200).json({ data: cards });
      }
    } catch (err) {
      next(err);
    }
  },
  getBestScores: async (_, res, next) => {
    try {
      const scores = await Score.find();

      if (!scores) {
        next();
      } else {
        const bestScores = scores.sort().slice(0, 3);
        res.status(200).json({ data: bestScores });
      }
    } catch (err) {
      next(err);
    }
  },
  saveScore: async (req, res, next) => {
    try {
      const newScore = await Score.create({ duration: req.body.newScore });

      if (!newScore) {
        next();
      } else {
        res.status(200).json({ data: newScore });
      }
    } catch (err) {
      next(err);
    }
  },
};

export default controller;
