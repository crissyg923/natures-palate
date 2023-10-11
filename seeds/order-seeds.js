const { Order } = require('../models');

const orderData = [
  {
    allergy: 'Nuts',
    status: "New Order",
    dish_id: 1,
    customer_id: 1,
    employee_id: 1
  },
  {
    allergy: 'Gluten',
    status: "New Order",
    dish_id: 2,
    customer_id: 2,
    employee_id: 1
  },
  
  
];

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;
