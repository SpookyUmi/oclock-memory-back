import mongoose from "mongoose";
mongoose.Promise = global.Promise;

// Je crée mon schema pour mon élément Time. Chaque instance de la table Times porte cette structure.
// L'outil Mongoose nous permet de modéliser nos datas mongoDB plus facilement.
const scoreSchema = new mongoose.Schema({
  duration: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Score', scoreSchema);
