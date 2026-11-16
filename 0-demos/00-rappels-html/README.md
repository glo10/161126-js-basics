# Demo rappels HTML

## Raccourcis HTML

- Pour générer la structure de base : tapez `html:5` + la touche entrée
- Pour avoir la balise ouvrante et fermante : tapez juste le nom de la balise + touche entrée
- Pour créer un contenu dynamiquement avec des combinaisons par exemple ici un menu avec 5 liens, tapez `ul>li*5>a` + touche entrée

## Lancement dus erveur web local avec l'extension Live Server

- En bas à droite, cliquez sur le bouton "Go Live" pour le lancer (pour le fermer, cliquez sur le bouton "Port:5500")
- Ou via la touche F1 puis tapez dans le champ de recherche "Live Server" et cliquez sur l'option apparu dans les réponses

## Formater le code HTML, CSS ou JS avec l'extension Prettier - Code

- Via le raccourci SHIFT + ALT + F
- Ou la touche F1 et vous tapez dans le champ de recherche "Format document" et cliquez sur l'option apparu

## Balises semantiques

- header : en-tête, généralement pour le menu, le titre principal, etc.
- nav : pour définir le menu de navigation
- main : pour séparer le contenu principal du reste
- footer : pour le bas de page

## Lien avec le CSS

- Dans le head avec la balise link
```html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo rappels HTML</title>
    <link rel="stylesheet" href="./css/style.css" />
  </head>
```

## Lien avec le JS

- Plusieurs possibilitiés, cf. le cours

```html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo rappels HTML</title>
    <link rel="stylesheet" href="./css/style.css" />
    <script src="index.js"></script>
  </head>
```

```html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo rappels HTML</title>
    <link rel="stylesheet" href="./css/style.css" />
    <script src="index.js" defer></script>
  </head>
```

```html
<body>
    <!-- Votre contenu-->
    <!-- JS juste avant la fermeture de </body> -->
    <script src="index.js"></script>
</body>
```