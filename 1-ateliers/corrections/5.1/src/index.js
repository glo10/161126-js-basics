import { onInput,  addTechno } from "./utils.js"; 
const inputs = document.querySelectorAll('input[type=text], input[type=number]')
const form = document.querySelector('form')
inputs.forEach(elt => onInput(elt))
addTechno(form)