const { Dish } = require('../models');

const dishData = [
  {
    dish_name: 'Nutty Toast',
    price: 2,
    allergy: 'Nuts',
  },
  {
    dish_name: 'Wheat Toast',
    price: 3,
    allergy: 'Gluten',
  },
  {
    dish_name: 'Buddha Bowl',
    price: 4,
    allergy: 'None',
  },
];

const seedDishes = () => Dish.bulkCreate(dishData);

module.exports = seedDishes;
