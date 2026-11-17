
/**
 * add Listener on input HTML ELEMENT
 * @param {HTMLInputElement} element 
 */
export function onInput(element) {
  element.addEventListener("input", onInputCallBack);
}

/**
 * trigger after event input
 * @param {EventTarget} e 
 */
function onInputCallBack(e) {
  const span = document.querySelector(`#v-${e.target.id} span`);
  let val = e.target.value;
  if (span) {
    if (e.target.id === `show-age`) {
      val = parseInt(val) >= 18 ? "Vous êtes majeur" : "Vous êtes mineur";
    }
    span.innerText = val;
  }
}

/**
 * Add 
 * @param {HTMLFormElement} form 
 */
export function addTechno(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const techno = document.querySelector("#technos");
    let ul = document.querySelector("ul");
    if(!ul) {
      ul = document.createElement('ul')
      ul = document.querySelector('ul')
    }
    const li = document.createElement("li");
    document.querySelector('#v-technos').append(li)
    li.innerText = techno.value;
    techno.value = "";
    ul.append(li);
  });
}
