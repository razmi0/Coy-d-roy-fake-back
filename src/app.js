//@ts-check

import { getProduits, getTimeExec } from "./utils/functions.js";

const url = [
    "http://localhost:3000/boisson",
    "http://localhost:3000/dessert",
    "http://localhost:3000/poisson",
    "http://localhost:3000/viande",
    "http://localhost:3000/glace",
]

const moreUrl = [
    "http://localhost:3000/boisson/1",
]

// GetTimeExec me donne juste le temps d'execution de la fonction getProduits
await getTimeExec(getProduits, url);
await getTimeExec(getProduits, moreUrl);


