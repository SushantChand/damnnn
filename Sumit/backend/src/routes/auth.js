// backend/src/routes/auth.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define your routes
const USERNAME = 'Fit'; // Example username
const PASSWORD = 'Fit'; // Example password

// POST /auth/login - Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// GET /auth/users - Get users route (assuming handled by userController)
router.get('/users', userController.getUsers);

module.exports = router;
