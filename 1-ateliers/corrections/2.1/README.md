# Correction atelier 2.1 : JavaScript, le coeur du langage

```javascript
let x = 10;
var y = 20;

if (true) {
  let x = 30;
  var y = 40;
  console.log(x); // A
  console.log(y); // B
}

console.log(x); // C
console.log(y); // D

```

**Valeurs attendues :**

* A : `30` (le `let` crée une variable locale au bloc `if`)
* B : `40` (le `var` a une portée fonctionnelle/globale et écrase le `y` externe)
* C : `10` (le `let` externe n'a pas été modifié par le bloc)
* D : `40` (le `y` global a bien été modifié à l'intérieur du bloc)

---

---

```javascript
const config = { mode : « debug », retries : 3 };

function updateConfig() {
  const config = { mode : « production », retries : 5 };
  config.retries = 10;
  console.log(config.retries); // A
}

updateConfig();
console.log(config.mode); // B
console.log(config.retries); // C

```

**Valeurs attendues :**

* A : `10` (modification de la propriété de l'objet déclaré par `const` dans la fonction)
* B : `"debug"` (le `const` de la fonction a une portée de bloc et ne touche pas l'objet global)
* C : `3` (l'objet initial n'a pas été muté)

---

---

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log(j);
  }, 20);
}

```

**Valeurs attendues :**

* Première boucle (`var`) : affiche `3`, `3`, `3` (la variable `i` est unique et partagée, sa valeur finale après la boucle est 3).
* Deuxième boucle (`let`) : affiche `0`, `1`, `2` (le `let` crée une nouvelle liaison pour chaque itération de la boucle)