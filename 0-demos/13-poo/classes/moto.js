import Vehicule from "./vehicule.js";

export default class Moto extends Vehicule {
    constructor(marque, constructeur, anneeConstruction, cylindre = '4' ) {
       super(marque, constructeur, anneeConstruction) // super fait reférence au constructeur du parent
        this.cylindre = cylindre
    }
    
    demarrer() {
        console.log("j'écrase le comportement du parent et j'implémente ma propre méthode pour démarrer")
    }

    garer() {
        console.log(`je gare la moto ${this.marque} de l'année ${this.anneeContrustion.getFullYear()}`)
    }
}