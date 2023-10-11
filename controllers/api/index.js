const router = require('express').Router();
const orderRoutes = require('./orderRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/orders', orderRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
