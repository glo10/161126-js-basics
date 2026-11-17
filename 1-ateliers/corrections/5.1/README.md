
# Correction atelier 5.1 : la gestion des événements

## Sources

<!-- AUTO-GENERATED -->

### 1-ateliers/corrections/5.1/

#### `1-ateliers/corrections/5.1/src/index.html`

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>Atelier 5.1 : la gestion des événements</title>
    <script src="./index.js" type="module" defer></script>
  </head>
  <body>
    <main class="container">
      <div class="row">
        <section class="col-6">
          <h2 class="h2">Saisie</h2>
          <form>
            <div>
              <input
                type="text"
                placeholder="Nom"
                id="show-lastname"
                class="form-control mb-3"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Prénom"
                id="show-firstname"
                class="form-control mb-3"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Age"
                id="show-age"
                class="form-control mb-3"
              />
            </div>
            <div>
              <input
                id="technos"
                type="text"
                placeholder="Langage ou techno préférée"
                class="form-control mb-3"
              />
            </div>
            <div>
              <button class="btn btn-success">Ajouter une technologie</button>
            </div>
          </form>
        </section>

        <section class="col-6">
          <h2 class="h2">Affichage</h2>
          <h3 class="mx-1">Identité</h3>
          <p class="mx-2" id="v-show-lastname">Nom : <span>NC</span></p>
          <p class="mx-2" id="v-show-firstname">Prenom : <span>NC</span></p>
          <p class="mx-2" id="v-show-age">Age : <span>NC</span></p>
          <div id="v-technos">
            <h3 class="mx-1">Technos préférées</h3>
            <!-- Les technos à afficher ici -->
          </div>
        </section>
      </div>
    </main>
  </body>
</html>

```

#### `1-ateliers/corrections/5.1/src/index.js`

```javascript
import { onInput,  addTechno } from "./utils.js"; 
const inputs = document.querySelectorAll('input[type=text], input[type=number]')
const form = document.querySelector('form')
inputs.forEach(elt => onInput(elt))
addTechno(form)
```

#### `1-ateliers/corrections/5.1/src/utils.js`

```javascript

export function onInput(element) {
  element.addEventListener("input", onInputCallBack);
}

export function onInputCallBack(e) {
  const span = document.querySelector(`#v-${e.target.id} span`);
  let val = e.target.value;
  if (span) {
    if (e.target.id === `show-age`) {
      val = parseInt(val) >= 18 ? "Vous êtes majeur" : "Vous êtes mineur";
    }
    span.innerText = val;
  }
}

export function addTechno(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const techno = document.querySelector("#technos");
    let ul = document.querySelector("ul");
    if(!ul) {
      ul = document.createElement('ul')
      ul = document.querySelector('ul')
    }
    const li = document.createElement("li");
    document.querySelector('#v-technos').append(li)
    li.innerText = techno.value;
    techno.value = "";
    ul.append(li);
  });
}

```

<!-- END AUTO-GENERATED -->