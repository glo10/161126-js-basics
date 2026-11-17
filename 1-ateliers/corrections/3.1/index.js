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
