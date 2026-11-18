import SignIn from "./classes/sign-in.js";
import SignUp from "./classes/sign-up.js";

const container = document.querySelector("main#container");

// Affiche par défaut la page de connexion
const signIn = new SignIn();
signIn
  .fetchTemplate("html/sign-in.html")
  .then(() => {
    container.innerHTML = signIn.content;
    signIn.insightEvents();
  })
  .catch((error) => {
    console.log("error au niveau de index.js", error);
  });

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
