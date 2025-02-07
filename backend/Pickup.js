const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true,
    enum: ['morning', 'afternoon', 'evening']
  },
  wasteType: {
    type: String,
    required: true,
    enum: ['recyclables', 'electronics', 'hazardous']
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'scheduled',
    enum: ['scheduled', 'completed', 'cancelled']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Pickup', pickupSchema);
