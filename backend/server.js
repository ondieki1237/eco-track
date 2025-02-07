const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const carbonRoutes = require('./routes/carbon');
const recyclingRoutes = require('./routes/recycling');
const pickupRoutes = require('./routes/pickup');
const progressRoutes = require('./routes/progress');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://bellarinseth:R73Me8mnoD5HoQtF@cluster0.7obez.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/carbon-footprint', carbonRoutes);
app.use('/recycling', recyclingRoutes);
app.use('/pickups', pickupRoutes);
app.use('/progress', progressRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});