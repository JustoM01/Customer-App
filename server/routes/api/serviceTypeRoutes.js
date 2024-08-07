const router = require('express').Router();
const serviceType = require('../../models/serviceType')
const Price = require('../../models/Price')


// Route to create a new service type
router.post('/', async (req, res) => {

    // destructure and makes it equal to body request
    const { name, description } = req.body;
  
    try {
      const newServiceType = await serviceType.create({
        name,
        description,
      });
  
      res.status(201).json({ message: 'Service type created successfully!', newServiceType });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });



  router.get('/services', async(req,res)=>{
    try{
    const allServices = await serviceType.findAll({
      include: [
        {
          model: Price,
          as: 'Prices',
          attributes: ['vehicleType', 'basePrice', 'multiplier'],
        },
      ],
    });
    res.status(200).json(allServices)}catch(err){
      res.status.json(err)
    }
  })
  
  module.exports = router;