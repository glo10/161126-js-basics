# Correction atelier 8.1 : Requêtes avec un serveur

## Sources

<!-- AUTO-GENERATED -->

### 1-ateliers/corrections/8.1/

#### `1-ateliers/corrections/8.1/src/index.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atelier 8.1 : requêtes avec un serveur</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <main class="container">
        <div class="row"></div>
    </main>
    <script src="js/index.js"></script>
</body>
</html>
```

#### `1-ateliers/corrections/8.1/src/js/index.js`

```javascript
const templatePromise = fetch("user-details.html")
  .then((res) => res.text())
  .catch((error) => console.error("error html template", error));

const usersPromise = fetch("https://api.github.com/users")
  .then((res) => res.json())
  .catch((error) => console.error("error users github", error));

function display(template, users) {
  const div = document.querySelector(".row");
  users.forEach((user) => {
    let templateReplaced = template
      .replace("{{AVATAR}}", user.avatar_url)
      .replace("{{LOGIN}}", user.login)
      .replace("{{TYPE}}", user.type)
      .replace("{{ID}}", user.id)
      .replace("{{ADMIN}}", user.site_admin === true ? "Oui" : "Non")
      .replace("{{LIEN_GITHUB}}", user.url)
      .replace("{{LINK_REPOSITORIES}}", user.repos_url);
    div.insertAdjacentHTML("afterbegin", templateReplaced);
  });
}

/**
 * Promise.all pour lancer les 2 requêtes asynchrone en parallèle
 * prend en paramètre un tableau des promesses (asynchrones)
 * retourne un tableau de résultats dans l'ordre du tableau des promesses
 */
Promise.all([templatePromise, usersPromise]).then((results) =>
  display(results[0], results[1]),
);

```

#### `1-ateliers/corrections/8.1/src/user-details.html`

```html
<div class="card col-3">
    <img src="{{AVATAR}}" class="card-img-top" alt="user avatar" />
    <div class="card-body">
        <h5 class="card-title">{{LOGIN}}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Identifiant : {{ID}}</li>
        <li class="list-group-item">Type : {{TYPE}}</li>
        <li class="list-group-item">Administrateur GitHub : {{ADMIN}}</li>
    </ul>
    <div class="card-body">
        <a href="{{LIEN_GITHUB}}" class="card-link" target="_blank">GitHub</a>
        <a href="{{LIEN_REPOSITORIES}}" class="card-link" target="_blank">Dépôts</a>
    </div>
</div>
```

<!-- END AUTO-GENERATED -->