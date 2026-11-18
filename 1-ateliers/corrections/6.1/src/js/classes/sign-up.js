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
