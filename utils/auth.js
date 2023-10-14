const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect to home page
  if (!req.session.logged_in) {
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = withAuth;
