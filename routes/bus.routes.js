const express = require('express');
const router = express.Router();
const Bus = require('../models/bus.model');

router.post('/', async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.json(bus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/available/:seats', async (req, res) => {
  const buses = await Bus.findAll({
    where: {
      availableSeats: {
        [require('sequelize').Op.gt]: req.params.seats,
      },
    },
  });
  res.json(buses);
});

module.exports = router;
