//const User = require('./User');
const Customer = require('./Customer');
const Employee = require('./Employee');
const Order = require('./Order');
const Dish = require('./Dish');
const OrderDish = require('./OrderDish');





Customer.hasMany(Order, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE'//-------------------------need to verify this
});

Order.belongsTo(Customer, {
  foreignKey: 'customer_id'
});


Employee.hasMany(Order, {
  foreignKey: 'employee_id',
  onDelete: 'CASCADE'//-------------------------need to verify this
});

Order.belongsTo(Employee, {
  foreignKey: 'employee_id'
});

Order.belongsToMany(Dish, {
  through:{ 
    model: OrderDish,
    foreignKey: 'order_id'
  },
    as: 'dishes'
});


Dish.belongsToMany(Order, {
  through: {
    model: OrderDish,
    foreignKey: 'dish_id'
   },
   as: "orders"
});


module.exports = { Customer, Employee, Order, Dish, OrderDish };