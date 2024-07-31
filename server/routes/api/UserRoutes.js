const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authenticateToken = require('../../jwt')
// Loads environment variables from my env file
require('dotenv').config();

// setting var for my env secret password
const secretKey = process.env.JWT_SECRET;


// Password validation function
const validatePassword = (password) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
  return passwordRegex.test(password);
};




// ROUTE FOR NEW USER
// ROUTE FOR NEW USER
// ROUTE FOR NEW USER
router.post('/', async (req, res) => {

    // destrcutres req from body
    const { name, email, password, phoneNumber, address,  } = req.body;





  

    try {



    // Validate password
    if (!validatePassword(password)) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character.' });
    }




    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ error: 'Email already registered' });
      }
  
 // Check if phone number exists
   const existingUserByPhoneNumber = await User.findOne({ where: { phoneNumber } });
    if (existingUserByPhoneNumber) {
      return res.status(409).json({ error: 'Phone number already registered' });
    }



      const newUser = await User.create({
        name,
        email,
        password,
        phoneNumber,
        address,
       
      });

    
  
      res.status(201).json({ message: 'User created successfully!', newUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });





router.post('/sign-in', async(req, res)=>{

const {email, password} = req.body

try {
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }


  // finding by email
  const existingUser = await User.findOne({ where: { email } });

  if (!existingUser) {
    return res.status(404).json({ error: 'User not found' });
  }

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid password' });
  }


  // Password is valid, generate a token
  const token = jwt.sign({ id: existingUser.id, email: existingUser.email }, secretKey, { expiresIn: '1h' });


  // Password is valid, login successful
  res.status(200).json({ message: 'Login successful!', user: existingUser , token});
} catch (err) {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
}

})


// jswt protected route
// jswt protected route
// jswt protected route
router.get('/users',authenticateToken, async(req,res)=>{
  try{
 const allUsers = await   User.findAll({})
    res.status(201).json(allUsers)
  }catch(err){
    res.status(500).json({ error: 'Internal server error' })
  }
})





// Route to get logged-in user data
router.get('/me', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;
