# Coy-d-roy-fake-back
<p>
J'ai fais ce fake back pour pouvoir tester et organiser mon front en local. J'ai mis 8 ressources dans <i>produits.json</i> mais rajoutez en autant que vous voulez, ça se présente comme ça :
</p>

```json
{
  "boissons": [
    {

    },
  ]
}
```
## Pour lancer le projet :

<br>

**Clone** dans le dossier de votre choix
<br>

> git clone
<br>

**Install** les dépendances du projets
<br>

> npm install --save-dev
<br>

**Lancer** le serveur faux back-end
<br>

> npm start
<br>

**Go to** l'adresse des ressources
<br>

app.js contient les urls pour récupérer chaque ressource : <br>

> http://localhost:3000/ <br>
http://localhost:3000/boisson <br>
http://localhost:3000/dessert <br>
http://localhost:3000/glace <br>
http://localhost:3000/viande <br>
http://localhost:3000/poisson <br>

<p>
getTimeExec() log dans la console le temps d'exécution des requetes. getTimeExec() entoure la fonction getProduits() pour connaitre le temps qu'elle met à s'executer, ça permet de savoir le temps de requete et le temps de traitement de la requete en front. C'est un test unitaire <br>
</p>

<br>

## Pour générer du faux contenu

<br>
<p>
Explorer le fichier <i>fake.js</i>, lire la doc de Faker et faire joujou avec l'objet faker deja initialiser avec :
</p>

```js
import { faker } from "@faker-js/faker";
const fakeObject = faker;
```
<p>
Faker contient tout le faux contenu révé pour remplir nos bases de données. Pour l'utiliser, il suffit de faire : <br>
</p>

>node fake.js

<p>
Dans le terminal s'affichera le résultat du console.log() de l'objet faker. <br>
Vous pouvez toujours le modifier pour qu'il corresponde à vos besoins. <br>
Voir même l'intégrer dans index.html. <br>
</p>