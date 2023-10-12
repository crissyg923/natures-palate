const { Dish } = require('../models');

const dishData = [
  {
    name: 'Nutty Toast',
    description: 'qwerty',
    allergies: 'Nuts',
    price: 2,
  },
  {
    name: 'Wheat Toast',
    description: 'qwerty',
    allergies: 'Gluten',
    price: 3,
  },
  {
    name: 'Buddha Bowl',
    description: 'qwerty',
    allergies: 'None',
    price: 4,
  },
];

const seedDishes = () => Dish.bulkCreate(dishData);

module.exports = seedDishes;
