const express = require('express');
const Pickup = require('../models/Pickup');
const router = express.Router();

// Schedule a pickup
router.post('/schedule', async (req, res) => {
  try {
    const { userId, date, time, wasteType, address } = req.body;
    
    const pickup = new Pickup({
      userId,
      date,
      time,
      wasteType,
      address
    });

    await pickup.save();
    res.status(201).json(pickup);
  } catch (error) {
    res.status(500).json({ message: 'Error scheduling pickup' });
  }
});

// Get upcoming pickups
router.get('/upcoming/:userId', async (req, res) => {
  try {
    const pickups = await Pickup.find({
      userId: req.params.userId,
      date: { $gte: new Date() },
      status: 'scheduled'
    }).sort({ date: 1 });
    
    res.json(pickups);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pickups' });
  }
});

module.exports = router;
