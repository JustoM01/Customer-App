const router = require('express').Router();
const carEstimate = require('../../models/carEstimate');
const Price = require('../../models/Price');

// Helper function to calculate estimated cost
const calculateEstimatedCost = (basePrice, multiplier) => {
  return basePrice * multiplier; // Perform the calculation based on this logic
};

// Route to generate a quote
router.post('/generate-quote', async (req, res) => {
  const { serviceTypeId, vehicleType } = req.body;

  try {
    const priceInfo = await Price.findOne({
      where: {
        serviceTypeId,
        vehicleType,
      },
    });

    if (!priceInfo) {
      return res.status(404).json({ error: 'Pricing information not found for the specified service type and vehicle type' });
    }

    // passes basePrice from found in price table and multiplier to helper function
    const estimatedCost = calculateEstimatedCost(priceInfo.basePrice, priceInfo.multiplier);

    const newEstimate = await carEstimate.create({
      serviceType: priceInfo.serviceTypeId,
      date: new Date(),
      estimatedCost,
    });

    res.status(201).json({ message: 'Quote generated successfully!', newEstimate });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
