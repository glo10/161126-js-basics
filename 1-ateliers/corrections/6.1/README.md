# Correction atelier 6 : les formulaires

## Sources

<!-- AUTO-GENERATED -->

### 1-ateliers/corrections/6.1/

#### `1-ateliers/corrections/6.1/src/css/main.css`

```css
/**
* FROM Bootstrap 
* https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css
**/
body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

*,
::after,
::before {
  box-sizing: border-box;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.my-3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

main {
  display: flex;
  flex-flow: row-reverse wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 3rem;
  position: relative;
  top: 48px;
}

header {
  order: -1;
  align-self: last baseline;
  text-align: right;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  width: 18rem;
}

header-weather {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: cadetblue;
  top: 0;
  left: 0;
  right: 0;
}

current-news,
current-news-store {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-basis: 100%;
}

current-news + p,
current-news-store + p {
  font-size: 1.5rem;
}

current-news h2,
current-news-store h2
{
  flex-basis: 100%;
  text-align: center;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.card-body {
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
}

.text-center {
  text-align: center;
  font-size: 1.1rem;
  text-transform: capitalize;
}

header-weather img {
  width: 32px;
  cursor: pointer;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-title {
  margin-bottom: var(--bs-card-title-spacer-y);
}

.h5,
h5 {
  font-size: 1.25rem;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.form-control {
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.form-control,
.form-select {
  width: 40.5rem;
}

.form-help {
  height: 1rem;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #6c757d;
}

select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.align-right {
  text-align: right;
}

.align-right input {
  width: 25%;
}

button,
input,
select {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.btn:hover {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

.btn {
  --bs-btn-padding-x: 0.75rem;
  --bs-btn-padding-y: 0.375rem;
  --bs-btn-font-family: ;
  --bs-btn-font-size: 1rem;
  --bs-btn-font-weight: 400;
  --bs-btn-line-height: 1.5;
  --bs-btn-color: #212529;
  --bs-btn-bg: transparent;
  --bs-btn-border-width: 1px;
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: 0.375rem;
  --bs-btn-hover-border-color: transparent;
  --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 1px rgba(0, 0, 0, 0.075);
  --bs-btn-disabled-opacity: 0.65;
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem
    rgba(var(--bs-btn-focus-shadow-rgb), 0.5);
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  color: var(--bs-btn-color);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background-color: var(--bs-btn-bg);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-info {
  --bs-btn-color: #fff;
  --bs-btn-bg: #0dcaf0;
  --bs-btn-border-color: #0dcaf0;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #31d2f2;
  --bs-btn-hover-border-color: #25cff2;
  --bs-btn-focus-shadow-rgb: 11, 172, 204;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #3dd5f3;
  --bs-btn-active-border-color: #25cff2;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0dcaf0;
  --bs-btn-disabled-border-color: #0dcaf0;
}

.btn-success {
  --bs-btn-color: #fff;
  --bs-btn-bg: #198754;
  --bs-btn-border-color: #198754;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #157347;
  --bs-btn-hover-border-color: #146c43;
  --bs-btn-focus-shadow-rgb: 60, 153, 110;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #146c43;
  --bs-btn-active-border-color: #13653f;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #198754;
  --bs-btn-disabled-border-color: #198754;
}

.alert.my-3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.alert {
  --bs-alert-bg: transparent;
  --bs-alert-padding-x: 1rem;
  --bs-alert-padding-y: 1rem;
  --bs-alert-margin-bottom: 1rem;
  --bs-alert-color: inherit;
  --bs-alert-border-color: transparent;
  --bs-alert-border: 1px solid var(--bs-alert-border-color);
  --bs-alert-border-radius: 0.375rem;
  position: relative;
  color: var(--bs-alert-color);
  background-color: var(--bs-alert-bg);
  border: var(--bs-alert-border);
  border-radius: var(--bs-alert-border-radius);
  margin: 0;
  padding: 0.5rem;
}

.alert-danger {
  --bs-alert-color: #842029;
  --bs-alert-bg: #f8d7da;
  --bs-alert-border-color: #f5c2c7;
  text-transform: lowercase;
}

.alert-info {
  --bs-alert-color: #055160;
  --bs-alert-bg: #cff4fc;
  --bs-alert-border-color: #b6effb;
  display: inline-block;
  width: 40.5rem;
  text-align: center;
}

.card-body > div {
  text-align: end;
}

article footer {
  text-align: end;
}

article .open-modal {
  width: 60px;
  height: 60px;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 200px;
  height: 200px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: 50px auto;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

```

