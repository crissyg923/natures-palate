const { Customer } = require('../models');

const customerData = [
  {
    name: 'Strict Customer',
    address: 'Strick St',
    password: 'letitgo',
    
  },
  {
    name: 'Funny Customer',
    address: 'Funny St',
    password: 'letitgo',
    
  },
  {
    name: 'Nerdy Customer',
    address: 'Nerdy St',
    password: 'letitgo',
    
  },

];

const seedCustomers = () => Customer.bulkCreate(customerData);

module.exports = seedCustomers;
