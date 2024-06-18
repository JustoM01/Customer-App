const router = require('express').Router();
const userRoutes = require('./UserRoutes')
const carEstimateRoutes = require('./carEstimateRoutes')
const serviceType = require('./serviceTypeRoutes')
const priceRoutes = require('./PriceRoutes');
// Prefix all routes defined in `userRoutes.js` now making it /api/user after prefixing the api folder
router.use('/user', userRoutes);
router.use('/estimate', carEstimateRoutes)
router.use('/services', serviceType)
router.use('/price', priceRoutes)



module.exports = router;
