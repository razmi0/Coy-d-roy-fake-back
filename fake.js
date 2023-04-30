import { faker } from "@faker-js/faker";

// Set of variables to generate random food images
// --
const number = 8;
const height = 640;
const width = 480;
const randomize = true;
const fakeObject = faker;
const imgFunction = fakeObject.image.food;

// Generate a set of random url food images
// --
randomImages(imgFunction, number, height, width, randomize);

/**
 * @description Generate a set of random url images
 * @param {function} fc: fonction à executer
 * @param {number} quantite: Quantité d'images à générer
 * @param {number} p1: Hauteur de l'image
 * @param {number} p2: Largeur de l'image
 * @param {boolean} flag : true pour randomize, false pour non randomize
 */
function randomImages(fc, quantite, h, l, flag) {
  for (let i = 0; i < quantite; i++) {
    console.log(fc(h, l, flag));
  }
}
