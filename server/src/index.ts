import express from "express";

const PORT = 9000;

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Working"
  })
})

app.listen(PORT, () => {
  console.log(`Server's runnnig! URL: http://localhost:${PORT}/`)
});