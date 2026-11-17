## Methodo DOM

1. Toujours commencer par cibler ou sélectionner un élément à l'aide du DOM avec la méthode document.querySelector()
```javascript
const container = document.querySelector('main')
```
2. Faire vos opérations (création, modification, suppression, etc.) sur un ou plusieurs éléments à l'aide des méthodes element.createElement(), element.append(), element.innerHTML, element.remove()

- Uniquement dans le cadre de la création, n'oubliez pas d'ajouter l'élément dans le DOM sinon il existe mais n'est pas visible sur la page element.append(), element.prepend(), etc.

3. Gestion des événements à suivre...