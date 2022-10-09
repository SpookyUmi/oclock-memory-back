import Card from "./models/Card.js";
import Score from "./models/Score.js";

// Mon controller avec toutes ses méthodes.
const controller = {
  getAllCards: async (_, res, next) => {
    try {
      // Je récupère toutes mes cartes grâce à la query "find" de Mongoose
      const cards = await Card.find();

      if (!cards || !cards.length) {
        // Si on ne trouve aucune carte, on passe au middleware suivant (notre middleware 404).
        next();
      } else {
        // Si j'ai bien toutes mes cartes, je les renvoie
        res.status(200).json({ data: cards });
      }
    } catch (err) {
      // Dans le cas ou quelque chose se passe mal, on arrive dans ce block.
      next(err);
    }
  },
  getBestScores: async (_, res, next) => {
    try {
      const scores = await Score.find();

      if (!scores || !scores.length) {
        next();
      } else {
        // Je trie mon array de scores :
        // 1. Je range les temps par ordre croissant avec sort() (attention : sort() mutate l'array)
        // 2. On veut les meilleurs temps, donc ici les 3 premiers éléments. Je dis à ma méthode slice() de sélectionner les élément entre l'index 0 et l'index 3.
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
