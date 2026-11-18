/**
 * Class = propriétés (données) et les méthodes (les actions, ce que l'objet peut faire)
 */
export default class Vehicule {
    // pour initialiser l'objet (cette méthode est appelée lorsqu'on fera new Vehicule())
    constructor(marque = 'DS', constructeur = 'Renault', anneeContrustion = new Date('2020-01-01')) {
        // this : opérateur qui fait reférence à l'objet courant
        this.marque = marque
        this.constructeur = constructeur
        this.anneeContrustion = anneeContrustion
    }

    demarrer() {
        console.log(`La voiture ${this.marque} a demarré`)
    }
    
    arreter() {
        console.log(`La voiture ${this.marque} est arrêtée`)
    }

    nettoyer() {
        console.log(`Nettoyage de la voiture ${this.marque}`)
    }
}