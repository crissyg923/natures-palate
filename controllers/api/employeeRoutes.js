const router = require('express').Router();
const { Employee } = require('../../models');


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
});

router.post('/', async (req, res) => {
  try {
    const newEmployee = await Employee.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newEmployee);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id',  async (req, res) => {
  try {
    const employeeData = await Employee.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!employeeData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
