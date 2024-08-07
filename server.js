const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const Jimp = require("jimp");
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// const employeeRoutes = require('./controllers/api/employeeRoutes');
// app.use('/api', employeeRoutes);
// const apiroutes = require('./controllers');
// app.use(apiroutes);
app.use(routes);

//Using Jimp Package for getting black and white picture with required size at home page
 Jimp.read("pic1.JPG", (err, lenna) => {
 if (err) throw err;
 lenna
   .resize(290, 220) 
   .quality(60) 
  //  .greyscale() 
    .write("./public/pic1.jpg"); 
}); 
Jimp.read("pic2.jpg", (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(290, 220) 
    .quality(60) 
   //  .greyscale() 
     .write("./public/pic2.jpg"); 
 }); 
 Jimp.read("pic3.jpg", (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(290, 220) 
    .quality(60) 
   //  .greyscale() 
     .write("./public/pic3.jpg"); 
 }); 
 Jimp.read("pic4.jpg", (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(290, 220) 
    .quality(60) 
   //  .greyscale() 
     .write("./public/pic4.jpg"); 
 }); 

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
