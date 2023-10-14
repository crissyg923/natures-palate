const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.NP_DB) {
  sequelize = new Sequelize(process.env.NP_DB);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 80
    }
  );
}

module.exports = sequelize;