#### `1-ateliers/corrections/6.1/src/index.html`

```html
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Authentification/Inscription</title>
  <link rel="stylesheet" href="css/main.css">
</head>

<body>
  <main id="container">
  </main>
  <script type="module" src="js/index.js"></script>
</body>

</html>
```

#### `1-ateliers/corrections/6.1/src/js/classes/auth.js`

```javascript
// Mise en commun de toutes les données et méthodes communes à la connexion et inscription
export default class Auth {
  constructor(inputs = [], content = "", submit = "input[type=submit]") {
    this.inputs = inputs;
    this.content = content;
    this.submit = submit;
  }

  insightEvents() {
    this.onToggleHelpMessage();
    this.onSubmit();
  }

  /**
   * show (on focus)/remove (on blur) help messag
   */
  onToggleHelpMessage() {
    const size = this.inputs.length;
    for (let i = 0; i < size; i++) {
      const field = this.inputs[i];
      const inputElt = document.querySelector(field.selector);
      if (inputElt) {
        // On gère à la fois le focus et la perte du focus
        ["focus", "blur"].forEach((event) => {
          inputElt.addEventListener(event, (e) => {
            const helper = event === "focus" ? field.helper : "";
            // Navigation dans le DOM pour récupérer le paragraph qui précède l'input
            e.target.previousElementSibling.innerHTML = helper;
          });
        });
      }
    }
  }

  onSubmit() {
    const elt = document.querySelector(this.submit);
    elt.addEventListener("click", (e) => this.checkValues(e));
  }

  checkValues(e) {
    e.preventDefault();
    const size = this.inputs.length;
    for (let i = 0; i < size; i++) {
      /**
       * var parce qu'on veut accéder également en dehors de la boucle
       */
      var alertUserElt = e.target.parentElement.querySelector(
        ".alert.alert-danger",
      );
      var isEmpty = false;
      const inputElt = document.querySelector(this.inputs[i].selector);
      console.log("input", inputElt);
      if (alertUserElt === null) {
        const p = document.createElement("p");
        p.classList.add("alert", "alert-danger", "my-3", "text-center");
        p.textContent = `${inputElt.name} ${this.inputs[i].format}`;
        e.target.insertAdjacentHTML("beforebegin", p.outerHTML);
      } else {
        e.target.previousElementSibling.innerHTML = `${inputElt.name} ${this.inputs[i].format}`;
      }
      // Dès qu'il y a un champ vide on quitte la boucle pour afficher l'erreur
      if (inputElt.value.length === 0) {
        isEmpty = true;
        break;
      }
    }
    // Pas de champ vide, ni d'alerte
    if (!isEmpty && alertUserElt) {
      alertUserElt.remove();
    }
  }
}

```

#### `1-ateliers/corrections/6.1/src/js/classes/sign-in.js`

```javascript
import Auth from "./auth.js";

export default class SignIn extends Auth {
  constructor(inputs = [], content = "", submit = "input[type=submit]") {
    super(inputs, content, submit); // appel le constructeur de la classe Auth
    this.content = `
    <div>
      <h1>Connexion</h1>
      <form autocomplete="off" method="post">
        <div class="my-3">
          <p class="form-help"></p>
          <input type="email" class="form-control" name="email" placeholder="email">
        </div>
        <div class="my-3">
          <p class="form-help"></p>
          <input type="password" class="form-control" name="password" placeholder="mot de passe">
        </div>
        <div class="my-3 align-right">
          <input type="submit" value="Valider" class="btn btn-success me-5">
          <button class="btn btn-info">Inscription</button>
        </div>
      </form>
    </div>
    `;
    this.inputs = [
      {
        selector: "input[type=email]",
        helper: "Saisissez votre adresse e-mail !",
        format: "Exemple john@doe.fr, extension maximum 10 caractères",
      },
      {
        selector: "input[type=password]",
        helper: "Saisissez votre mot de passe !",
        format:
          "Entre 15 et 36 caractères (miniscule, majuscule, chiffres et caractères spéciaux &amp; $ + - * / # ~ € % ^ ! - _\`)",
      },
    ];
  }
}

```

