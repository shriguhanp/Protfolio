
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (Optional for initial deployment, assumes MONGODB_URI in env)
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
}

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${message}`);
    
    // Here you would typically save to MongoDB or send an email via SendGrid/Nodemailer
    // For this deployment template, we return success
    res.status(200).json({ 
      success: true, 
      message: "Message received. We'll be in touch soon at shriguhan7@gmail.com" 
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '/')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
