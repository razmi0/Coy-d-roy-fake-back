# Coy-d-roy-fake-back
<p>
J'ai fais ce fake back pour pouvoir tester et organiser mon front en local. J'ai mis que 2 ressources dans <i>produits.json</i> mais rajoutez en autant que vous voulez: 
</p>

```json
{
  "produits": [
    {
    //   PRODUITS
    },
  ],
  "users": [
    {
    //   USERS
    },
  ]
}
```
<br>

**Clone**
<br>

> git clone
<br>

**Install**
<br>

> npm install --save-dev
<br>

**Run**
<br>

> npm start
<br>

**Go to**
<br>

> http://localhost:3000/ <br>
http://localhost:3000/produits <br>
http://localhost:3000/users

<br>

**Pour générer du faux contenu**
<br>

>node fake.js

<br>
<p>
Explorer le fichier <i>fake.js</i>, lire la doc de Faker et faire joujou avec l'objet faker deja initialiser avec :

```js
import { faker } from "@faker-js/faker";
const fakeObject = faker;
```
Faker contient tout le faux contenu révé pour remplir nos bases de données.
</p>
