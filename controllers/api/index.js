const router = require('express').Router();
const orderRoutes = require('./orderRoutes');
const dishRoutes = require('./dishRoutes');
const employeeRoutes = require('./employeeRoutes');

router.use('/orders', orderRoutes);
router.use('/dishes', dishRoutes);
router.use('/employee', employeeRoutes);

module.exports = router;
