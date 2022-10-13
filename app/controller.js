import Card from "./models/Card.js";
import Score from "./models/Score.js";
import formatDisplay from "./utils/formatDisplay.js";

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
        // Une fois que j'ai bien toutes les cartes, je les renvoie.
        res.status(200).json({ cards });
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
        // 2. On veut les meilleurs temps, donc ici les 3 premiers éléments. Ici, mon slice() sélectionne les éléments entre l'index 0 et l'index 3.
        const bestScores = scores.map((score) => score.duration)
          .sort(function (a, b) {
            return a - b;
          })
          .slice(0, 3);
        // On convertit le format des scores pour plus de lisibilité une fois sur le front
        const formattedBestScores = bestScores.map((score) => formatDisplay(score))
        // j'envoie mes scores sur le front.
        res.status(200).json({ formattedBestScores: formattedBestScores });
      }
    } catch (err) {
      next(err);
    }
  },
  saveScore: async (req, res, next) => {
    try {
      // je récupère mon nouveau score et le crée en base de données.
      const newScore = await Score.create({ duration: req.body.score });
      if (!newScore) {
        next();
      } else {
        const formattedScore = formatDisplay(newScore.duration);
        res.status(200).json({ formattedScore });
      }
    } catch (err) {
      next(err);
    }
  },
};

export default controller;
