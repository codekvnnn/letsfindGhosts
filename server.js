//backend

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ghostSightingDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema
const sightingSchema = new mongoose.Schema({
  title: String,
  story: String,
  location: String,
  date: Date
});

// Create a model
const Sighting = mongoose.model('Sighting', sightingSchema);

// Middleware
app.use(express.json());

// Routes
app.get('/sightings', async (req, res) => {
  const sightings = await Sighting.find();
  res.json(sightings);
});

app.post('/sightings', async (req, res) => {
  const newSighting = new Sighting(req.body);
  await newSighting.save();
  res.json(newSighting);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
