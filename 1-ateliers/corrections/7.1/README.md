
# Correction atelier 7.1 :  les styles CSS

## Sources

<!-- AUTO-GENERATED -->

### 1-ateliers/corrections/7.1/

#### `1-ateliers/corrections/7.1/src/index.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>Atelier 7.1 : les styles CSS</title>
</head>
<body class="container">
  <main class="row">
    <header>
      <h1 class="text-center">Manipulation du DOM avec le CSS</h1>
    </header>
    <section class="col-6">
      <h2>Contenu principal</h2>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium fuga, enim laudantium quae eos velit ut autem rem quasi adipisci non iure voluptas labore quisquam ad dolorum unde. Cum.
      </article>
      <div>
        <img class="img-fluid" src="https://images.unsplash.com/photo-1682685796063-d2604827f7b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="saudi arabia">
      </div>
    </section>
    <section class="col-6">
      <h2>Les actions</h2>
      <div class="form-group row">
        <label for="body-background" class="form-label col-9">Changer la couleur de fond</label>
        <input type="color" id="body-background" class="form-control w-25">
      </div>
      <div class="form-group row">
        <label for="h2-color" class="form-label col-9">Changer la couleur du titre</label>
        <input type="color" id="h2-color" class="form-control w-25">
      </div>
      <div class="form-group row">
        <label for="article-color" class="form-label col-9">Changer la couleur du texte</label>
        <input type="color" id="article-color" class="form-control w-25">
      </div>
      <div class="form-group">
        <label for="article" class="form-label">Saisir le contenu</label>
        <textarea id="article" class="form-control"></textarea>
      </div>
      <div class="form-group row my-2">
        <label for="h2-font-size" class="form-label col-6">Taille du titre</label>
        <input type="number" min="36" max="50" id="h2-font-size" class="form-control w-25">
      </div>
      <div class="form-group row">
        <label for="article-font-size" class="form-label col-6">Taille du texte</label>
        <input type="number" min="12" max="24" id="article-font-size" class="form-control w-25">
      </div>
      <div class="form-group row">
        <label for="h2-text-align" class="form-label col-6">Alignement du titre</label>
        <select id="h2-text-align" class="form-select w-25">
          <option value="left">Gauche</option>
          <option value="center">Centré</option>
          <option value="right">Droite</option>
          <option value="justify">Justifié</option>
        </select>
      </div>
      <div class="form-group row">
        <label for="article-text-align" class="form-label col-6">Alignement du texte</label>
        <select id="article-text-align" class="form-select w-25">
          <option value="left">Gauche</option>
          <option value="center">Centré</option>
          <option value="right">Droite</option>
          <option value="justify">Justifié</option>
        </select>
      </div>
      <div class="form-group">
        <label for="img" class="form-label">Changer la source de l'image en mettant une URL vers une image distante</label>
        <input type="url" id="img" class="form-control" placeholder="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png">
      </div>
    </section>
    <footer>
      Photo de <a href="https://unsplash.com/fr/@neom?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">NEOM</a> sur <a href="https://unsplash.com/fr/photos/le-soleil-se-couche-sur-un-paysage-desertique-WpOMM4uE-F8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    </footer>
  </main>
  <script src="js/index.js" type="module"></script>
</body>
</html>
```

#### `1-ateliers/corrections/7.1/src/js/index.js`

```javascript
import {
  handleInputsAndSelects,
  handleTextarea,
  handleImage,
} from "./utils.js";
window.addEventListener("load", () => {
  // Traitement des inputs et selects
  handleInputsAndSelects();
  // Traitement du textarea
  handleTextarea();
  // Traitement de l'image
  handleImage();
});

```

#### `1-ateliers/corrections/7.1/src/js/utils.js`

```javascript
export function handleInputsAndSelects() {
  // Tous les input sauf URL + tous les selects
  const items = document.querySelectorAll("input:not([type=url]), select");
  if (items === null) {
    return;
  }
  items.forEach((item) => {
    // boucle sur chaque élément, idéalement mettre en place la délégation d'événements  au lieu de boucler
    item.addEventListener("change", (e) => {
      // ajout event change => au changement d'une valeur
      let value = e.target.value;
      const parts = item.id.split("-"); // éclater l'ID
      const el = parts[0];
      let prop = parts[1];
      if (parts.length === 3) {
        prop = `${parts[1]}-${parts[2]}`;
      }
      // regex à la place d'une vérification sur le type number car l'unité hexadecimal (nombres avec la base 16) pour les couleurs est un number
      if (/^[0-9]+$/.test(value)) {
        value += "px";
      }
      document.querySelector(el)?.setAttribute("style", `${prop}: ${value}`);
    });
  });
}

export function handleTextarea() {
  document.querySelector("textarea")?.addEventListener("keyup", (e) => {
    document.querySelector("article")?.innerHTML = e.target.value;
  });
}

export function handleImage() {
  document.querySelector("input[type=url]")?.addEventListener("blur", (e) => {
    document.querySelector("img")?.src = e.target.value;
  });
  document.querySelector("img")?.addEventListener("mouseenter", imgEnter);
  document.querySelector("img")?.addEventListener("mouseleave", imgLeave);
}

function imgLeave() {
  const p = document.querySelector("header p");
  p?.style.transition = "opacity 3s";
  p?.style.opacity = 0;
}

function imgEnter() {
  this.style.cursor = "pointer";
  const header = document.querySelector("header");
  let msgEl = header?.querySelector("header p");
  if (msgEl === null) {
    msgEl = document.createElement("p");
    header.append(msgEl);
  }
  msgEl.style.opacity = 1;
  msgEl.classList.add("alert", "alert-info", "text-center");
  msgEl.innerHTML = "Survol de l'image";
}

```

<!-- END AUTO-GENERATED -->