#### `1-ateliers/corrections/6.1/src/js/classes/sign-up.js`

```javascript
import Auth from "./auth.js";
export default class SignUp extends Auth {
  constructor(inputs = [], content = "", submit = "input[type=submit]") {
    super(inputs, content, submit);
    this.content = `
    <div>
      <h1>Inscription</h1>
      <form autocomplete="off" method="post">
        <div class="my-3">
          <p class="form-help"></p>
          <input
            type="text"
            class="form-control"
            name="lastname"
            placeholder="Nom"
          >
        </div>
        <div class="my-3">
          <p class="form-help"></p>
          <input
            type="text"
            class="form-control"
            name="firstname"
            placeholder="Prénom"
          >
        </div>
        <div class="my-3">
          <p class="form-help"></p>
          <input
            type="email"
            class="form-control"
            name="email"
            placeholder="email"
          >
        </div>
        <div class="my-3">
          <p class="form-help"></p>
          <input
            type="password"
            class="form-control"
            name="password"
            placeholder="Confirmer le mot de passe"
          >
        </div>
        <div class="my-3">
          <p class="form-help"></p>
          <input
            type="password"
            class="form-control"
            name="confirm"
            placeholder="Confirmer le mot de passe"
          >
        </div>
        <div class="my-3">
          <p class="form-help"></p>
          <input
            type="number"
            class="form-control"
            name="age"
            placeholder="Age"
          >
        </div>
        <div class="my-3 align-right">
          <input
            type="submit"
            value="Valider"
            class="btn btn-success me-5"
            data-endpoint="signup"
          >
          <button class="btn btn-info">Connexion</button>
        </div>
      </form>
    </div>
    `;
    this.inputs = [
      {
        selector: "[name=lastname]",
        helper: "Saisissez votre nom !",
        format: "Au moins 2 caractères, aucun chiffre",
      },
      {
        selector: "[name=firstname]",
        helper: "Saisissez votre prénom !",
        format: "Au moins 2 caractères, aucun chiffre",
      },
      {
        selector: "input[type=email]",
        helper: "Saisissez votre adresse e-mail !",
        format: "Exemple john@doe.fr, extension maximum 10 caractères",
      },
      {
        selector: "[name=password]",
        helper: "Saisissez votre mot de passe !",
        format:
          "Entre 15 et 36 caractères (miniscule, majuscule, chiffres et caractères spéciaux &amp; $ + - * / # ~ € % ^ ! - _\`)",
      },
      {
        selector: "[name=confirm]",
        helper: "Confirmez votre mot de passe !",
        format: "Identique au mot de passe saisi précédemment",
      },
      {
        selector: "[name=age]",
        helper: "Saisissez votre age !",
        format: "Age compris entre 14 et 130 ans",
      },
    ];
  }
}

```

#### `1-ateliers/corrections/6.1/src/js/index.js`

```javascript
import SignIn from "./classes/sign-in.js";
import SignUp from "./classes/sign-up.js";

const container = document.querySelector("main#container");

// Affiche par défaut la page de connexion
const signIn = new SignIn();
container.innerHTML = signIn.content;
signIn.insightEvents();

// on délègue l'événement click au parent car c'est le seul stable qui ne risque pas d'être modifié
container.addEventListener("click", (e) => {
  // On vérifie si l'élément cliqué (ou l'un de ses parents proches) est le bouton "connexion" ou "inscription"
  const switchBtn = e.target.closest(".btn.btn-info");
  
  if (switchBtn) {
    e.preventDefault();
    
    const currentH1 = container.querySelector("h1")?.textContent;

    if (currentH1.toLowerCase() === "connexion") {
      // On bascule vers Inscription
      const signUp = new SignUp();
      container.innerHTML = signUp.content;
      signUp.insightEvents();
    } else {
      // Sinon, on bascule vers Connexion
      const signIn = new SignIn();
      container.innerHTML = signIn.content;
      signIn.insightEvents();
    }
  }
});
```

<!-- END AUTO-GENERATED -->