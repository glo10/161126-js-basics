import {
  handleInputsAndSelects,
  handleTextarea,
  handleImage,
} from "./utils.js";
window.addEventListener("load", () => {
  // Traitement des inputs et selects
  handleInputsAndSelects();
  // Traitement du textarea
  handleTextarea();
  // Traitement de l'image
  handleImage();
});
