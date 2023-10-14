const { Dish } = require('../models');

const dishData = [
  {
    name: 'Nutty Toast',
    description: 'Bread soaked in beaten eggs ',
    allergies: 'Nuts',
    price: 14,
  },
  {
    name: 'Wheat Toast',
    description: 'Bread that has been sliced and warmed via a close radiant heat source',
    allergies: 'Gluten',
    price: 7,
  },
  {
    name: 'Buddha Bowl',
    description: 'Quinoa, chickpeas and vegetables',
    allergies: 'None',
    price: 18,
  },
];

const seedDishes = () => Dish.bulkCreate(dishData);

module.exports = seedDishes;
