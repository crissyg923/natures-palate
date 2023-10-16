const router = require('express').Router();
const { Order, Dish, OrderDish} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
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
    res.render('orders', {
      orders,
      logged_in: req.session.logged_in,
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
      const { customer_name, allergy, status, dishes } = req.body;

      // Create the new order and insert it into the database
      const newOrder = await Order.create({
          customer_name,
          allergy,
          status
      });

      
      for (const id of dishes) {
          await OrderDish.create({
              dish_id: dish_id,
              order_id: newOrder.id
          });
      }
      
      res.status(200).json({ message: 'Order created successfully' });
  } catch (err) {
      console.error(err);
      res.status(500).json(err);
  }
});

module.exports = router;
