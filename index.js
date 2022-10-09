// J'ai choisi d'utiliser la syntaxe ES6 avec import. On peut aussi utiliser la syntaxe CommonJS
// Par exemple : const express = require('express')
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./app/router.js";
import "./mongo.js";

// Je crée mon app express
const app = express();

// Je dis à mon app d'utiliser mon router
app.use(router);

// Je définis mon port d'écoute
const PORT = process.env.PORT || 3500;

// Je lance mon application, et lui passe mon port définis au-dessus
// J'utilise un console.log pour vérifier que tout se passe bien
app.listen(PORT, () => {
  console.log(`API Listening on ${PORT}`);
});
