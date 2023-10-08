const { Employee } = require('../models');

const employeeData = [
  {
    name: 'Alex',
  },
  {
    name: 'Joel',
  },
  
];

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;
