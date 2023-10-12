const router = require('express').Router();
const { Order, Dish, OrderDish} = require('../../models');
const withAuth = require('../../utils/auth')

// GET all orders for orders.handlebars to render
router.get('/', async (req, res) => {
  try {
    const orderData = await Order.findAll({
      include: [
        {
          model: Dish,
          as: "dishes"
        }
  ]
  
 });
   

    const orders = orderData.map((order) => order.get({ plain: true }));
    // return res.json(orders)
    res.render('orders', {
      orders,
      loggedIn: true,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
