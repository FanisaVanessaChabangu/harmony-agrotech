const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Home Route
router.get('/', (req, res) => {
  res.render('index');
});

// Survey Route
router.get('/survey', (req, res) => {
  res.render('survey');
});

// Handle POST request to /survey
router.post('/survey', (req, res) => {
  const surveyData = req.body; // Access the form data from the request body
  console.log(surveyData); // Do something with the data, e.g., save to a database
  res.send('Survey data received'); // Send a response back to the client
});

// Sign Up Route
router.get('/signup', (req, res) => {
  res.render('signup');
});

// Sign Up Post Route
router.post('/signup', async (req, res) => {
  const { name, email, farmName } = req.body;
  const newUser = new User({ name, email, farmName });
  await newUser.save();
  res.redirect('/');
});

module.exports = router;
