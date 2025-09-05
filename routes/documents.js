const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// Dokumente abrufen
router.get('/', async (req, res) => {
  const documents = await Document.find();
  res.json(documents);
});

// Dokument erstellen
router.post('/', async (req, res) => {
  const document = new Document(req.body);
  await document.save();
  res.status(201).json(document);
});

module.exports = router;