const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;
const mongoURI = 'mongodb://localhost:27017/FitGenius'; // Replace with your MongoDB URI

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
let db;

MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db('FitGenius'); // Specify your database name here
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Routes
const authRoutes = require('./src/routes/auth');
app.use('/auth', authRoutes);

// Example route to fetch users
app.get('/api/users', async (req, res) => {
  try {
    const users = await db.collection('users').find().toArray();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
