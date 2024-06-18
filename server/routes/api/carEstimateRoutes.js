const router = require('express').Router();
const User = require('../../models/User');
const carEstimate = require('../../models/carEstimate');
const Price = require('../../models/Price');

// Helper function to calculate estimated cost
const calculateEstimatedCost = (basePrice, multiplier) => {
  return basePrice * multiplier; // Perform the calculation based on your logic
};

// Route to generate a quote
router.post('/generate-quote', async (req, res) => {
  const { userId, serviceTypeId } = req.body;



//   first finds use by primarkey so id
//   first finds use by primarkey so id
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }


    // saving vehicle details from user
    
    // saving vehicle details from user
    // saving vehicle details from user
    const vehicleDetails = user.vehicleDetails;

    const priceInfo = await Price.findOne({
      where: {
        serviceTypeId,
        vehicleType: vehicleDetails.type,
      },
    });

    if (!priceInfo) {
      return res.status(404).json({ error: 'Pricing information not found for the specified service type and vehicle type' });
    }



    // passes basePrice from found in price table and mulitplier to helper function
    const estimatedCost = calculateEstimatedCost(priceInfo.basePrice, priceInfo.multiplier);

    const newEstimate = await carEstimate.create({
      userId,
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
