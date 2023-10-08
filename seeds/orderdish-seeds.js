const { OrderDish } = require('../models');

const orderdishData = [
  {
    
    dish_id: 1,
    order_id: 1,
   
  },
  {
    
    dish_id: 1,
    order_id: 2,
  },
  
  
];

const seedOrderDish = () => OrderDish.bulkCreate(orderdishData);

module.exports = seedOrderDish;
