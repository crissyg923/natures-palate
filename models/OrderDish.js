// This model fully instantiates the many to manuy
// relationship between order and dish.
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class OrderDish extends Model {}

OrderDish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'dish',
        key: 'id',
      },
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'order',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order_dish',
  }
);

module.exports = OrderDish;