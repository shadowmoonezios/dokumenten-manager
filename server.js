const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database successfully connected'))
  .catch(err => console.error('Error connecting to the database:', err.message));

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Document Manager API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});