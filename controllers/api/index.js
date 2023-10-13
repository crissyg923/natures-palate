const router = require('express').Router();
const orderRoutes = require('./orderRoutes');
const dishRoutes = require('./dishRoutes');

router.use('/orders', orderRoutes);
router.use('/dishes', dishRoutes);

const employeeRoutes = require('./employeeRoutes');
//router.use('/users', userRoutes);
//router.use('/projects', projectRoutes);

router.use('/employee', employeeRoutes);

module.exports = router;
