const div = document.querySelector("#app");
console.log("div", div);
// Vérifier que l'élément existe
if (div) {
  const ul = document.createElement("ul");
  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.innerHTML = `<span>Item ${i + 1}</span>`;
    ul.append(li);
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
