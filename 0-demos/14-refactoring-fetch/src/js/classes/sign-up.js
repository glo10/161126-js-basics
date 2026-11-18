import Auth from "./auth.js";
export default class SignUp extends Auth {
  constructor(inputs = [], content = "", submit = "input[type=submit]") {
    super(inputs, content, submit);
    this.content = content
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
