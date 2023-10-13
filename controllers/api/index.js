const router = require('express').Router();
const orderRoutes = require('./orderRoutes');
// const projectRoutes = require('./projectRoutes');
const employeeRoutes = require('./employeeRoutes');
router.use('/orders', orderRoutes);

router.use('/employee', employeeRoutes);





module.exports = router;
