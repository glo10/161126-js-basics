export function handleInputsAndSelects() {
  // Tous les input sauf URL + tous les selects
  const items = document.querySelectorAll("input:not([type=url]), select");
  if (items === null) {
    return;
  }
  items.forEach((item) => {
    // boucle sur chaque élément, idéalement mettre en place la délégation d'événements  au lieu de boucler
    item.addEventListener("change", (e) => {
      // ajout event change => au changement d'une valeur
      let value = e.target.value;
      const parts = item.id.split("-"); // éclater l'ID
      const el = parts[0];
      let prop = parts[1];
      if (parts.length === 3) {
        prop = `${parts[1]}-${parts[2]}`;
      }
      // regex à la place d'une vérification sur le type number car l'unité hexadecimal (nombres avec la base 16) pour les couleurs est un number
      if (/^[0-9]+$/.test(value)) {
        value += "px";
      }
      document.querySelector(el)?.setAttribute("style", `${prop}: ${value}`);
    });
  });
}

export function handleTextarea() {
  document.querySelector("textarea")?.addEventListener("keyup", (e) => {
    document.querySelector("article")?.innerHTML = e.target.value;
  });
}

export function handleImage() {
  document.querySelector("input[type=url]")?.addEventListener("blur", (e) => {
    document.querySelector("img")?.src = e.target.value;
  });
  document.querySelector("img")?.addEventListener("mouseenter", imgEnter);
  document.querySelector("img")?.addEventListener("mouseleave", imgLeave);
}

function imgLeave() {
  const p = document.querySelector("header p");
  p?.style.transition = "opacity 3s";
  p?.style.opacity = 0;
}

function imgEnter() {
  this.style.cursor = "pointer";
  const header = document.querySelector("header");
  let msgEl = header?.querySelector("header p");
  if (msgEl === null) {
    msgEl = document.createElement("p");
    header.append(msgEl);
  }
  msgEl.style.opacity = 1;
  msgEl.classList.add("alert", "alert-info", "text-center");
  msgEl.innerHTML = "Survol de l'image";
}
