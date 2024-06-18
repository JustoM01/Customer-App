const router = require('express').Router();
const serviceType = require('../../models/serviceType')



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
  
  module.exports = router;