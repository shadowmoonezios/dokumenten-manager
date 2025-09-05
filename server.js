const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

// Umgebungsvariablen laden
dotenv.config();

// Middleware
app.use(express.json());

// Datenbankverbindung
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Datenbank verbunden'))
  .catch(err => console.error('Datenbank Verbindung fehlgeschlagen:', err));

// Beispielroute
app.get('/', (req, res) => {
  res.send('Willkommen im Dokumenten Manager API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});