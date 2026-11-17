function geoLocationUser() {
  if (!navigator.geolocation) {
    console.error("Géolocalisation n'est pas supporté par le navigateur");
    return;
  }
  let id;
  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };
  // Obtenir la position actuelle (latitude, longitude, précision).
  navigator.geolocation.getCurrentPosition(
    (position) =>
      console.log(
        "Lat",
        position.coords.latitude,
        "Lng",
        position.coords.longitude,
      ),
    (error) => console.error("[KO]", error),
    options,
  );

  // Suivre les déplacements en temps-réel
  id = navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      if (latitude === 48.8893946 && longitude === 2.2428192) {
        console.log("Vous êtes arrivé !");
        navigator.geolocation.clearWatch(id); // Arrêt du suivi
      }
    },
    (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error("Accès refusée");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("Localisation indisponible");
          break;
        case error.TIMEOUT:
          console.error("Temps écoulé");
          break;
        case error.UNKNOWN_ERROR:
          console.error("Erreur inconnu");
          break;
      }
    },
    options,
  );
}

function openWindow() {
  const w = 200;
  const h = 150;
  const newPage = window.open(
    "https://www.ib-formation.fr/formations/developpement-web-et-mobilite/javascript-fondamentaux",
    "_blank",
    `width=${w},height=${h}`,
  );
  // Coordonnées pour centrer la fenêtre
  const centerH = window.screen.width / 2 - w / 2;
  const centerV = window.screen.height / 2 - h / 2;
  if (newPage) {
    newPage.focus();
    newPage.moveTo(centerH, centerV);
    // fermeture au bout de 10 secondes
    setTimeout(function () {
      newPage.close();
    }, 10 * 1000);
  }
}
