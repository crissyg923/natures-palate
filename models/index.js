//const User = require('./User');
const Customer = require('./Customer');
const Employee = require('./Employee');
const Order = require('./Order');
const Dish = require('./Dish');
const OrderDish = require('./OrderDish');

//const Project = require('./Project');

/*User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };*/


Customer.hasMany(Order, {
  foreignKey: 'customer_id',
  onDelete: 'NULL'//-------------------------need to verify this
});

Order.belongsTo(Customer, {
  foreignKey: 'customer_id'
});


Employee.hasMany(Order, {
  foreignKey: 'employee_id',
  onDelete: 'NULL'//-------------------------need to verify this
});

Order.belongsTo(Employee, {
  foreignKey: 'employee_id'
});

Order.belongsToMany(Dish, {
  through:{ 
    model: OrderDish,
    foreignKey: 'order_id'},
    as: 'manyOrders'
});


Dish.belongsToMany(Order, {
  through: {
    model: OrderDish,
    foreignKey: 'dish_id'
   },
   as: "manyDishes"
});

module.exports = { Customer, Employee, Order, Dish, OrderDish };