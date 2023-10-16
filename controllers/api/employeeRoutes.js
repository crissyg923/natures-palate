const router = require('express').Router();
const { Employee } = require('../../models');
const withAuth = require('../../utils/auth');

// Creates an employee after they create an account.
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
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
