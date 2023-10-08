const seedCustomers = require('./customers-seeds');
const seedDishes = require('./dish-seeds');
const seedEmployees = require('./employee-seed');
const seedOrders = require('./order-seeds');
const seedOrderDish = require('./orderdish-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCustomers();
  console.log('\n----- Customers SEEDED -----\n');

  await seedDishes();
  console.log('\n----- Dishes SEEDED -----\n');

  await seedEmployees();
  console.log('\n----- Employees SEEDED -----\n');

  await seedOrders();
  console.log('\n----- Orders  SEEDED -----\n');
  
  await seedOrderDish();
  console.log('\n----- OrdersDishs  SEEDED -----\n');

  process.exit(0);
};

seedAll();
