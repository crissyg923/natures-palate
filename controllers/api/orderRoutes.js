const router = require('express').Router();
const { Order, Dish, OrderDish} = require('../../models');
const withAuth = require('../../utils/auth');

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

router.get('/neworder', async (req, res) => {
  const dishData = await Dish.findAll().catch((err) => { 
      res.json(err);
    });
      const dishes = dishData.map((dish) => dish.get({ plain: true }));
      res.render('neworder', {
        dishes,
        loggedIn: true,
      });
    });

router.post('/neworder', async (req, res) => {
  try {
    const newOrder = await Order.create({
      allergy: req.body.allergy,
      status: req.body.status,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
