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
