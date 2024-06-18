// routes/price.js

const router = require('express').Router();
const Price = require('../../models/Price');
const ServiceType = require('../../models/serviceType');

// Route to create a new price record
router.post('/', async (req, res) => {
  const { serviceTypeId, vehicleType, basePrice, multiplier } = req.body;

  try {
    // Validates that the serviceTypeId exists
    const serviceType = await ServiceType.findByPk(serviceTypeId);
    if (!serviceType) {
      return res.status(404).json({ error: 'Service type not found' });
    }

    // Creates a new price record
    const newPrice = await Price.create({
      serviceTypeId,
      vehicleType,
      basePrice,
      multiplier,
    });

    res.status(201).json({ message: 'Price record created successfully!', newPrice });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
