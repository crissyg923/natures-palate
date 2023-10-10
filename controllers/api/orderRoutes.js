const router = require('express').Router();
const { Order, Dish} = require('../models');
const withAuth = require('../../utils/auth')

// GET all orders for orders.handlebars to render
router.get('/', withAuth, async (req, res) => {
  try {
    const orderData = await Order.findAll({
      include: [
        {
          model: Dish,
          attributes: ['dish_name', 'dish_description', 'dish_allergies'],
        },
      ],
    });

    const orders = orderData.map((order) =>
      order.get({ plain: true })
    );
    res.render('orders', {
      orders,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
