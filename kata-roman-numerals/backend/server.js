const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Servir les fichiers statiques depuis le répertoire "build"
app.use(express.static(path.join(__dirname, '../build')));

// Servir le fichier index.html pour toutes les autres routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
