import mongoose from "mongoose";
mongoose.Promise = global.Promise;

// Je crée mon schema pour mon élément Card. Chaque instance de la table Cards porte cette structure.
const cardSchema = new mongoose.Schema({
  // J'attribue un nom pour distinguer chaque fruit se trouvant sur mes cartes.
  name: {
    type: String,
    trim: true,
    required: true,
  },
  // Le visuel de toutes les cartes étant réunit en une seule image, le champ offset
  // va me permettre de savoir quand décaler l'image afin d'avoir le visuel souhaité.
  offset: {
    type: Number,
    required: true,
  }
});

export default mongoose.model('Card', cardSchema);
