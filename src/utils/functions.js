//@ts-check

/**
 * @description Get data from url and log time to process function
 * @async
 * @param {string[]} url
 */
export async function getProduits(url) {
  const array = [];
  try {
    for (let i = 0; i < url.length; i++) {
      const req = await fetch(url[i]);
      const data = await req.json();
      array.push({ data: data, url: url[i] });
    }
  } catch (error) {
    console.warn(
      "Connerie Error : As-tu lancer le serveur avec un npm start ?"
    );
    console.error(error);
  }
  console.table(array);
}

/**
 * @description Generate a set of random url images
 * @param {function} fc: fonction à executer
 * @param {number} quantite: Quantité d'images à générer
 * @param {number} h: Hauteur de l'image
 * @param {number} l: Largeur de l'image
 * @param {boolean} flag : true pour randomize, false pour non randomize
 */
export function randomImages(fc, quantite, h, l, flag) {
  for (let i = 0; i < quantite; i++) {
    console.log(fc(h, l, flag));
  }
}

export async function getTimeExec(fc, parameters) {
  const t1 = performance.now();
  await fc(parameters);
  const t2 = performance.now();
  console.log({
    Execution: `${fc.name}(${parameters})`,
    Time: `${t2 - t1} ms`,
  });
  
}
