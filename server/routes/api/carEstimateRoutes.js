const router = require('express').Router();
const carEstimate = require('../../models/carEstimate');
const Price = require('../../models/Price');
const serviceType = require('../../models/serviceType')
const nodemailer = require('nodemailer');

// Helper function to calculate estimated cost
const calculateEstimatedCost = (basePrice, multiplier) => {
  return basePrice * multiplier; // Perform the calculation based on this logic
};

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'eliseo101801@gmail.com', 
    pass: 'sjhg hewm dgfj ihmv', //created app specific password in google
  },
});

router.post('/generate-quote', async (req, res) => {
  const { name, vehicleType,  email  } = req.body;



  // try and catch for post route

  try {
    const priceInfo = await Price.findOne({
      where: {
    
        vehicleType,
      },
      include: [{
        model: serviceType,
        where: { name: name },
        attributes: ['id'], // Ensures only required attributes are fetched
      }],
    });

    if (!priceInfo) {
      return res.status(404).json({ error: 'Pricing information not found for the specified service type and vehicle type' });
    }

    const estimatedCost = calculateEstimatedCost(priceInfo.basePrice, priceInfo.multiplier);
   

    // creating new estimate on table based on calculated estimated cost with multiplier
    const newEstimate = await carEstimate.create({
      serviceType: priceInfo.serviceTypeId,
      date: new Date(),
      estimatedCost,
    });

    // Send email notification using Nodemailer
    const mailOptions = {
      from: 'eliseo101801@gmail.com',
      to: email,
      subject: 'Quote Generated Successfully',
        html:`<div style="background-color: #f2f2f2; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">
  <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);">
    <h1 style="color: #e91e63; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 2.5rem; text-align: center; margin-bottom: 20px;">Get a Quote</h1>
    <p style="color: #333333; font-size: 1.2rem; text-align: center; margin-bottom: 20px;">Thank you for choosing our service. Below are the details of your quote:</p>
    <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px auto;">

    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
    
      <div style="flex: 1;">
        <h3 style="color: #333333; font-size: 1.2rem; margin-bottom: 10px;">Vehicle Type</h3>
        <p style="color: #666666; font-size: 1rem; margin: 0;">${vehicleType}</p>
      </div>
    </div>

    <div style="text-align: center;">
      <h3 style="color: #333333; font-size: 1.2rem; margin-bottom: 10px;">Estimated Cost</h3>
      <p style="color: #e91e63; font-size: 1.5rem; font-weight: bold; margin: 0;">$${estimatedCost}</p>
    </div>
  </div>
</div>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        // Handle error properly return a response to client
        return res.status(500).json({ error: 'Failed to send email notification' });
      }
      console.log('Email sent:', info.response);

      // Once email is sent successfully, send response to client
      res.status(201).json({ message: 'Quote generated successfully!', newEstimate });
    });

  } catch (err) {
    console.error('Error generating quote:', err);
    res.status(500).json({ error: 'Failed to generate quote' });
  }
});

module.exports = router;
