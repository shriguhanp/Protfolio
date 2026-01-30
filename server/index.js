
// Reference for Backend Integration
/**
 * const express = require('express');
 * const mongoose = require('mongoose');
 * const cors = require('cors');
 * require('dotenv').config();
 * 
 * const app = express();
 * app.use(cors());
 * app.use(express.json());
 * 
 * mongoose.connect(process.env.MONGODB_URI)
 *   .then(() => console.log('Connected to MongoDB'))
 *   .catch(err => console.error(err));
 * 
 * app.post('/api/contact', async (req, res) => {
 *   try {
 *     const { name, email, message } = req.body;
 *     // Logic to save to DB...
 *     res.status(200).json({ success: true });
 *   } catch (error) {
 *     res.status(500).json({ error: error.message });
 *   }
 * });
 * 
 * app.listen(5000, () => console.log('Server running on port 5000'));
 */
