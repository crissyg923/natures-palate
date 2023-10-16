const router = require('express').Router();
const { Dish } = require('../../models');
const withAuth = require('../../utils/auth');

// Retrieves all dishes
router.get('/', async (req, res) => {
  try {
    const dishData = await Dish.findAll();
    const dishes = dishData.map((dish) => dish.get({ plain: true }));
    res.render('dishes',{ dishes } );
  } catch (err) {
    console.log('Error:', err);
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newDish = await Dish.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newDish);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dishData = await Dish.destroy({
      where: {
        id: req.params.id,
        //user_id: req.session.user_id,
      },
    });
    if (!dishData) {
      res.status(404).json({ message: 'No dish found with this id!' });
      return;
    }
    res.status(200).json(dishData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;