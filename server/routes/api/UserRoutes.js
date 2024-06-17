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








// this is an async function w req and res param
router.post('/login', async (req, res) => {

    // try and catch similar to if else
     // try and catch similar to if else
    try {

        // destructure email and password values and sets equal to whats sent in body
        
        // destructure email and password values and sets equal to whats sent in body
        // destructure email and password values and sets equal to whats sent in body
      const { email, password } = req.body;
  
    //   checks password and email if issue send erro
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }
  
    //  sets var equyal to user found by email
      const existingUser = await User.findOne({ email });
            // Checks if user exists
      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
     
  
      res.status(200).json({ message: 'Login successful!', user: existingUser });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  



module.exports = router;
