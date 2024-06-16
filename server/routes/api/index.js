const router = require('express').Router();
const userRoutes = require('./UserRoutes')

// Prefix all routes defined in `userRoutes.js` now making it /api/user after prefixing the api folder
router.use('/user', userRoutes);



module.exports = router;
