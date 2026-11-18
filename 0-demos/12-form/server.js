import { createServer } from "node:http";
import * as qr from "node:querystring";
const PORT = 3000;

createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";
    // Les données arrivent par morceaux (chunks)
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    // Une fois que toutes les données ont été reçues
    req.on("end", () => {
      // Parser les données reçues (format URL-encoded)
      const data = qr.parse(body);
      console.log("Données reçues du formulaire :", data);
      // Répondre à l'utilisateur avec JSON (on aurait répondre avec du HTML)
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(
        JSON.stringify({
          success: true,
          message: "merci, on a reçu vos données",
          data
        }),
      );
    });
  }
}).listen(PORT, () => {
  console.log(`App on http://localhost:${PORT}`);
});
