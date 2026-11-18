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
   * show (on focus)/remove (on blur) help message
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
       * var parce qu'on veut pour les variables ci-dessous 
       *  une portée sur toute la fonction pas que dans la boucle
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
      /**
       * const rgx = new RegExp(this.inputs[i].regex)
       * if (!rgx.test(inputElt.value)) {
       */
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

  async fetchTemplate(url) {
    // avec return sur fetch, on va retourner une Promesse et donc pour exploiter
    //  le contenu, il faudra également utiliser then() et catch()
    return fetch(url) // ça vaudra plus tard ../../html/sign-in.html par exemple
    // tout se déroule correctement (pas d'erreur), on peut exploiter la ressource dans cette fonction
    // à ce stade l'info est là mais sous forme de flux et donc pas exploitable 
    .then(data => {
      console.log('data dans le premier then', data)
      return data.text() 
    }) // avec data.text() notre contenu HTML est exploitable désormais
    .then(htmlContent => {
      console.log('recup html', htmlContent)
      this.content = htmlContent
    })
    .catch(error => { // en cas d'erreur, on l'intercepte et on peut le traiter (proposer une solution alternative)
      console.log('erreur au niveau de Auth', error)
    })
  }
}
