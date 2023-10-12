const router = require('express').Router();
const { Employee } = require('../models');
// GET route for getting all of the dishes that are on the menu
router.get('/', async (req, res) => {
  const imagePath = '/bw.jpg';
  // Add a comment describing the purpose of the render method
  // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
  res.render('home', { imagePath, loggedIn:true });
});



router.get('/employees', async (req, res) => {
    try {
      console.log('Before database query 😊');
      const employeeData = await Employee.findAll({});
      console.log('After database query 💝, ', employeeData);
      // Serialize data so the template can read it
      const employees = employeeData.map((emp) => emp.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      console.log("Before rendering")
      res.render('employees',{ employees, loggedIn:true } );
      console.log("template should be rendered")
      //res.json(employeeData);
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json(err);
    }
  });

  module.exports = router;
