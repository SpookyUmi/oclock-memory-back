// Dans ce fichier on insert les données souhaitées dans notre table Cards,
// grâce aux méthodes fournies par Mongoose et à du JS vanilla.
import "../mongo.js";
// On a besoin de notre model Card pour injecter des données dans notre table Cards. Travailler avec le model garantit la bonne structuration de nos données.
import Card from "../models/Card.js";

// Je crée un array de d'objets, contenant les noms de mes cards.
const cards = [{ name: "apple" }, { name: "banana" }, { name: "orange" }, { name: "lime" }, { name: "pomegranate" }, { name: "apricot" }, { name: "lemon" }, { name: "strawberry" }, { name: "green apple" }, { name: "peach" }, { name: "grapes" }, { name: "watermelon" }, { name: "plum" }, { name: "pear" }, { name: "cherry" }, { name: "raspberry" }, { name: "mango" }, { name: "yellow cherry" }];

// Je crée une fonction createData
async function createData() {
  // Je déclare une variable n, qu'on va incrémenter par la suite. On veut commencer à 0, je le déclare donc à -1 avant d'incrémenter.
  let n = -1

  // J'utilise la méthode map pour itérer sur mon array cards. Pour chaque élément dans cards, je crée une nouvelle instance dans ma table Cards, via mon model Card.
  cards.map(async (el) => {
    // J'incrémente n
    n++;
    // Je crée un nouvel élément et l'insère dans la table
    await Card.create({ name: el.name, offset: n } ,);
  })
};

// J'appelle ma fonction createData afin d'exécuter les instructions qui s'y trouvent.
// createData();
