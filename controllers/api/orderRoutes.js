const router = require('express').Router();
const { Order, Dish, OrderDish} = require('../../models');
const withAuth = require('../../utils/auth')

// GET all orders for orders.handlebars to render
router.get('/', async (req, res) => {
  try {
    const orderData = await Order.findAll({
      // include: [
      //   {
      //     model: OrderDish,
      //     attributes: ['dish_id'],
      //   },
      // ],
    });
   

    const orders = orderData.map((order) =>
      order.get({ plain: true })
    );
    res.render('orders', {
      orders,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
