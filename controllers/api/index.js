const router = require('express').Router();
const orderRoutes = require('./orderRoutes');
<<<<<<< HEAD
// const projectRoutes = require('./projectRoutes');
=======
const dishRoutes = require('./dishRoutes');

router.use('/orders', orderRoutes);
router.use('/dishes', dishRoutes);

>>>>>>> b31bcf89e3842b59f8b923bfe3273d5d471ab7f6
const employeeRoutes = require('./employeeRoutes');
router.use('/orders', orderRoutes);

router.use('/employee', employeeRoutes);





module.exports = router;
