const router = require('express').Router();
const { Employee } = require('../../models');
const withAuth = require('../../utils/auth');
/*
router.get('/', async (req, res) => {
  try {
    console.log('Before database query 😊');
    const employeeData = await Employee.findAll({});
    console.log('After database query 💝, ', employeeData);
    // Serialize data so the template can read it
    const employees = employeeData.map((emp) => emp.get({ plain: true }));

    // Pass serialized data and session flag into template
    console.log("Before rendering")
    res.render('employees',{ employees } );
    console.log("template should be rendered")
    //res.json(employeeData);
  } catch (err) {
    console.log('Error:', err);
    res.status(500).json(err);
  }
});*/
/*router.post('/api/employee', async (req, res) => {
  try {
    console.log('Received a POST request to /api/employee:', req.body);
    const empData = await Employee.create({
      employee_name: req.body.employee_name,
      position: req.body.position,
      address: req.body.address,
      password: req.body.password,
    });
    console.log('Employee data created:', empData);
    req.session.save(() => {
      req.session.user_id = empData.id; 
      req.session.logged_in = true;
      console.log('Session saved:', req.session);
      res.status(200).json(empData);
    });
  } catch (err) {
    console.log('Error creating employee data:', err);
    res.status(400).json(err);
  }
});*/
/*
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.session.user_id);
    const newEmployee = await Employee.create({
      
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newEmployee);
  } catch (err) {
    res.status(400).json(err);
  }
});
*/
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.session.user_id);
    
    const newEmp = await Employee.create(req.body);
    
    req.session.save(() => {
      req.session.user_id = newEmp.id;
      req.session.logged_in = true;

      res.status(200).json(newEmp);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    const userData = await Employee.findOne({ where: { name: req.body.name } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      //admin = ["aaaa", "oooo"].includes(userData.name) ? true : false
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
