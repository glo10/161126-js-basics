# Correction Atelier 3.1 : les objets du navigateur

## Sources

<!-- AUTO-GENERATED -->

### 1-ateliers/corrections/3.1

#### `1-ateliers/corrections/3.1/index.html`

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="index.js"></script>
    <script>
      newTab();
      myTimer();
    </script>
  </body>
</html>

```

#### `1-ateliers/corrections/3.1/index.js`

```javascript
function myTimer(start = 0, target = 30) {
  console.time("myTimer");
  const id = setInterval(function () {
    start++;
    console.log(`Écoulé : ${start} s`);

    if (start >= target) {
      clearTimeout(id);
      console.log(`Arrêté à ${target}`);
      console.timeEnd("myTimer");
    }
  }, 1000);
}

function newTab(width = 200, height = 100, timerOut = 20000) {
  console.time("newTab");
  console.log(`Résolution écran : ${screen.width} x ${screen.height} px`);
  const tab = window.open("https://www.w3schools.com/jsref/obj_window.asp", "_blank", `width=${width},height=${height}`);
  setTimeout(() => {
    if (tab && !tab.closed) {
      tab.close();
      console.log("Fenêtre fermée automatiquement.");
      console.timeEnd("newTab");
    }
  }, timerOut);
}

```

<!-- END AUTO-GENERATED -->