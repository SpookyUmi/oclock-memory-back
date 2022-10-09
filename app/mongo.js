import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

// Je me connecte à ma base de données Mongo et j'utilise un console.error pour me prévenir du moindre pépin.
mongoose.connect(process.env.DATABASE_URL);
mongoose.Promise = global.Promise; // Je dis à Mongoose d'utiliser les promises ES
// je crée une constante memoryDb à laquelle j'attribue la valeur mongoose.connection, pour faciliter l'export de mon mondule
const memoryDb = mongoose.connection;
memoryDb.on('error', (err) => {
  console.error(`🚫 → ${err.message}`);
});
// Je vérifie que ma connection à ma DB
memoryDb.once("open", () => {
  console.log("MongoDB connexion OK");
});

export default memoryDb;
