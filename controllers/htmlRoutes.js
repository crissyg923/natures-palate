const router = require('express').Router();
const { Employee } = require('../models');
const apiRoutes = require('./api');
router.get('/', async (req, res) => {
  const imagePath = '/bw.jpg';
  console.log("SESSION:", req.session);
  res.render('home', { imagePath, logged_in: req.session.logged_in });
});

router.get('/signup', async (req, res) => {

  res.render('signup');
});

router.get('/login', async (req, res) => {

  res.render('login');
});



router.get('/employees', async (req, res) => {
    try {
      console.log('Before database query 😊');
      const employeeData = await Employee.findAll({});
    
      // Serialize data so the template can read it
      const employees = employeeData.map((emp) => emp.get({ plain: true }));
  
      // Pass serialized data and session flag into template
     
      console.log(req.session);
      res.render('employees',{ employees, logged_in: req.session.logged_in  } );
      console.log("template should be rendered")
      //res.json(employeeData);
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json(err);
    }
  });

  module.exports = router;
