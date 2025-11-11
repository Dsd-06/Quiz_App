require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');

const app = express();

// Middlewares
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Quiz Application API');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
