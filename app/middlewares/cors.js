const cors = (req, res, next) => {
  // On n'autorise que les domaines souhaités à envoyer des requêtes.
  const allowedOrigins = ["http://localhost:3000", "https://oclock-memory.netlify.app"]
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(200).end();
  } else {
    next();
  }
};

export default cors;
