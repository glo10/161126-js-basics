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
      .replace("{{LIEN_REPOSITORIES}}", user.repos_url);
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
