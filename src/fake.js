import { faker } from "@faker-js/faker";
import { randomImages } from "./utils/functions.js";
// Set of variables to generate random food images
// --
const number = 8;
const height = 640;
const width = 480;
const randomize = true;
const imgFunction = faker.image.food;

// Generate a set of random url food images
// --
randomImages(imgFunction, number, height, width, randomize);


