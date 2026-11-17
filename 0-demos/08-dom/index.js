const div = document.querySelector("#app");
console.log("div", div);
// Vérifier que l'élément existe
if (div) {
  const ul = document.createElement("ul");
  /**
   * Rappels de While
   * Idéalement lorsqu'on ne connait le nombre d'itération à l'avance
   * La condition est verifié avant d'entrée dans la boucle
   * à la différence de son voisin do while où la condition est vérifié à la fin
   */
  // initialisation du compteur
  let i = 0
  while(i < 10){ // condition dans les parenthèses
    let li = document.createElement("li");
    li.innerHTML = `<span>Item ${i + 1}</span>`;
    ul.append(li);
    // le compteur doit évoluer pour quitter boucle (quand la condition deviendra fausse) sinon boucle infinie
    i++; // i++ id i = i+1 (incrémentation)
}
  console.log("ul", ul);
  div.append(ul);
  // Création d'un h1
  const h1 = document.createElement("h1");
  console.log("h1", h1);
  // Ajouter du contenu textuel à h1
  h1.textContent = "Salut depuis le JS !";
  // Ajouter le h1 au DOM
  div.prepend(h1);
}
