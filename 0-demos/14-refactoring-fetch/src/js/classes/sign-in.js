import Auth from "./auth.js";

export default class SignIn extends Auth {
  constructor(inputs = [], content = "", submit = "input[type=submit]") {
    super(inputs, content, submit); // appel le constructeur de la classe Auth
    this.content = content;
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
