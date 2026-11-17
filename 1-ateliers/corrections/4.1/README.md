# Correction atelier 4.1 : DOM

## Sources

<!-- AUTO-GENERATED -->

### 1-ateliers/corrections/4.1/

#### `1-ateliers/corrections/4.1/index.html`

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Atelier 4.1 : DOM</title>
    <script src="index.js" defer></script>
  </head>
  <body>
    <header>
      <h1>La liste des courses</h1>
    </header>
    <main>
      <section>
        <h2>Fruits</h2>
        <ul></ul>
      </section>
      <section>
        <h2>Légumes</h2>
        <div></div>
      </section>
      <section>
        <h2>Boissons</h2>
        <ol></ol>
      </section>
    </main>
    <footer></footer>
  </body>
</html>

```

#### `1-ateliers/corrections/4.1/index.js`

```javascript
// Sélectionnez et modifiez le contenu textuel ou html des éléments HTML suivants
const h1 = document.querySelector("h1");
const h2s = document.querySelectorAll("h2");
let title = document.title;
console.log("h1", h1, "toud les h2", h2s, "title", title);
title += ' ! '
// 3. Ajoutez des éléments dans les listes ul en utilisant le DOM
const ul = document.querySelector("ul");
h1.innerText = "Shopping List"
h2s.forEach(h2 => {
  /**
   * Prend le contenu d'avant et ajoute "chez le primeur"
   * h2.innerText += "j'ajoute la suite" idem que h2.innerText = `${h2.innerText} j'ajoute la suite`  
   */
  h2.innerText +=  " chez le primeur";
})
let i = 10;
while (i > 0) {
  let li = document.createElement("li");
  li.textContent = `fruit ${i}`;
  /**
   * oblige le navigateur à recalculer le DOM et les styles à chaque tour
   *    pour 10 tours l'impact est quasi-nul visuellement
   *    > 1000 ralentissement visible dans le rendu
   */
  ul.append(li);
  i--;
}
// 4. Ajoutez du html dans la div
document.querySelector("div").innerHTML =
  '<p><a href="https://fruits-legumes.org/liste-legumes/" target="_blank">Liste des 51 légumes</a></p>';
// 5. Stockez une liste d'élements dans un tableau puis ajoutez-les dans le ol
const ol = document.querySelector("ol");
const drinks = ["eau", "thé", "café", "chicorée"];
drinks.forEach((drink) => {
  ol.innerHTML += `<li>${drink}</li>`; // idem calcul du DOM et du style
});

```

<!-- END AUTO-GENERATED -->