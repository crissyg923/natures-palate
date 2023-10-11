const { Employee } = require('../models');

const employeeData = [
  {
    name: 'Alex',
    position: "chef",
    address: "1 St, NY",
    password: 'aaaa'
  },
  {
    name: 'Joel',
    position: "Owner",
    address: "2 St, MA",
    password: 'bbbb'
  },
  
];

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;
