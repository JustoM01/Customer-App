const router = require('express').Router();
const User = require('../../models/User');

router.post('/', async (req, res) => {
  console.log('Request Body:', req.body); // Logs  my request body for debugging

  try {
    const { name, email, password, phoneNumber, address, vehicleDetails } = req.body;

    // Validates  if required fields are not present in the request body
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password,
      phoneNumber,
      address,
      vehicleDetails,
    });

    res.status(201).json({ message: 'User registered successfully!', newUser });
  } catch (err) {
    console.error('Error:', err); // Logs the error for debugging purposes
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
