import express from "express";
const router = express.Router();
import controller from "./controller.js";

// Ma liste CRUD ainsi que chaque méthode du controller adapté à chaque opération.
router.get('/cards', controller.getAllCards);
router.get('/scores', controller.getBestScores);
router.post('scores', controller.saveScore);


// Mon middleware 404
router.use((req, res) => {
  res.status(404).json({ error: "not found" });
});

// J'exporte mon router en utilisant la syntaxe ES6.
// En syntaxe commonJS, l'export ressemblerait à : module.exports = router;
export default router;
