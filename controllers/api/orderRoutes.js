const router = require('express').Router();
const { Order, Dish, OrderDish} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const orderData = await Order.findAll({
      include: [
        {
          model: Dish,
          as: "dishes"
        },
         
  ]
  
 });
   

    const orders = orderData.map((order) => order.get({ plain: true }));
    // return res.json(orders)
    res.render('orders', {
      orders,
      logged_in: req.session.logged_in,
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
        logged_in: true,
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
      req.session.logged_in = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
