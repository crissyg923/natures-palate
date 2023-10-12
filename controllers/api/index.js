const router = require('express').Router();
const orderRoutes = require('./orderRoutes');
const 

router.use('/orders', orderRoutes);
// router.use('/projects', projectRoutes);

const employeeRoutes = require('./employeeRoutes');
//router.use('/users', userRoutes);
//router.use('/projects', projectRoutes);

router.use('/employee', employeeRoutes);

module.exports = router;
