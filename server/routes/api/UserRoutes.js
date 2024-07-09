const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');
router.post('/', async (req, res) => {

    // destrcutres req from body
    const { name, email, password, phoneNumber, address,  } = req.body;
  
    try {
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

  const existingUser = await User.findOne({ where: { email } });

  if (!existingUser) {
    return res.status(404).json({ error: 'User not found' });
  }

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // Password is valid, login successful
  res.status(200).json({ message: 'Login successful!', user: existingUser });
} catch (err) {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
}

})



router.get('/users', async(req,res)=>{
  try{
 const allUsers = await   User.findAll({})
    res.status(201).json(allUsers)
  }catch(err){
    res.status(500).json({ error: 'Internal server error' })
  }
})




module.exports = router;
