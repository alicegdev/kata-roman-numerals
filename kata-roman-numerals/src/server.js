require("@babel/register");
const chiffresArabes = require("./client/utils/chiffresArabes");
const chiffresRomains = require("./client/utils/chiffresRomains");

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "../../public/index.html"));
});

app.post("/chiffresRomains", (req, res) => {
  const { chiffreArabe } = req.body;
  const chiffreRomain = chiffresRomains(chiffreArabe);
  res.json({ chiffreRomain });
});

app.post("/chiffresArabes", (req, res) => {
  const { chiffreRomain } = req.body;
  const chiffreArabe = chiffresArabes(chiffreRomain);
  res.json({ chiffreArabe });
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
