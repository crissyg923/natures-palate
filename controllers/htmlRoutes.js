const router = require('express').Router();
const { Employee } = require('../models');
const apiRoutes = require('./api');
const {  Dish } = require('../models');
const withAuth = require('../utils/auth');

// GET route for getting all of the dishes that are on the menu
router.get('/', async (req, res) => {
  const imagePath1 = '/pic4.jpg';
  const imagePath2 = '/pic2.jpg';
  const imagePath3 = '/pic3.jpg';
  //console.log("SESSION:", req.session);
  res.render('home', { imagePath1, imagePath2, imagePath3, logged_in: req.session.logged_in});
});

router.get('/signup', async (req, res) => {
console.log(req.body);
  res.render('signup');
});

router.get('/login', async (req, res) => {

  res.render('login');
});



router.get('/employees', withAuth, async (req, res) => {
    try {
      console.log('Before database query 😊');
      const employeeData = await Employee.findAll({});
      console.log(employeeData);
    
      // Serialize data so the template can read it
      const employees = employeeData.map((emp) => emp.get({ plain: true }));
  
      // Pass serialized data and session flag into template
     
      console.log(req.session);
      res.render('employees',{ employees, logged_in: req.session.logged_in  } );
      console.log("Before rendering")
      console.log("template should be rendered")

      //res.json(employeeData);
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json(err);
    }
  });
/*
  router.get('/employees/:id', withAuth, async (req, res) => {
    try {
      const oneEmpData = await Employee.findByPk(req.params.id);
  
      const empSingle = oneEmpData.get({ plain: true });
      res.render('employees', { empSingle });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  */

  router.get('/menu', async (req, res) => {
    try {
      
      const dishData = await Dish.findAll();
    
      const dishes = dishData.map((dish) => dish.get({ plain: true }));

      res.render('menu',{ logged_in: req.session.logged_in, dishes: dishes} );
      console.log("template should be rendered")
      //res.json(eData);
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json(err);
    }
  });

  router.get('/menu', async (req, res) => {
    try {
      
      const dishData = await Dish.findAll();
    
      const dishes = dishData.map((dish) => dish.get({ plain: true }));

      res.render('menu',{ logged_in: req.session.logged_in, dishes: dishes} );

      console.log("template should be rendered")
      //res.json(eData);
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json(err);
    }
  });

  module.exports = router;
